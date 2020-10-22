import React from 'react';
import { Button, useTheme, makeStyles } from '@material-ui/core/';
import { useHistory, useLocation } from 'react-router-dom';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      //transform: 'rotate(-90deg)',
      display: 'flex',
      flexDirection: 'column',
    },
    button: {
      margin: '0px 0 5px 0',
      alignSelf: 'stretch',
      borderRadius: '10px 0 0 10px',
      whiteSpace: 'nowrap',
      position: 'relative',
      '& .MuiButton-label': {
        webkitWritingMode: 'vertical-lr',
        writingMode: 'vertical-lr',
        transform: 'scale(-1, -1);',
        lineHeight: '25px',
      },
    },
    buttonActive: {
      background: '#fff',
      borderRadius: '10px 0 0 10px',
      '&:hover': {
        background: '#fff',
      },
    },
  };
});

const MainSideBar = ({ buttons }) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const history = useHistory();
  const { pathname } = useLocation();
  return (
    <nav className={classes.root}>
      {buttons.map((button, index) => {
        return (
          <Button
            key={index}
            className={`${classes.button} ${
              pathname.includes(button.path) ? classes.buttonActive : ''
            }`}
            onClick={() => history.push(button.path)}
          >
            {button.name}
          </Button>
        );
      })}
    </nav>
  );
};

export default MainSideBar;
