import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import './App.css';

import LoginPage from './pages/login_page/loginpage.page';
import CustomTheme from './themes/custom_theme';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={CustomTheme}>
        <LoginPage />
      </ThemeProvider>
    </div>
  );
}

export default App;
