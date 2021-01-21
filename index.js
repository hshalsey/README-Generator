const inquirer = require('inquirer');
const fs = require('fs');
//const markdown = require 

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Provide the title of your project.',
    },
    {
        type: 'input',
        name:'description',
        message:'Provide the discription of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage information.',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Provide contribution information.',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Provide information on running tests.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Chose your license type.',
        choices: ['BSD', 'MIT', 'GPL', 'None'],
    },
    {
        type: 'input',
        name: 'GitHub',
        message: 'Provide your GitHub username.'
    },
    {
        tpye: 'input',
        name: 'email',
        message: 'Provide your email.'
    },

   
  ];
  
// Function to write README file using the user input
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
  }
  
  // Function to initialize app
  function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
      console.log('Generating README...');
      writeToFile('README.md', generateMarkdown({ ...inquirerResponses }));
    });
  }
  
  init();