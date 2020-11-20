import React, { useState } from 'react';
import { InputLabel, Input, FormControl } from '@material-ui/core/';

import {
  useChangeDataState,
  useDataStateByField,
} from '../../utils/dataState.manager';

const TextFieldComponent = ({
  value,
  field,
  tableName,
  featureId,
  ...otherProps
}) => {
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
    const newValue = event.target.value;
    if (!newValue) return null;
    changeDataState(value, newValue, field.columnName, featureId);
    setValue(newValue);
  };

  return (
    <FormControl>
      <InputLabel htmlFor="component-simple">{field.label}</InputLabel>
      <Input
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...otherProps}
        id="component-simple"
        value={fieldValue}
        onChange={handleChange}
      />
    </FormControl>
  );
};

export default TextFieldComponent;
