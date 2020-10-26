import React from 'react';
import { Button, useTheme, makeStyles, Tooltip } from '@material-ui/core/';
import { useHistory, useRouteMatch, useLocation } from 'react-router-dom';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
    },
    button: {
      margin: '5px 0 5px 0',
      color: theme.palette.primary.main,
      justifyContent: 'start',
      letterSpacing: '2px',
    },
    buttonActive: {
      color: theme.palette.secondary.main,
      backgroundColor: theme.palette.backgroundLightGray,
    },
  };
});

const SubSideBar = ({ subMain, subTables }) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const history = useHistory();
  const { path } = useRouteMatch();
  const { pathname } = useLocation();

  return (
    <nav className={classes.root}>
      {subMain.map((item, index) => {
        return (
          <Button
            key={index}
            className={`${classes.button} ${
              pathname.includes(item.path) ? classes.buttonActive : ''
            }`}
            onClick={() => history.push(path + item.path)}
          >
            {item.name}
          </Button>
        );
      })}
      {subTables.map((item, index) => {
        return (
          <Button
            key={index}
            className={`${classes.button} ${
              pathname.includes(item.path) ? classes.buttonActive : ''
            }`}
            onClick={() => history.push(path + item.path)}
          >
            {item.name}
          </Button>
        );
      })}
    </nav>
  );
};

export default SubSideBar;
