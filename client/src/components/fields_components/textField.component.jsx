import React, { useState } from 'react';
import {
  InputLabel,
  Input,
  FormControl,
  makeStyles,
  useTheme,
} from '@material-ui/core/';

import {
  useChangeDataState,
  useDataChangesByField,
} from '../../utils/dataState.manager';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '10px',
  },
}));

const TextFieldComponent = ({
  value,
  field,
  tableName,
  featureId,
  ...otherProps
}) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const changeDataState = useChangeDataState(tableName);

  const valueModified = useDataChangesByField(
    tableName,
    featureId,
    field.columnName,
  );

  const handleChange = (event) => {
    const newValue = event.target.value;
    changeDataState(value, newValue, field.columnName, featureId);
  };

  return (
    <div className={classes.root}>
      <FormControl>
        <InputLabel htmlFor="component-simple">{field.label}</InputLabel>
        <Input
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...otherProps}
          id="component-simple"
          value={valueModified.newValue ? valueModified.newValue : value}
          onChange={handleChange}
        />
      </FormControl>
    </div>
  );
};

export default TextFieldComponent;
