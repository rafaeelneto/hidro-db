import React from 'react';
import { Button, useTheme, makeStyles } from '@material-ui/core/';
import { useHistory, useLocation } from 'react-router-dom';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
    },
    button: {
      margin: '0px 0 10px 0',
      padding: '20px 0 20px 0',
      minWidth: '20px',
      alignSelf: 'stretch',
      borderRadius: '10px 0 0 10px',
      whiteSpace: 'nowrap',
      position: 'relative',
      '& .MuiButton-label': {
        color: theme.palette.primary.dark,
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
      '& .MuiButton-label': {
        color: theme.palette.secondary.main,
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
