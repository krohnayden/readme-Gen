// TODO: Include packages needed for this application
const inquirer = require('inquirer')
// TODO: Create an array of questions for user input
const questions = [
    inquirer
        .prompt([
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
            // {
            //     type: '',
            //     message: 'Table of Contents',
            //     name: 'tblCont',
            // },s
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
                    "Apache License 2.0",
                    "GNU General Public License v3.0",
                    "MIT License",
                    "BSD 2-Clause Simplified License",
                    "BSD 3-Clause New/Revised License",
                    "Boost Software License 1.0",
                    "Creative Commons Zero v1.0 Universal",
                    "Eclipse Public License 2.0",
                    "GNU Affero General Public License v3.0",
                    "GNU General Public License v2.0",
                    "GNU Lesser General Public License v2.1",
                    "Mozilla Public License 2.0",
                    "The Unilicense"
                ]
            },
            {
                type: 'input',
                message: 'Contributors',
                name: 'contributors'
            },
            {
                type: 'input',
                message: ''
            }
        ])
]

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {},

// TODO: Create a function to initialize app
// function init() {},

// Function call to initialize app
// init()
