import React, { useState } from 'react';
import {
  useTheme,
  makeStyles,
  InputLabel,
  Input,
  FormControl,
} from '@material-ui/core/';
import { useQuery, gql } from '@apollo/client';

import { changeDataState } from '../../utils/dataState.manager';

const TextFieldComponent = ({
  value,
  field,
  tableName,
  featureId,
  ...otherProps
}) => {
  const [fieldValue, setValue] = useState(value);

  const GET_DATA_STATE = gql`
    query {
      dataState @client
    }
  `;

  const {
    data: { dataState },
  } = useQuery(GET_DATA_STATE);

  const handleChange = (event) => {
    const newValue = event.target.value;
    if (!newValue) return null;
    changeDataState(
      value,
      newValue,
      dataState,
      tableName,
      field.columnName,
      featureId,
    );
    setValue(newValue);
  };
  return (
    <FormControl>
      <InputLabel htmlFor="component-simple">{field.label}</InputLabel>
      <Input
        {...otherProps}
        id="component-simple"
        value={fieldValue}
        onChange={handleChange}
      />
    </FormControl>
  );
};

export default TextFieldComponent;
