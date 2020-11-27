import React, { useState } from 'react';
import { useTheme, makeStyles, Input, FormControl } from '@material-ui/core/';

import {
  useChangeDataState,
  useDataChangesByField,
} from '../../utils/dataState.manager';

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

  const changeDataState = useChangeDataState(tableName);

  const valueModified = useDataChangesByField(
    tableName,
    featureId,
    field.columnName,
  );

  const handleChange = (event) => {
    changeDataState(value, event.target.value, field.columnName, featureId);
  };

  return (
    <FormControl>
      <Input
        disableUnderline
        className={classes.inputMain}
        id="component-simple"
        value={valueModified.newValue ? valueModified.newValue : value}
        onChange={handleChange}
      />
    </FormControl>
  );
};

export default TextFieldComponent;
