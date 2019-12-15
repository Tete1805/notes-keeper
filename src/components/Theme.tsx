import React, { FC, ReactNode } from 'react';
import { cyan, green } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: green[700]
    },
    primary: {
      main: cyan[700]
    }
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: ['"Lato"', 'sans-serif'].join(',')
  }
});

interface ThemeChildren {
  children?: ReactNode;
}

const Theme: FC<ThemeChildren> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
