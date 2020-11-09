import React, { useState, useEffect } from 'react';

import { Button, Link } from '@material-ui/core/';
import TextField from '@material-ui/core/TextField';

import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/styles';

import { gql, useQuery } from '@apollo/client';
import { useParams, useHistory } from 'react-router-dom';

import { autheticate } from '../../utils/authetication';
import { tokenVar } from '../../graphql/cache';

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
      backgroundColor: theme.palette.grayNeutral,
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

const GET_TOKEN = gql`
  query GetToken {
    token @client
    userLoggedIn @client
  }
`;

export default function LoginPage() {
  const param = useParams();
  const history = useHistory();
  console.log(param);

  const theme = useTheme();
  const classes = useStyles(theme);
  const [identifier, setIdentifier] = useState(new FieldText('identifier', ''));
  const [password, setPassword] = useState(new FieldText('password', ''));

  const { data, loading, error } = useQuery(GET_TOKEN);

  if (loading) return <p>ERROR: {error.message}</p>;
  if (error) return <p>ERROR: {error.message}</p>;

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

    const authRes = await autheticate(identifier.value, password.value);
    if (authRes) {
      history.push('/');
    }
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
            <h1 className={classes.section_title}>TITULO</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className={classes.login_box}>
            <ion-icon className="user-icon" name="people-circle-outline" />
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
