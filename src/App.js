import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import {MuiThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import CurriculumPage from './pages/CurriculumPage/CurriculumPage';
import IndexPage from './pages/IndexPage/IndexPage';
import Theme from './constants/Theme';

export default class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={Theme}>
        <React.Fragment>
          <CssBaseline/>
          <Router>
            <Switch>
              <Route exact path='/' component={IndexPage}/>
              <Route exact path='/curriculum' component={CurriculumPage}/>
            </Switch>
          </Router>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}
