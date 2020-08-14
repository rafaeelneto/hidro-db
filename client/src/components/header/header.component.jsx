import React, { useState } from 'react';
import {
  Button,
  IconButton,
  useTheme,
  makeStyles,
  Box,
  fade,
  InputBase,
} from '@material-ui/core/';

import CollapseSide from '../../themes/CollapseSide';

import { ReactComponent as LogoHeader } from '../../assets/logos/logo_cosanpa_db_wbg.svg';
import { ReactComponent as LabelHeader } from '../../assets/logos/logo_cosanpa_db_label_horizontal_wbg.svg';
import { ReactComponent as DoubleArrow } from '../../assets/icons/double_arrow.svg';

import { useHistory, useRouteMatch } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';

import { logout } from '../../utils/authetication';

import { sideBarHiddenVar } from '../../graphql/cache';

const LABEL_SIZE = '120px';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: 'flex',
      flexDirection: 'row',
      height: '60px',
      padding: '5px',
      width: '100%',
      alignItems: 'center',
    },
    logo: {
      height: '45px',
      padding: '0 5px 0 5px',
    },
    label: {
      width: LABEL_SIZE,
      padding: '5px',
    },
    collapseBtn: {
      transition: `transform ${300}ms ease-in-out`,
      '& .logo': {
        '& path': {
          fill: `${theme.palette.primary.light} !important`,
        },
        height: '15px',
        width: 'auto',
      },
    },
    collapseBtnRotate: {
      transform: 'rotate(180deg)',
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '40ch',
      },
    },
    userInfo: {
      marginLeft: 'auto',
    },
  };
});

const SIDEBAR_HIDDEN = gql`
  query IsUserLoggedIn {
    sideBarHidden @client
  }
`;

const Header = () => {
  //CONFIGURING THEME AND STYLES
  const theme = useTheme();
  const classes = useStyles(theme);

  const history = useHistory();

  //use query makes the react update the ui on the Var() change
  const { data } = useQuery(SIDEBAR_HIDDEN);
  const sidebarHidden = sideBarHiddenVar();

  return (
    <Box className={classes.root} boxShadow={2} zIndex="tooltip">
      <LogoHeader className={classes.logo} />
      <CollapseSide in={!sidebarHidden} size={LABEL_SIZE}>
        <div className={classes.label}>
          <LabelHeader />
        </div>
      </CollapseSide>
      <IconButton
        className={`${classes.collapseBtn} ${
          sidebarHidden ? classes.collapseBtnRotate : ''
        }`}
        onClick={() => {
          sideBarHiddenVar(!sidebarHidden);
        }}
      >
        <DoubleArrow className="logo" />
      </IconButton>
      <div className={classes.search}>
        <InputBase
          placeholder="Procure dentro do COSANPA-db…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
        />
      </div>
      <div className={classes.userInfo}>
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
    </Box>
  );
};

export default Header;
