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

export const useDataChangesById = (tableName, id) => {
  const dataState = useDataState();

  return dataState[tableName].changes[id];
};

export const useDataChangesByField = (tableName, id, columnName) => {
  const dataState = useDataState();

  return dataState[tableName].changes[id][columnName];
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

export const setDataChangesByTable = (dataState, tableName, changes) => {
  const newDataState = { ...dataState };

  newDataState[tableName] = {
    ...newDataState[tableName],
    changes,
  };

  dataStateVar(newDataState);
};

export const useSelectItemsState = (tableName, inicialItems) => {
  let dataState = { ...useDataState() };

  const changeSelectItemState = (items) => {
    const newDataState = { ...dataState };
    newDataState[tableName] = { ...dataState[tableName], selectedItems: items };

    dataStateVar(newDataState);
    return newDataState;
  };

  if (!dataState[tableName] || !dataState[tableName].selectedItems) {
    dataState = changeSelectItemState(inicialItems);
  }

  return [dataState[tableName].selectedItems, changeSelectItemState];
};

export const useDataStateStatus = (tableName) => {
  const previousDataState = useDataState();
  const tableState = { ...previousDataState[tableName] };

  const changeDataStateStatus = (isSaved) => {
    const newDataState = { ...previousDataState };
    const newTableState = { ...tableState, isSaved };

    if (isSaved) {
      newTableState.changes = {};
    }

    newDataState[tableName] = newTableState;
    dataStateVar(newDataState);
  };

  return [tableState.isSaved, changeDataStateStatus];
};

export const useResetDataStatus = (tableName) => {
  const previousDataState = useDataState();
  const tableState = { ...previousDataState[tableName] };

  const resetDataStatus = () => {
    const newDataState = { ...previousDataState };
    const newTableState = { ...tableState, isSaved: false, changes: new Map() };

    newDataState[tableName] = newTableState;

    dataStateVar(newDataState);
  };

  return resetDataStatus;
};

export const useChangeDataState = (tableName) => {
  const previousDataState = useDataState();
  const previousTableState = { ...previousDataState[tableName] };

  const [, changeDataStateStatus] = useDataStateStatus(tableName);

  const changeDataState = (oldValue, newValue, fieldName, id) => {
    // CLONE DATASTATE OBJECT

    const changes = { ...previousTableState.changes };
    const newChangesState = { ...changes[id] };

    newChangesState[fieldName] = {
      ...newChangesState[fieldName],
      changed: true,
      newValue,
      oldValue,
    };

    // CHANGE PROPERTIES OF THE FIELD DATA STATE
    changes[id] = { ...changes[id], ...newChangesState };

    // CALL THE FUNCTION TO SET THE NEW DATA STATE FOR THIS TABLE
    changeDataStateStatus(false);
    setDataChangesByTable(previousDataState, tableName, changes);
  };
  return changeDataState;
};
