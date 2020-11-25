/* eslint-disable react/prop-types */

import React, { useState, useEffect } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField, makeStyles, useTheme } from '@material-ui/core';
import { gql, useQuery } from '@apollo/client';

import LoadingComponent from '../loadingComponent/loading.component';
import {
  useChangeDataState,
  useDataStateByField,
} from '../../utils/dataState.manager';

// CONSTRUCT THE QUERY TO EXECUTE BASED ON FIELDS STATE
const GET_DATA = (queryText) => gql`
  ${queryText}
`;

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '10px',
  },
}));

export default function AutoCompleteComponent({
  enumOptions,
  graphQlQuery,
  value,
  field,
  tableName,
  featureId,
}) {
  const theme = useTheme();
  const classes = useStyles(theme);

  const changeDataState = useChangeDataState(tableName);
  const valueModified = useDataStateByField(
    tableName,
    featureId,
    field.columnName,
  );

  // SET VALUE ID STATE
  const [valueId, setValueId] = useState(
    valueModified.newValue ? valueModified.newValue : value,
  );

  let options = [];

  // MAKE THE GRAPHQL QUERY WITH THE APOLLO HOOK
  const { data, loading, error } = useQuery(GET_DATA(graphQlQuery.query), {
    // SKIP IF THE THE GRAPHQL VARIABLE ISN'T PRESENT
    skip: !graphQlQuery,
  });

  // MAKE THE DATA TREATMENT OF THE RECEIVED GRAPHQL DATA
  if (graphQlQuery) {
    if (loading) return <LoadingComponent />;
    if (error) return <h1>Erro na aplicação</h1>;
    options = data[graphQlQuery.tableName].map(graphQlQuery.getFunction);
  }

  // handle on change of properties
  const handleChange = (event, newValue) => {
    // CHECK IF NEW VALUE IS PRESENT
    if (!newValue) return null;

    // SET THE DATA STATE
    changeDataState(value, newValue.value, field.columnName, featureId);

    // SET THIS STATE AS THE NEW VALUE
    setValueId(newValue.value);
  };

  return (
    <div classeName={classes.root}>
      <Autocomplete
        id="combo-box-demo"
        value={options.filter((option) => option.value === valueId)[0]}
        options={options}
        onChange={handleChange}
        getOptionLabel={(option) => option.label}
        renderInput={(params) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <TextField {...params} label={field.label} margin="normal" />
        )}
        style={{ width: 300 }}
      />
    </div>
  );
}
