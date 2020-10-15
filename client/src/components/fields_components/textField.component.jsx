import React from 'react';
import { Button, useTheme, makeStyles, TextField } from '@material-ui/core/';

const TextFieldComponent = () => {
  //CONFIGURING THEME AND STYLES
  //const theme = useTheme();
  //const classes = useStyles(theme);

  //const history = useHistory();

  //use query makes the react update the ui on the Var() change
  //const { data } = useQuery(SIDEBAR_HIDDEN);
  //const sidebarHidden = sideBarHiddenVar();

  return (
    <div className="div">
      <TextField />
      <Button
        className="btn"
        onClick={() => {
          logout();
          history.push('/login');
        }}
      >
        Sair
      </Button>
    </div>
  );
};

export default TextFieldComponent;
