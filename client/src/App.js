import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { ApolloClient, ApolloProvider, gql } from '@apollo/client';

import './App.css';

import { cache } from './graphql/cache';

import LoginPage from './pages/login_page/loginpage.page';
import ConsolePage from './pages/console/console.page';
import CustomTheme from './themes/custom_theme';

const client = new ApolloClient({
  uri: 'http://localhost:3000/v1/graphql',
  //REPLACE BY A SETTING TO HANDLE AUTHETICATION
  headers: {
    'x-hasura-admin-secret': 'myadminsecretkey',
  },
  credentials: 'same-origin',
  cache,
});

function App() {
  let [pocos, setPocos] = useState([]);

  client
    .query({
      query: gql`
        query pocos {
          pocos {
            id
            nome
          }
        }
      `,
    })
    .then((result) => setPocos(result.data.pocos));

  //CHECK IF THE USER WAS A VISITING
  const isUserVisitante = true;
  if (isUserVisitante) {
    //render console visitante
  }

  //Check if the user was logged
  const userLogged = true;
  if (!userLogged) {
    //return redirenct homepage REDIRECTS TO HOMEPAGE
  }

  const silentRefreshSucess = true; //try silent refresh

  if (!silentRefreshSucess) {
    //redirect to login page
  }

  //IF ALL PASS
  //RENDER CONSOLE AUTHETICATED PAGE

  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <div className="App">
          <ThemeProvider theme={CustomTheme}>
            <Switch>
              <Route exact path="/login">
                <LoginPage />
              </Route>
              <Route exact path="/">
                <ConsolePage />
              </Route>
            </Switch>
          </ThemeProvider>
        </div>
      </ApolloProvider>
    </BrowserRouter>
  );
}
/**
<ul>
              {pocos.map((poco) => {
                return (
                  <li>
                    id: {poco.id}, nome: {poco.nome}
                  </li>
                );
              })}
            </ul>
 */

export default App;
