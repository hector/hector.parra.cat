import {createMuiTheme} from '@material-ui/core/styles';

export const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
  typography: {
    useNextVariants: true,
  },
});

export const lightTheme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});
