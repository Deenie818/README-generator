// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // let badge = '';
  // if (license === 'MIT') {
  //   badge = 
  // } else if (license === 'Mozilla Public License') {
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `
# ${response.Title} 

[![License](https://img.shields.io/badge/License-${response.License}-blue.svg)](https://opensource.org/licenses/${response.License})
## Description 
${response.Description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
The following necessary dependancies must be installed to run the application
## Usage
In order to use this app, ${response.Usage}
## License
This project is licensed under the ${response.License} license.
## Contributing
Contributors: ${response.Contributing}
## Tests
To run tests, you need to run the following command: ${response.Tests}
## Questions
If you have any questions about the repo, please contact ${response.Github} via e-mail: ${response.Email}
`;
}

module.exports = generateMarkdown;
