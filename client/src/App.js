import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import './App.css';

import LoginPage from './pages/login_page/loginpage.page';
import ConsolePage from './pages/console/console.page';
import CustomTheme from './themes/custom_theme';

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache(),
});

function App() {
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

export default App;
