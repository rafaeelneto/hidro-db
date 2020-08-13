import React from 'react';
import { Button, useTheme, makeStyles, Box } from '@material-ui/core/';
import { useHistory, useRouteMatch } from 'react-router-dom';

import { logout } from '../../utils/authetication';

import { ReactComponent as LogoHeader } from '../../assets/logos/logo_cosanpa_db_horizontal_wbg.svg';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: 'flex',
      flexDirection: 'row',
      height: '60px',
      padding: '5px',
      width: '100%',
      justifyContent: 'space-between',
    },
    logo: {
      height: '45px',
    },
  };
});

const Header = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const history = useHistory();
  return (
    <Box className={classes.root} boxShadow={2} zIndex="tooltip">
      <LogoHeader className={classes.logo} />
      <Button
        className="btn"
        onClick={() => {
          logout();
          history.push('/login');
        }}
      >
        Logout
      </Button>
    </Box>
  );
};

export default Header;
