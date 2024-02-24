const inquirer = require("inquirer");
const fs = require("fs");

const questions = [     
            {
                type: 'input',
                name: 'title',
                message: 'What is the title of your project?',
            },
            {
                type: 'input',
                name: 'description',
                message: 'What is the description for your project?',
            },
            {
                type:'input',
                name: 'table',
                message: 'What is the table of contents for your project?',
            },
            {
                type: 'input',
                name: 'installation',
                message: 'What are the installation instructions for your project?',
            },
            {
                type: 'input',
                name: 'usage',
                message: 'How do you use your application?',
            },
            {
                type: 'input',
                name: 'credits',
                message: 'Who or what deserves credit for this project?',
            },
            {
                type: 'input',
                name: 'license',
                message: 'Add your lisence here.'
            },
            {
                type: 'input',
                name: 'features',
                message: 'What features does this project have?'
            },
            {
                type: 'input',
                name: 'contribute',
                message: 'How to contribute to this project?'
            },
            {
                type: 'input',
                name: 'tests',
                message: 'What tests were done on the project?',
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is your GitHub username?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your email?',
            },
            {
                type: 'input',
                name: 'contact',
                message: 'What is the best way to contact you?'
            }
        ];

       
function writeToFile(fileName, data) {
    const readmeInfo =`
# ${data.title}

## Description
${data.description}

## Table of Contents
${data.table}

## Installation
${data.installation}

## Usage
${data.usage}

## Credits
${data.credits}

## License
${data.license}

## Badges

## Features 
${data.features}

## How to Contribute
${data.contribute}

## Tests
${data.tests}

## Questions
${data.github}
${data.email}
${data.contact}
`;
fs.writeFile(fileName, readmeInfo, (err) =>{
    err ? console.log(err) : console.log("Success")});
}

function init() {
    inquirer
        .prompt(questions)
        .then((data) =>{
        writeToFile('README.md', data);
})}

init();