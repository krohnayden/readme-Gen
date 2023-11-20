// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
console.log("Professional ReadME Generator!");
console.log("Enter your project details below to generate your complete ReadME ")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Title',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Description',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Installation',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Usage',
        name: 'usage'
    },
    {
        type: 'list',
        message: 'License',
        name: 'license',
        choices: [
            'Apache License 2.0',
            'GNU General Public License v3.0',
            'MIT License',
            'BSD 2-Clause Simplified License',
            'BSD 3-Clause New/Revised License',
            'Boost Software License 1.0',
            'Creative Commons Zero v1.0 Universal',
            'Eclipse Public License 2.0',
            'GNU Affero General Public License v3.0',
            'GNU General Public License v2.0',
            'GNU Lesser General Public License v2.1',
            'Mozilla Public License 2.0',
            'The Unlicense'
        ]
    },
    {
        type: 'input',
        message: 'How to Contribute',
        name: 'contributions'
    },
    {
        type: 'input',
        message: 'Tests',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'Questions?',
        name: 'questions'
    },
    {
        type: 'input',
        message: 'Please enter your GitHub username.',
        name: 'github'
    }
]
// Description, Table of Contents, Installation, Usage, 
// License, Contributing, Tests, Questions, and GitHub Username
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('View your ReadME!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((userInput) => {
        console.log(userInput)
        writeToFile('README.md', generateMarkdown(userInput))
    })

}

// // Function call to initialize app
init()
