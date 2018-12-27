import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import {MuiThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import {darkTheme} from './constants/Themes';
import IndexPage from './pages/IndexPage/IndexPage';

export default class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={darkTheme}>
        <React.Fragment>
          <CssBaseline/>
          <Router>
            <Switch>
              <Route exact path='/' component={IndexPage}/>
            </Switch>
          </Router>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}
