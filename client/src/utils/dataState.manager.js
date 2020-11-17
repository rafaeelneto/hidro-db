import { gql, useQuery } from '@apollo/client';
import { dataStateVar } from '../graphql/cache';

export const useDataState = () => {
  const GET_DATA_STATE = gql`
    query {
      dataState @client
    }
  `;

  const {
    data: { dataState },
  } = useQuery(GET_DATA_STATE);

  return dataState;
};

export const useDataStateByTable = (tableName) => {
  const dataState = useDataState();

  return dataState[tableName];
};

export const useDataStateById = (tableName, id) => {
  const dataState = useDataState();

  return dataState[tableName][id];
};

export const useDataStateByField = (tableName, id, columnName) => {
  const dataState = useDataState();

  return dataState[tableName][id][columnName];
};

export const generatateInicialState = (fieldsArray, id) => {
  const initialFieldsState = {};
  fieldsArray.forEach((field) => {
    const obj = {};

    obj[field.columnName] = {
      columnName: field.columnName,
      changed: false,
      newValue: null,
      oldValue: null,
    };

    initialFieldsState[id] = {
      ...initialFieldsState[id],
      ...obj,
    };
  });
  return initialFieldsState;
};

export const setDataStateByTable = (dataState, tableName, newData) => {
  const newDataState = { ...dataState };

  newDataState[tableName] = { ...newDataState[tableName], ...newData };
  dataStateVar(newDataState);
};

export const useChangeDataState = (tableName) => {
  const previousDataState = useDataStateByTable(tableName);
  const changeDataState = (oldValue, newValue, fieldName, id) => {
    // CLONE DATASTATE OBJECT

    const newDataState = JSON.parse(JSON.stringify(previousDataState));

    // CHANGE PROPERTIES OF THE FIELD DATA STATE
    newDataState[id][fieldName] = {
      ...newDataState[id][fieldName],
      changed: true,
      newValue,
      oldValue,
    };

    // CALL THE FUNCTION TO SET THE NEW DATA STATE FOR THIS TABLE
    setDataStateByTable(previousDataState, tableName, newDataState);
  };
  return changeDataState;
};
