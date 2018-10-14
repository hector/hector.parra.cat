import React from 'react';
import Typography from '@material-ui/core/Typography';

import './IndexPage.scss';
import CodeWindow from '../../components/CodeWindow/CodeWindow';

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

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="IndexPage">
        <Typography variant='h1' className="IndexPage__Name">Hector Parra</Typography>
        <Typography variant='h3' className="IndexPage__Subtitle">I'm a freelance programmer</Typography>
        <div className="IndexPage__Code">
          <Typography variant='h6'>Check my source code</Typography>
          <CodeWindow title='HectorParra.js' className="IndexPage__Code__Window">{code}</CodeWindow>
        </div>
      </div>
    );
  }

}
