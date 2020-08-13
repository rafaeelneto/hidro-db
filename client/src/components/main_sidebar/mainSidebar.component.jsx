import React from 'react';
import { IconButton, useTheme, makeStyles, Tooltip } from '@material-ui/core/';
import { useHistory, useRouteMatch } from 'react-router-dom';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
    },
    button: {
      margin: '5px 0 5px 0',
      borderRadius: '10px 0 0 10px',
      '& .icon': {
        '& path': {
          stroke: '#fff !important',
        },
        height: '30px',
        width: 'auto',
      },
    },
    buttonActive: {
      background: '#fff',
      borderRadius: '10px 0 0 10px',
      '& .icon': {
        height: '35px',
        '& path': {
          fill: theme.palette.secondary.main,
        },
      },
      '&:hover': {
        background: '#fff',
        '& .icon': {
          '& path': {
            fill: theme.palette.secondary.light,
          },
        },
      },
    },
  };
});

const MainSideBar = ({ buttons }) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const history = useHistory();
  const { path } = useRouteMatch();
  return (
    <nav className={classes.root}>
      {buttons.map((button, index) => {
        return (
          <Tooltip key={index} title={button.name} placement="right">
            {path.includes(button.path) ? (
              <IconButton
                className={`${classes.button} ${classes.buttonActive}`}
                onClick={() => history.push(button.path)}
              >
                <button.iconActive className="icon" />
              </IconButton>
            ) : (
              <IconButton
                className={`${classes.button}`}
                onClick={() => history.push(button.path)}
              >
                <button.icon className="icon" />
              </IconButton>
            )}
          </Tooltip>
        );
      })}
    </nav>
  );
};

export default MainSideBar;
