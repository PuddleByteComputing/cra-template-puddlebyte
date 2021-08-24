import { createTheme } from '@material-ui/core/styles';
import { amber, cyan, deepPurple } from '@material-ui/core/colors';
import { lightGreen, pink, teal } from '@material-ui/core/colors';

const defaults = createTheme({});
console.log(defaults);

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: `code, kbd, listing, plaintext, pre, samp, tt, xmp {font-family: Roboto Mono, monospace;}`, 
    }, 
  },
  palette: {
    primary: teal,
    secondary: { main: deepPurple['700'] },
    error: { main: pink.A700 },
    warning: amber,
    info: cyan,
    success: lightGreen,
  },
    typography: {
    h1: { fontSize: '1.8rem' },
    h2: { fontSize: '1.6rem' },
    h3: { fontSize: '1.4rem' },
    h4: { fontSize: '1.3rem' },
    h5: { fontSize: '1.2rem', fontWeight: 500 },
    h6: { fontSize: '1.1rem' },
  },
});

export default theme;
