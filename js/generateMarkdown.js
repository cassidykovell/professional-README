//function that returns a license badge based on which license is inputted and if there is no license it returns an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "Apache 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "GPL 3.0") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else {
    return "";
  }
}

//function that returns the license link and if there is no license, it returns an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "https://opensource.org/licenses/MIT";
  } else if (license === "Apache 2.0") {
    return "https://opensource.org/licenses/Apache-2.0";
  } else if (license === "GPL 3.0") {
    return "https://www.gnu.org/licenses/gpl-3.0";
  } else {
    return "";
  }
}

//function that returns the license section of README and if there is no license it return an empty string
function renderLicenseSection(license) {
  if (license === "MIT") {
    return `
## License

This project is licensed under the [MIT License](${renderLicenseLink(license)}).
`;
  } else if (license === "Apache 2.0") {
    return `
## License

This project is licensed under the [Apache License 2.0](${renderLicenseLink(
      license
    )}).
`;
  } else if (license === "GPL 3.0") {
    return `
## License

This project is licensed under the [GPL 3.0 License](${renderLicenseLink(
      license
    )}).
`;
  } else {
    return "";
  }
}

//function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  return `
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
}

//exports these functions so they can used in index.js
module.exports = generateMarkdown;
module.exports = renderLicenseBadge;
