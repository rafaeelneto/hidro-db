import { gql } from '@apollo/client';
import { isNetworkRequestInFlight } from '@apollo/client/core/networkStatus';
import { dataStateVar } from '../graphql/cache';

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

export const changeDataState = (
  oldValue,
  newValue,
  previousDataState,
  tableName,
  fieldName,
  id,
) => {
  // CLONE DATASTATE OBJECT
  const newDataState = JSON.parse(JSON.stringify(previousDataState[tableName]));

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
