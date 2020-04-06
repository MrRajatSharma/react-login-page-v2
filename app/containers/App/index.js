import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from 'containers/Login';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'FreightSans',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
    ].join(','),
  },
});

export default function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path={["/"]} component={Login} />
        </Switch>
      </ThemeProvider>
    </div>
  );
}
