export default `
export default class {
  name = 'Hector';
  surname = 'Parra';
  
  location = 'Barcelona';
  
  technologies = {
    languages: ['Javascript', 'Ruby', 'Python', 'Java'],
    frontend: ['React', 'HTML', 'CSS'],
    backend: ['Rails', 'Flask', 'SQL'],
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