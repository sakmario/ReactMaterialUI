import { yellow } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#63a4ff',
      main: '#1976d2',
      dark: '#004ba0',
      contrastText: '#fff',
    },
    secondary: {
      light: '#73e8ff',
      main: '#29b6f6',
      dark: '#0086c3',
      contrastText: '#000000',
    },
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 0,
      }, 
    }, 
  }, 

});

export default theme;