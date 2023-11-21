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
        message: 'What is the application title?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'What is application description?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'How does a user install this application?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Provide features and usage for your application?',
        name: 'usage'
    },
    {
        type: 'list',
        message: 'What is your license?',
        name: 'license',
        choices: [
            'Apache_2.0',
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
            'The Unlicense',
            'None of the above.'
        ]
    },
    {
        type: 'input',
        message: 'How can users contribute to this project?',
        name: 'contributions'
    },
    {
        type: 'input',
        message: 'How can users test the application?',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'How can users contact you with questions?',
        name: 'questions'
    },
    {
        type: 'input',
        message: 'Please enter your GitHub username.',
        name: 'github'
    }
]

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
