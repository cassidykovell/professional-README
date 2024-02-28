//
const inquirer = require("inquirer");
const fs = require("fs");
const renderLicenseBadge = require('./generateMarkdown.js');
const renderLicenseSection = require('./generateMarkdown.js')

//questions that the user will be asked to generate the README
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "What is the description for your project?",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the installation instructions for your project?",
  },
  {
    type: "input",
    name: "usage",
    message: "How do you use your application?",
  },
  {
    type: "input",
    name: "credits",
    message: "Who or what deserves credit for this project?",
  },
  {
    type: "input",
    name: "license",
    message: "Add your lisence here.",
  },
  {
    type: "input",
    name: "features",
    message: "What features does this project have?",
  },
  {
    type: "input",
    name: "contribute",
    message: "How to contribute to this project?",
  },
  {
    type: "input",
    name: "tests",
    message: "What tests are available for this project? How do you run them?",
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?",
  },
  {
    type: "input",
    name: "contact",
    message: "What is the best way to contact you?",
  },
];

//creates the README with the data the user inputted 
function writeToFile(fileName, data) {
    const licenseBadge = renderLicenseBadge(data.license);
    const readmeInfo = `
# ${data.title}

${licenseBadge}
    
## Description
${data.description}
    
 ## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Credits
${data.credits}

## License
${renderLicenseSection(data.license)}

## Badges

## Features 
${data.features}

## Contributing
${data.contribute}

## Tests
${data.tests}

## Questions
GitHub Username: ${data.github}
Github Profile link: https://github.com/${data.github}
Email: ${data.email}
The best way to contact me: ${data.contact}
`;
  fs.writeFile(fileName, readmeInfo, (err) => {
    err ? console.log(err) : console.log("Success");
  });
}

//function for prompting the questions, getting the data, and writing the README
function init() {
  inquirer.prompt(questions).then((data) => {
    writeToFile("README.md", data);
  });
}

init();
