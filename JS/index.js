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
                return console.log("You must submit a project title");
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
                return console.log("Description for your project is required!");
            }
            return true;
        }
    },
    // Project Installation
    {
        type: 'input',
        name: 'installation',
        message: 'Explain installation process (if necessary).',
        
    },
    // Usage of project
    {
        type: 'input',
        name: 'usage',
        message: 'Explain project instructions and examples (if necessary).',
        
    },
    // Choose license
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a license.',
        choices: ['apache-2.0', 'BSD 3-Clause "New" or "Revised"' ,'GNU General Public License v3.0', 'MIT']
        
    },
    // Contributors
    {
        type: 'input',
        name: 'contributing',
        message: 'List any contributors to your project (if necessary).',

    },
    // Project tests
    {
        type: 'input',
        name: 'tests',
        message: 'Explain and provide tests for your project (if necessary).',

    },
];



// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log("Generating file.");
        
    });
}

// function to initialize app
function init() {inquirer
    .prompt(questions)
    .then(answers => {
        console.log(answers);
        writeToFile("README.md", generateMarkdown(answers));
    });}

// Function to initialize app
init();