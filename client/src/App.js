import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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

/**
 * 
 client.writeData({
   data: {
     sidebarHidden: false,
   },
 });
 */

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

  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <div className="App">
          <ThemeProvider theme={CustomTheme}>
            <Switch>
              <Route exact path="/">
                <LoginPage />
              </Route>
              <Route exact path="/console">
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
