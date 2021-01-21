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

   
  ];
  
