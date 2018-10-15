import React from 'react';
import Typed from 'react-typed';
import Typography from '@material-ui/core/Typography';

import './IndexPage.scss';
import CodeWindow from '../../components/CodeWindow/CodeWindow';
import Particles from '../../components/Particles/Particles';

const code = `
export default class {
  name = 'Hector';
  surname = 'Parra';
  
  location = 'Barcelona';
  
  technologies = {
    frontend: ['Javascript', 'React', 'HTML', 'CSS'],
    backend: ['Ruby on Rails', 'Flask', 'SQL'],
    mobile: ['React Native'],
    devops: ['AWS', 'Capistrano']
  };
  
  experience = ['+${(new Date()).getUTCFullYear() - 2007} years coding', '+${(new Date()).getUTCFullYear() - 2011} years freelancing'];
  
  studies = {
    2010: 'BSc Computer Engineer',
    2013: 'MSc Sound and Music Computing'
  };
  
  languages = ['English', 'Spanish', 'Catalan'];
  
  passions = ['Music', 'Blockchain'];
  
  contact = {
    email: \`\${this.name}@\${this.surname}.cat\`,
    github: 'https://github.com/hector',
    linkedin: 'https://www.linkedin.com/in/hectorparrarodriguez/'
  };
}
`.trim();

const subtitles = [
  "I'm a freelance programmer",
];

export default class IndexPage extends React.Component {

  render() {
    return (
      <div className="IndexPage">
        <Particles className="IndexPage__Particles"/>
        <div className="IndexPage__Content">
          <Typography variant='h1'>Hector Parra</Typography>
          <Typography variant='h3'>
            <Typed
              strings={subtitles}
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
