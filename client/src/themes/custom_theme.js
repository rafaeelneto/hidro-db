import { createMuiTheme } from '@material-ui/core/styles';

const theme = {
  palette: {
    primary: {
      main: '#27C4D9',
    },
    secondary: {
      main: '#FF9E2E',
    },
    grayNeutral: '#656565',
    backgroundLightGray: '#EDEDED',
  },
  typography: {
    fontFamily: [
      'Source Sans Pro',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    lato: {
      fontFamily: [
        'Lato',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
    button: {
      fontWeight: '600',
      letterSpacing: '4px',
    },
  },
};

export default createMuiTheme(theme);
