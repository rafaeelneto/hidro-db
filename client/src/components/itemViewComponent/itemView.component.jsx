/* eslint-disable react/prop-types */
import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, useMutation, gql } from '@apollo/client';
import {
  GridList,
  GridListTile,
  Paper,
  makeStyles,
  useTheme,
} from '@material-ui/core';

import {
  generatateInicialState,
  setDataChangesByTable,
  useDataStateStatus,
  useLoadingDataStatus,
  useResetDataStatus,
} from '../../utils/dataState.manager';

import MainFieldComponent from '../fields_components/mainField.component';
import LoadingComponent from '../loadingComponent/loading.component';
import EditPanelComponent from '../editPanel/editPanel.component';

let fieldsArray;

const composeGraphQlQuery = (table) => {
  let fieldsQueries = '';
  fieldsArray.forEach((field) => {
    if (!field.onlyTable) {
      fieldsQueries = `
        ${fieldsQueries}
        ${field.query()}
      `;
    }
  });
  const query = table.queries.GET_BY_ID(fieldsQueries);
  return gql`
    ${query}
  `;
};

const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: '100%',
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
  },
  gridTile: {
    height: '100% !important',
    '& .MuiGridListTile-tile': {
      padding: '10px',
      display: 'flex',
    },
  },
  subPageHeader: {
    paddingBottom: '20px',
  },
  tileLabel: {
    display: 'block',
    fontSize: '12pt',
    fontWeight: 700,
    letterSpacing: '.2em',
    padding: '10px',
    textTransform: 'uppercase',
  },
}));

const TableItem = ({ table }) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const { id: featureId } = useParams();

  fieldsArray = Array.from(table.fields.values()).filter(
    (field) => !field.onlyTable,
  );

  const [isSaved, changeDataStatus] = useDataStateStatus(table.tableName.name);
  const [isLoading, changeLoadingStatus] = useLoadingDataStatus(
    table.tableName.name,
  );
  const resetDataState = useResetDataStatus(table.tableName.name);

  const GET_DATA_STATE = gql`
    query {
      dataState @client
    }
  `;

  const {
    data: { dataState },
  } = useQuery(GET_DATA_STATE);

  if (
    Object.keys(dataState).length === 0 ||
    !dataState[table.tableName.name] ||
    !dataState[table.tableName.name].changes ||
    !dataState[table.tableName.name].changes[featureId]
  ) {
    setDataChangesByTable(
      dataState,
      table.tableName.name,
      generatateInicialState(fieldsArray, featureId),
    );
  }

  const GET_DATA = composeGraphQlQuery(table);

  const { data, loading, error } = useQuery(GET_DATA, {
    variables: {
      id: featureId,
    },
  });

  const DELETE_MUTATION = gql`
    ${table.mutations.DELETE()}
  `;

  const [deleteItem] = useMutation(DELETE_MUTATION);

  const UPDATE_MUTATION = gql`
    ${table.mutations.UPDATE()}
  `;

  const [updateItem] = useMutation(UPDATE_MUTATION, {
    refetchQueries: [
      {
        query: GET_DATA,
        variables: {
          id: featureId,
        },
      },
    ],
  });

  if (loading) return <LoadingComponent />;
  if (error) return <h1>Erro na aplicação</h1>;

  const updateItemListerner = (fieldsChanges) => {
    const changes = {};

    if (isSaved) return;

    fieldsArray.forEach((field) => {
      const newValue = fieldsChanges.get(field.columnName);
      if (!newValue) return;
      changes[field.mutation()] = newValue;
    });

    updateItem({ variables: { id: featureId, changes } });
    resetDataState(featureId);
  };

  const row = data[table.tableName.nameByPk];
  const mainField = fieldsArray.filter((field) => field.isMain)[0];

  return (
    <div className={classes.root}>
      <div className={classes.subPageHeader}>
        <MainFieldComponent
          value={mainField.getValue(row)}
          field={mainField}
          tableName={table.tableName.name}
          featureId={featureId}
        />

        <EditPanelComponent
          tableName={table.tableName.name}
          onDelete={deleteItem}
          onUpdate={updateItemListerner}
          featureId={featureId}
        />
      </div>
      <div>
        <GridList cellHeight={160} cols={3}>
          {table.fieldOrder.map((tile) => (
            <GridListTile key={tile.label} className={classes.gridTile}>
              <Paper elevation={2} style={{ width: '100%' }}>
                <span className={classes.tileLabel}>{tile.label}</span>
                {tile.fields.map((fieldName) => (
                  <div key={fieldName}>
                    {fieldsArray
                      .filter((field) => field.columnName === fieldName)[0]
                      .component(row, table.tableName.name, featureId)}
                  </div>
                ))}
              </Paper>
            </GridListTile>
          ))}
        </GridList>
      </div>
    </div>
  );
};

export default TableItem;
