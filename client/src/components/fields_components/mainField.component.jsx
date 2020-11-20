import React, { useState } from 'react';
import { useTheme, makeStyles, Input, FormControl } from '@material-ui/core/';

import {
  useChangeDataState,
  useDataStateByField,
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

  const valueModified = useDataStateByField(
    tableName,
    featureId,
    field.columnName,
  );

  const [fieldValue, setValue] = useState(
    valueModified.newValue ? valueModified.newValue : value,
  );

  const handleChange = (event) => {
    changeDataState(value, event.target.value, field.columnName, featureId);
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
