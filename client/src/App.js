import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import './App.css';

import { refreshToken } from './utils/authetication';

import LoginPage from './pages/login_page/loginpage.page';
import ConsolePage from './pages/console/console.page';
import CustomTheme from './themes/custom_theme';

let counter = 0;

function App() {
  // const { data, loading } = useQuery(GET_LOGIN_INFO);
  const [refresh, setRefresh] = useState();

  useEffect(() => {
    const verifyToken = async () => {
      const res = await refreshToken();
      setRefresh(res);
    };
    if (!refresh) {
      verifyToken();
    }
  }, [refresh]);

  if (refresh === undefined) return 'Loading...';

  counter += 1;
  console.log(counter);
  console.log(refresh);

  return (
    <BrowserRouter>
      <div className="App">
        <ThemeProvider theme={CustomTheme}>
          <Switch>
            <Route exact path="/login" component={LoginPage}></Route>
            <Route path="/">
              <ProtectRoutes />
            </Route>
          </Switch>
          {!refresh ? <Redirect to="/login" /> : ''}
        </ThemeProvider>
      </div>
    </BrowserRouter>
  );
}

const ProtectRoutes = () => {
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

  return <ConsolePage />;
};

export default App;
