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
  return `# ${response.Title} 
[![License](https://img.shields.io/badge/License-${response.License}-blue.svg)](https://opensource.org/licenses/${response.License})
## Description 
${response.Description}
## Table of Contents
- [Description](#description)
`;
}

module.exports = generateMarkdown;
