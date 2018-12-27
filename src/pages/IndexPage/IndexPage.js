import React from 'react';
import Typed from 'react-typed';
import Typography from '@material-ui/core/Typography';

import './IndexPage.scss';
import code from './code';
import CodeWindow from '../../components/CodeWindow/CodeWindow';
import Particles from '../../components/Particles/Particles';

export default class IndexPage extends React.Component {

  render() {
    return (
      <div className="IndexPage">
        <Particles className="IndexPage__Particles"/>
        <div className="IndexPage__Content">
          <Typography variant='h1'>Hector Parra</Typography>
          <Typography variant='h3'>
            <Typed
              strings={["I'm a freelance programmer"]}
              startDelay={2000}
              backDelay={4000}
              typeSpeed={40}
              backSpeed={50}
            />
          </Typography>
          <div className="IndexPage__Content__Code">
            <Typography variant='h6'>Check my source code</Typography>
            <CodeWindow title='HectorParra.js' className="IndexPage__Content__Code__Window">
              {code}
            </CodeWindow>
          </div>
        </div>
      </div>
    );
  }

}
