import React from 'react';

import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';

import background_main from '../../assets/images/background_main.jpg';
import logo_cosanpa_db from '../../assets/logos/logo_cosanpa_db_vertical_wbg.svg';

const useStyles = makeStyles({
  root: {
    width: '100vw',
  },
  hero_tile: {
    height: '100vh',
    width: '100vw',
    background: 'url(.assets/images/background_main.png)',
    backgroundImage: `url(${background_main})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    '& .main_container': {
      display: 'inherit',
      width: '100%',
      padding: '10%',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      '& .logo': {
        height: '300px',
        padding: '20px',
      },
    },
  },
  login_tile: {
    height: '80vh',
    color: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },
  visitante_btn: {
    width: '200px',
    background: 'linear-gradient(45deg, #ffcf60, #FF8E53)',
    letterSpacing: '5px',
    fontWeight: '700',
    padding: '10px',
    marginTop: '50px',
    color: 'white',
  },
});

export default function LoginPage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.hero_tile}>
        <div className="main_container">
          <img
            className="logo"
            src={logo_cosanpa_db}
            alt="Logo do projeto COSANPA-db"
          />
          <Button className={classes.visitante_btn}>
            Entrar como visitante
          </Button>
        </div>
      </div>
      <div className={classes.login_tile}>
        <Button>Faça login</Button>
      </div>
    </div>
  );
}
