import React from 'react';
import {MuiThemeProvider} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typed from 'react-typed';
import Typography from '@material-ui/core/Typography';

import './IndexPage.scss';
import {lightTheme} from '../../constants/Themes';
import code from './code';
import CodeWindow from '../../components/CodeWindow/CodeWindow';
import Particles from '../../components/Particles/Particles';
import ProjectsGrid from '../../components/Projects/ProjectsGrid';

export default class IndexPage extends React.PureComponent {

  render() {
    return (
      <Grid container className="IndexPage">
        <Grid container className="IndexPage__Hector">
          <Particles />
          <Grid item xs={12}>
            <Typography variant="h1" align="center">Hector Parra</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h3" align="center">
              <Typed
                strings={["I'm a freelance programmer"]}
                startDelay={2000}
                backDelay={4000}
                typeSpeed={40}
                backSpeed={50}
              />
            </Typography>
          </Grid>
          <Grid container className="IndexPage__Hector__CodeContainer" justify="center">
            <Grid item xs={12} align="center">
              <Typography variant="h6">Check my source code</Typography>
            </Grid>
            <Grid item xs={12} className="IndexPage__Hector__CodeContainer__Item">
              <CodeWindow title='HectorParra.js' className="IndexPage__Hector__CodeContainer__Item__Window">
                {code}
              </CodeWindow>
            </Grid>
          </Grid>
        </Grid>
        <MuiThemeProvider theme={lightTheme}>
          <Grid container spacing={16} className="IndexPage__Projects">
            <Grid item xs={12}>
              <Typography variant='h3' align="center" gutterBottom>Projects</Typography>
            </Grid>
            <ProjectsGrid />
            <Grid item xs={12}>
              <Typography align="center">© {(new Date()).getUTCFullYear()} Hector Parra</Typography>
            </Grid>
          </Grid>
        </MuiThemeProvider>
      </Grid>
    );
  }

}
