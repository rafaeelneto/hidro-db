/* eslint-disable react/prop-types */

import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField, makeStyles, useTheme } from '@material-ui/core';
import { gql, useQuery } from '@apollo/client';

import LoadingComponent from '../loadingComponent/loading.component';
import {
  useChangeDataState,
  useDataChangesByField,
} from '../../utils/dataState.manager';

// CONSTRUCT THE QUERY TO EXECUTE BASED ON FIELDS STATE
const GET_DATA = (queryText) => gql`
  ${queryText}
`;

const useStyles = makeStyles((theme) => ({
  fieldWrapper: {
    padding: '10px',
  },
  autoComplete: {
    width: '100%',
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
  const valueModified = useDataChangesByField(
    tableName,
    featureId,
    field.columnName,
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
  };

  return (
    <div classeName={classes.fieldWrapper}>
      <Autocomplete
        className={classes.autoComplete}
        id="combo-box-demo"
        value={
          options.filter(
            (option) =>
              option.value ===
              (valueModified.newValue ? valueModified.newValue : value),
          )[0]
        }
        options={options}
        onChange={handleChange}
        getOptionLabel={(option) => option.label}
        renderInput={(params) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <TextField {...params} label={field.label} margin="normal" />
        )}
      />
    </div>
  );
}
