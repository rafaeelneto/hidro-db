import React, { useState } from 'react';
import { Route, Switch as RouteSwitch, useRouteMatch } from 'react-router-dom';
import { useTheme, makeStyles } from '@material-ui/core/';

import { gql, useQuery } from '@apollo/client';

import ItemView from '../itemViewComponent/itemView.component';

import MainTable from '../mainTable/mainTable.component';

import LoadingComponent from '../loadingComponent/loading.component';

const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    color: theme.palette.darkGray,
    fontWeight: 600,
    fontSize: '2em',
    textTransform: 'uppercase',
    letterSpacing: '0.2em',
  },
  tableWrapper: {
    height: '70vh',
  },
}));

const getFieldsState = (fields) => {
  const fieldState = [];
  Array.from(fields.values())
    .filter((field) => (field.onTable || field.onlyTable) && !field.onlyDetails)
    .forEach((field) => {
      const fieldObj = {
        name: field.columnName,
        label: field.label,
        present: field.onTable,
        isMain: field.isMain,
      };
      if (field.isMain) fieldState.unshift(fieldObj);
      else fieldState.push(fieldObj);
    });
  return fieldState;
};

const composeGraphQlQuery = (table, fieldsState) => {
  let fieldsQueries = '';
  fieldsState.forEach((field) => {
    if (field.present && table.fields.get(field.name)) {
      fieldsQueries = `
        ${fieldsQueries}
        ${table.fields.get(field.name).query()}
      `;
    }
  });
  const query = table.queries.GET_ALL('', '', fieldsQueries);
  return gql`
    ${query}
  `;
};

const composeDataTableObject = (table, fieldsState, data) => {
  const validFields = fieldsState.filter((field) => field.present);
  let rows = data[table.tableName.name];

  rows = rows.map((row) => {
    const newRow = { ...row };
    validFields.forEach((field) => {
      newRow[field.name] = table.fields.get(field.name).getValue(row);
    });
    return newRow;
  });

  return {
    headers: validFields,
    rows,
  };
};

const TableView = ({ table }) => {
  // DEFINE STYLES
  const theme = useTheme();
  const classes = useStyles(theme);

  // CALL FUNCTION TO DEFINE FIELDS STATE TO QUERY AND TO SHOW
  // eslint-disable-next-line react/prop-types
  const [fieldsState, setFieldsState] = useState(getFieldsState(table.fields));

  // SET TABLE's STATE VARIABLES AND HANDLE CHANGES ON PAGE
  const [tableSelectorHidden, setTableSelectorHidden] = useState(false);
  const [page, setPage] = React.useState(0);
  const [limit, setLimit] = React.useState(50);
  const [offset, setOffset] = React.useState(0);

  const handlePageChange = (event, newPage) => {
    setOffset(newPage > 0 ? newPage * limit : 0);
    setPage(newPage);
  };

  // CONSTRUCT THE QUERY TO EXECUTE BASED ON FIELDS STATE
  const GET_DATA = composeGraphQlQuery(table, fieldsState);

  // QUERY DATA WITH APOLLO CLIENT
  // ================= NEEDS TO QUERY THE COUNT OF ROWS ========================
  const { data, loading, error } = useQuery(GET_DATA, {
    variables: {
      limit,
      offset,
    },
  });

  if (loading) return <LoadingComponent />;
  if (error) return <h1>Erro na aplicação</h1>;

  // COMPOSE TABLE OBJECT AND DATA TREATMENT
  const dataTable = composeDataTableObject(table, fieldsState, data);

  /**
   *
   * THIS PART NEEDS READAPTATION
   */
  const handleChange = (index) => {
    // eslint-disable-next-line prefer-const
    let tmpFields = [...fieldsState];
    let tmpField = fieldsState[index];
    tmpField = {
      ...tmpField,
      present: !tmpField.present,
    };
    tmpFields[index] = tmpField;
    setFieldsState(tmpFields);
  };

  // SET GUIDES TO MAPS AND TABLES COMPONENTS

  return (
    <div className={classes.root}>
      <span className={classes.title}>{table.tableName.label}</span>
      <div>FILTROS...</div>
      <div className={classes.tableWrapper}>
        <MainTable dataTable={dataTable} />
      </div>
    </div>
  );
};

export default ({ table }) => {
  const { path } = useRouteMatch();

  return (
    <RouteSwitch>
      <Route exact path={path}>
        <TableView table={table} />
      </Route>
      <Route path={`${path}/:id`}>
        <ItemView table={table} />
      </Route>
    </RouteSwitch>
  );
};
