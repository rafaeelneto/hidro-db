import React, { useState } from 'react';
import {
  useTheme,
  makeStyles,
  InputLabel,
  Input,
  FormControl,
} from '@material-ui/core/';

const TextFieldComponent = ({ value, field }) => {
  const [fieldValue, setValue] = useState(value);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <FormControl>
      <InputLabel htmlFor="component-simple">{field.label}</InputLabel>
      <Input id="component-simple" value={fieldValue} onChange={handleChange} />
    </FormControl>
  );
};

export default TextFieldComponent;
