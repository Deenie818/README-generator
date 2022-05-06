// Packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');


const generateMarkdown = require('./util/generateMarkdown');

// Array of questions for user input
const questions = [{
    type: 'input',
    message: 'What is the title of this project?',
    name: 'Title'
},
{
    type: 'input',
    message: 'Please provide a description of the project including the what, why, and how of the project.',
    name: 'Description'
},
{
    type: 'input',
    message: 'What is the installation process?',
    name: 'Installation'
},
{
    type: 'input',
    message: 'Please provide instructions on how to use the app.',
    name: 'Usage'
},
{
    type: 'list',
    message: 'Which license is being used?',
    choices: ['MIT', 'Mozilla Public License', 'Boost Software License 1.0', 'Apache_2.0'],
    name: 'License'
},
{
    type: 'input',
    message: 'What does the user need to know about how to contribute to this project?',
    name: 'Contribution'
},
{
    type: 'input',
    message: 'What command should be used to run tests?',
    name: 'Tests'
},
{
    type: 'input',
    message: 'Please enter your Github username',
    name: 'Github',
    default: 'Deenie818'
},
{
    type: 'input',
    message: 'Please enter your email address',
    name: 'Email'
},
{
    type: 'input',
    message: 'Please enter your contact information.',
    name: 'Additional'
},

]



// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)

        } else {
            console.log("Success!")
        }
    })

}

// function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (response) {
            writeToFile("README.md", generateMarkdown(response));
            console.log(response)
        })
}

// Function call to initialize app
init();

//exports



// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README