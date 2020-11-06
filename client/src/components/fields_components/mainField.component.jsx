import React, { useState } from 'react';
import { useTheme, makeStyles, Input, FormControl } from '@material-ui/core/';

const useStyles = makeStyles((theme) => ({
  inputMain: {
    fontWeight: '700',
    fontSize: '2rem',
    width: '50rem',
  },
}));

const TextFieldComponent = ({ value }) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const [fieldValue, setValue] = useState(value);

  const handleChange = (event) => {
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
