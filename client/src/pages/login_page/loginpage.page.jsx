import React, { useState, useEffect } from 'react';

import { Button, Link } from '@material-ui/core/';
import TextField from '@material-ui/core/TextField';

import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/styles';

import background_main from '../../assets/images/background_main.jpg';
import logo_cosanpa_db from '../../assets/logos/logo_cosanpa_db_vertical_wbg.svg';

const useStyles = makeStyles((theme) => {
  const variables = {
    login_tile: {
      mobile: {
        height: 'auto',
      },
      desktop: {
        height: '600px',
      },
    },
    login_boxes: {
      mobile: {
        width: '90%',
      },
      desktop: {
        width: '40%',
      },
    },
  };

  return {
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
      height: '600px',
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
      background: theme.palette.backgroundLightGray,
      height: variables.login_tile.mobile.height,
      width: '100%',
      color: 'black',
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      '& .login_container': {
        display: 'inherit',
        alignContent: 'stretch',
        justifyContent: 'space-between',
        flexDirection: 'column',
        alignItems: 'center',
        [theme.breakpoints.up('md')]: {
          flexDirection: 'row',
        },
      },
    },
    login_box: {
      height: 'auto',
      width: variables.login_boxes.mobile.width,
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
      '& ion-icon': {
        fontSize: '84px',
        alignSelf: 'center',
        color: theme.palette.primary.dark,
      },
    },
    info_box: {
      width: variables.login_boxes.mobile.width,
      '& p': {
        color: theme.palette.grayNeutral,
        fontFamily: theme.typography.lato.fontFamily,
        fontWeight: '500',
      },
      '& h1': {
        fontFamily: theme.typography.fontFamily,
        color: theme.palette.primary.main,
        fontWeight: '600',
      },
    },
    visitante_btn: {
      width: '300px',
      background: 'linear-gradient(45deg, #ffcf60, #FF8E53)',
      fontWeight: '700',
      padding: '10px',
      marginTop: '50px',
      color: 'white',
    },
    sectionBtn: {
      color: 'white',
      margin: '0 5px',
      letterSpacing: '2px',
    },
    section_title: {
      fontFamily: theme.typography.h1,
      color: 'white',
      fontWeight: 500,
    },
    inputFieldLogin: {
      margin: '10px 0',
    },
    [theme.breakpoints.up('md')]: {
      login_tile: {
        height: variables.login_tile.desktop.height,
      },
      login_box: {
        width: variables.login_boxes.desktop.width,
        maxHeight: '80%',
      },
      info_box: {
        width: variables.login_boxes.desktop.width,
      },
    },
  };
});

class FieldText {
  constructor(name, value, error = false, errorMsg = '') {
    this.name = name;
    this.value = value;
    this.error = error;
    this.errorMsg = errorMsg;
  }
}

export default function LoginPage() {
  const theme = useTheme();
  const classes = useStyles(theme);

  const [identifier, setIdentifier] = useState(new FieldText('identifier', ''));
  const [password, setPassword] = useState(new FieldText('password', ''));

  const fieldType = {
    type: TextField,
  };

  const fields = {
    identifier,
    password,
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(fields.identifier.value);
    if (fields.identifier.value === '') {
      console.log('vazio');
      setIdentifier({
        ...fields.identifier,
        error: true,
        errorMsg: 'Campo Vazio',
      });
      return;
    }
    if (fields.password.value === '') {
      console.log('vazio');
      setPassword({
        ...fields.password,
        error: true,
        errorMsg: 'Campo Vazio',
      });
      return;
    }

    const userInfo = JSON.stringify({
      login_name: identifier.value,
      password: password.value,
    });

    const fetchData = await fetch('http://localhost/v1/api/user/login', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc
      mode: 'cors', // no-cors, *cors, same-origin
      headers: {
        'Content-Type': 'application/json',
      },
      body: userInfo, // body data type must match "Content-Type" header
    });
    const data = await fetchData.json();

    console.log(data);
  };

  const handleChange = async (event) => {
    const { name, value } = event.target;
    const field = {
      ...fields[name],
      value,
    };

    console.log(field.value);
    if (field.name === 'identifier') {
      setIdentifier(field);
    }
    if (field.name === 'password') {
      setPassword(field);
    }
  };

  const handleLoginButton = () => {
    console.log(identifier, password);
  };

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
          <div className={classes.info_box}>
            <h1 className={classes.section_title}>
              Faça login para ter acesso avançado e para contribuir conosco
            </h1>
            <p>
              O nosso sistema é uma ferramenta colaborativa e integrada para o
              gerenciamento de informações da COSANPA e conta com a ajuda de
              toda a equipe da companhia para isso. Use seu login para entrar em
              seu perfil. Caso não tenha o acesso, entre em contato conosco.
            </p>
          </div>
          <div className={classes.login_box}>
            <ion-icon
              className="user-icon"
              name="people-circle-outline"
            ></ion-icon>
            <form
              className="login-form"
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit}
            >
              <TextField
                id="identifier"
                name={fields.identifier.name}
                label="Login/DRT/Email"
                variant="outlined"
                onChange={handleChange}
                className={classes.inputFieldLogin}
                error={fields.identifier.error}
                helperText={
                  fields.identifier.error ? fields.identifier.errorMsg : ''
                }
                required
              />
              <TextField
                id="password"
                name={fields.password.name}
                type="password"
                label="Senha"
                variant="outlined"
                onChange={handleChange}
                className={classes.inputFieldLogin}
                required
                error={fields.password.error}
                helperText={
                  fields.password.error ? fields.password.errorMsg : ''
                }
              />
              <Button
                className={`${classes.visitante_btn} login-btn`}
                type="submit"
              >
                LOGIN
              </Button>
            </form>

            <Link>Esqueceu sua senha?</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
