import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { useQuery, gql } from '@apollo/client';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import './App.css';

import { refreshToken } from './utils/authetication';

import LoginPage from './pages/login_page/loginpage.page';
import ConsolePage from './pages/console/console.page';
import CustomTheme from './themes/custom_theme';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ThemeProvider theme={CustomTheme}>
          <Switch>
            <Route exact path="/login" component={LoginPage}></Route>
            <Route exact path="/" component={ProtectRoutes} />
          </Switch>
        </ThemeProvider>
      </div>
    </BrowserRouter>
  );
}

const GET_LOGIN_INFO = gql`
  query GetToken {
    token @client
    userLoggedIn @client
  }
`;

const ProtectRoutes = () => {
  const { data, loading } = useQuery(GET_LOGIN_INFO);

  //CHECK IF THE USER WAS A VISITING IN LOCALS
  const isUserVisitante = false;
  if (isUserVisitante) {
    //render console visitante
  }

  //Check if the user was logged
  const userLogged = true;
  if (!userLogged) {
    //return REDIRECTS TO HOMEPAGE
  }

  refreshToken().then((res) => {
    if (!res) {
      return <Route exact path="/login" component={LoginPage} />;
    }
  });

  return <ConsolePage />;
};

export default App;
