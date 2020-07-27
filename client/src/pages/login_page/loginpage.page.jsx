import React from 'react';

import { Button, Link } from '@material-ui/core/';
import TextField from '@material-ui/core/TextField';

import { makeStyles } from '@material-ui/core/styles';

import background_main from '../../assets/images/background_main.jpg';
import logo_cosanpa_db from '../../assets/logos/logo_cosanpa_db_vertical_wbg.svg';

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflow: 'overlay',
    overflowX: 'hidden',
  },
  header: {
    position: 'absolute',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    '& .header-container': {
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-end',
      alignContent: 'center',
    },
    '& .login_section_btn': {
      background: 'linear-gradient(45deg, #56afbc, #197f8c)',
      width: '80px',
    },
  },
  containerWrapper: {
    maxWidth: '1132px',
    margin: '20px',
  },
  hero_tile: {
    height: '100vh',
    width: '100%',
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
    background: 'linear-gradient(45deg, #00525f, #00525f)',
    height: '80vh',
    width: '100%',
    color: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    '& .login_container': {
      display: 'inherit',
      alignContent: 'stretch',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  },
  login_box: {
    width: '40%',
    height: '400px',
    background: 'white',
    padding: '40px',
    borderRadius: '20px',
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'column',
    '& .login-form': {
      display: 'flex',
      justifyContent: 'center',
      flexFlow: 'column',
    },
    '& .login-btn': {
      margin: '10px 0',
      width: 'auto',
    },
  },
  infoBox: {
    width: '40%',
    '& p': {
      color: '#f6f6f6',
    },
    '& h2': {
      color: 'white',
    },
  },
  visitante_btn: {
    width: '300px',
    background: 'linear-gradient(45deg, #ffcf60, #FF8E53)',
    letterSpacing: '3px',
    fontWeight: '700',
    padding: '10px',
    marginTop: '50px',
    color: 'white',
  },
  sectionBtn: {
    color: 'white',
    margin: '0 10px',
  },
  section_title: {
    color: '#0093a7',
    fontWeight: 500,
  },
  inputFieldLogin: {
    margin: '10px 0',
  },
});

export default function LoginPage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <div className={`${classes.containerWrapper} header-container`}>
          <Button className={classes.sectionBtn}>Sobre</Button>
          <Button className={classes.sectionBtn}>Ajuda</Button>
          <Button className={classes.sectionBtn}>Contato</Button>
          <Button className={`${classes.sectionBtn} login_section_btn`}>
            LOG IN
          </Button>
        </div>
      </header>
      <div className={classes.hero_tile}>
        <div className={`${classes.container} main_container`}>
          <img
            className="logo"
            src={logo_cosanpa_db}
            alt="Logo do projeto COSANPA-db"
          />
          <Button className={classes.visitante_btn}>
            Entrar como Visitante
          </Button>
        </div>
      </div>
      <div className={classes.login_tile}>
        <div className={`${classes.containerWrapper} login_container`}>
          <div className={classes.infoBox}>
            <h2 className={classes.section_title}>
              Faça login para ter acesso avançado e para contribuir conosco
            </h2>
            <p>
              O nosso sistema é uma ferramenta colaborativa e integrada para o
              gerenciamento de informações da COSANPA e conta com a ajuda de
              toda a equipe da companhia para isso. Use seu login para entrar em
              seu perfil. Caso não tenha o acesso, entre em contato conosco.
            </p>
          </div>
          <div className={classes.login_box}>
            <form className="login-form" noValidate autoComplete="off">
              <TextField
                id="login"
                label="Login/DRT/Email"
                variant="outlined"
                className={classes.inputFieldLogin}
              />
              <TextField
                id="psw"
                label="Senha"
                variant="outlined"
                type="password"
                className={classes.inputFieldLogin}
              />
            </form>
            <Button className={`${classes.visitante_btn} login-btn`}>
              Faça login
            </Button>
            <Link>Esqueceu sua senha?</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
