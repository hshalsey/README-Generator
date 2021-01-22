const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require ('./utils/generateMarkdown');
const path = require('path');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Provide the title of your project.',
    },
    {
        type: 'input',
        name:'description',
        message:'Provide a description of your project.',
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
        message: 'Provide your GitHub username.',
    },
    {
        tpye: 'input',
        name: 'email',
        message: 'Provide your email.'
    },

   
  ];
  function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
  };

  function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
      writeToFile('READMEexample.md', generateMarkdown({ ...inquirerResponses }));
    });
  }
  
  init();