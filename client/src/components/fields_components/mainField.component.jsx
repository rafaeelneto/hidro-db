import React, { useState } from 'react';
import { useTheme, makeStyles, Input, FormControl } from '@material-ui/core/';
import { gql, useQuery } from '@apollo/client';

import { changeDataState } from '../../utils/dataState.manager';

const useStyles = makeStyles((theme) => ({
  inputMain: {
    fontWeight: '700',
    fontSize: '2rem',
    width: '50rem',
  },
}));

const TextFieldComponent = ({ value, field, tableName, featureId }) => {
  const theme = useTheme();
  const classes = useStyles(theme);
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
    changeDataState(
      value,
      event.target.value,
      dataState,
      tableName,
      field.columnName,
      featureId,
    );
    setValue(event.target.value);
  };
  return (
    <FormControl>
      <Input
        disableUnderline
        className={classes.inputMain}
        id="component-simple"
        value={fieldValue}
        onChange={handleChange}
      />
    </FormControl>
  );
};

export default TextFieldComponent;
