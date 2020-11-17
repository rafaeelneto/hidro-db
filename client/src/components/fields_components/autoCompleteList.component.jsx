import React, { useState } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField, FormControl, Input, InputLabel } from '@material-ui/core';
import { gql, useQuery } from '@apollo/client';

import LoadingComponent from '../loadingComponent/loading.component';
import {
  useChangeDataState,
  useDataState,
  useDataStateByField,
} from '../../utils/dataState.manager';
import { useEffect } from 'react';

// CONSTRUCT THE QUERY TO EXECUTE BASED ON FIELDS STATE
const GET_DATA = (queryText) => gql`
  ${queryText}
`;

export default function ({
  enumOptions,
  graphQlQuery,
  value,
  field,
  tableName,
  featureId,
}) {
  const changeDataState = useChangeDataState(tableName);
  const valueModified = useDataStateByField(
    tableName,
    featureId,
    field.columnName,
  );

  const [valueId, setValueId] = useState(
    valueModified.newValue ? valueModified.newValue : value,
  );

  let options = [];

  const { data, loading, error } = useQuery(GET_DATA(graphQlQuery.query), {
    skip: !graphQlQuery,
  });

  if (graphQlQuery) {
    if (loading) return <LoadingComponent />;
    if (error) return <h1>Erro na aplicação</h1>;
    options = data[graphQlQuery.tableName].map(graphQlQuery.getFunction);
  }

  const handleChange = (newValue) => {
    if (!newValue) return null;
    changeDataState(value, newValue.value, field.columnName, featureId);
    setValueId(newValue.value);
  };

  return (
    <Autocomplete
      id="combo-box-demo"
      value={options.filter((option) => option.value === valueId)[0]}
      options={options}
      onChange={handleChange}
      getOptionLabel={(option) => option.label}
      renderInput={(params) => (
        <TextField {...params} label={field.label} margin="normal" />
      )}
      style={{ width: 300 }}
    />
  );
}
