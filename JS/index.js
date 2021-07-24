// Packages required
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")
// Array of questions for user input
const questions = [
      // GitHub Username
    {
        type: 'input',
        name: 'username',
        message: 'Enter your GitHub username:',
        // Validate that a username has been entered
        validate: function (input) {
            if (input.length < 1) {
                return console.log("You must submit a username.");
            }
            return true;
        }
    },
    // GitHub Repository name
    {
        type: 'input',
        name: 'repository',
        message: 'Enter your Github repository name:',
        // Validate a repo name has been entered
        validate: function (input) {
            if (input.length < 1) {
                return console.log("You must submit a repository name.");
            }
            return true;
        } 
    },

    //User contact information
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email:',
        // Validate an email has been entered
        validate: function (input) {
            if (input.length < 1) {
                return console.log("You must submit an email");
            }
            return true;
        } 
    },
    
    // Project Title
    {
        type: 'input',
        name: 'title',
        message: 'Enter your project title:',
        // Validate that a project title has been entered
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("You must submit a project title.");
            }
            return true;
        }
    },
    
    // Project Description
    {
        type: 'input',
        name: 'description',
        message: 'Enter Project Description:',
        // Validate atleast one word has been entered
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("You must submit a project description.");
            }
            return true;
        }
    },

    // Project Installation
    {
        type: 'input',
        name: 'installation',
        message: 'Explain installation process:',    
    },

    // Usage of project
    {
        type: 'input',
        name: 'usage',
        message: 'Explain project usage and instructions:',    
    },

    // Choose license
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license.',
        choices: ['apache-2.0', 'BSD 3-Clause "New" or "Revised"' ,'GNU General Public License v3.0', 'MIT'] 
    },

    // Contributors
    {
        type: 'input',
        name: 'contributors',
        message: 'List any contributors to your project.',
    },

    // Project tests
    {
        type: 'input',
        name: 'tests',
        message: 'Explain and provide tests for your project.',
    },

    // Contact Info
    {
        type: 'input',
        name: 'contact',
        message: 'Input any additional contact information',
    },
];

// Function to write README file
function writeReadMe(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log("Generating file...");
    });
}

//Function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(answers => {
        console.log(answers);
        writeReadMe("README.md", generateMarkdown(answers));
    });
}

init();