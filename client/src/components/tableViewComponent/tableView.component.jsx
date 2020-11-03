import React, { useState } from 'react';
import { Route, Switch as RouteSwitch, useRouteMatch } from 'react-router-dom';
import { useTheme, makeStyles } from '@material-ui/core/';

import TableItem from '../tableItemComponent/tableItem.component';

const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  tableWrapper: {
    height: '60vh',
  },
  tableContainer: {
    height: '100%',
    overflowY: 'scroll',
  },
}));

const getFieldsState = (fields) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  Array.from(fields.values())
    .filter((field) => (field.onTable || field.onlyTable) && !field.onlyDetails)
    .map((field) => ({
      name: field.columnName,
      present: field.onTable,
    }));

const TableView = ({ table }) => {
  // DEFINE STYLES
  const theme = useTheme();
  const classes = useStyles(theme);

  const [tableSelectorHidden, setTableSelectorHidden] = useState(false);

  // CALL FUNCTION TO DEFINE FIELDS STATE
  const [fieldsState, setFieldsState] = useState(getFieldsState(table.fields));

  // CONSTRUCT THE QUERY TO EXECUTE BASED ON FIELDS STATE

  // QUERY DATA WITH APOLLO CLIENT

  // COMPOSE TABLE OBJECT AND DATA TREATMENT

  // SET TABLE's STATE VARIABLES AND HANDLE CHANGES ON PAGE
  const [page, setPage] = React.useState(0);
  const [limit, setLimit] = React.useState(50);
  const [offset, setOffset] = React.useState(0);

  const handlePageChange = (event, newPage) => {
    //
    setOffset(newPage > 0 ? newPage * limit : 0);
    setPage(newPage);
  };

  /**
   *
   * THIS PART NEEDS READAPTATION
   */
  const handleChange = (index) => {
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
      <h3>Poços</h3>
      <div>FILTROS...</div>

      <div />
    </div>
  );
};

export default ({ table }) => {
  const { path } = useRouteMatch();

  return (
    <RouteSwitch>
      <Route exact path={path} table={table}>
        <TableView table={table} />
      </Route>
      <Route path={`${path}/:id`} table={table}>
        <TableItem />
      </Route>
    </RouteSwitch>
  );
};
