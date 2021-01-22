function generateMarkdown(data){
    return `# ${data.title} 

## License:
    
    ${data.license} 

## Table of Contents 

* [Description](#description)

* [Installation](#installation)

* [Usage](#usage)

* [Test](#test)

* [Contribution](#contribution)

* [Questions](#questions)
   
## GitHub Repository:

    https://github.com/${data.GitHub} 
    

## Description of the project:

    ${data.description} 


## Installation:

    ${data.installation} 


## Usage:
    
    ${data.usage} 


## Test: 
    
    ${data.test}


## Contribution: 
    
    ${data.contribution}


## Questions: 
    
    Feel free to reach out via email at ${data.email} with any questions!`

};
module.exports = generateMarkdown;