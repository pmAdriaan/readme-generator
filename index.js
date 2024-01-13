const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "Enter the title of your project:",
        default: "My Awesome Project",
    },
    {
        type: "input",
        name: "description",
        message: "Enter a description of your project:",
        default: "A short description of my awesome project.",
    },
    {
        type: "input",
        name: "installation",
        message: "Enter installation instructions:",
        default: "npm install",
    },
    {
        type: "input",
        name: "usage",
        message: "Enter usage information:",
        default: "node index.js",
    },
    {
        type: "input",
        name: "features",
        message: "List the features of your project (comma-separated):",
    },
    {
        type: "input",
        name: "dependencies",
        message: "List the dependencies of your project (comma-separated):",
    },
    {
        type: "input",
        name: "tests",
        message: "Enter test instructions:",
        default: "npm test",
    },
    {
        type: "input",
        name: "contributing",
        message: "Enter contribution guidelines:",
        default: "Feel free to contribute!",
    },
    {
        type: "input",
        name: "username",
        message: "Enter your GitHub username:",
        default: "your-username",
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email address:",
        default: "your.email@example.com",
    },
    {
        type: "list",
        name: "license",
        message: "Choose a license for your application:",
        choices: ["MIT", "Apache-2.0", "GPL-3.0", "BSD-3-Clause", "None"],
        default: "MIT",
    },
    {
        type: "input",
        name: "credits",
        message: "Give credit to anyone or anything that inspired your project:",
    },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error("Error writing to file:", err);
        } else {
            console.log("README.md successfully generated!");
        }
    });
}

// function to initialize program
function init() {
    let userFileName = process.argv[2];

    // Check if the provided filename has a .md extension
    if (userFileName && !userFileName.endsWith('.md')) {
        console.error("Invalid filename. Please provide a filename with a .md extension.");
        return;
    }

    inquirer
        .prompt(questions)
        .then((answers) => {
            const readmeContent = generateMarkdown(answers);
            writeToFile(userFileName ? userFileName : "NEW_README.md", readmeContent);
        })
        .catch((error) => {
            console.error("Error generating README:", error);
        });
}

// function call to initialize program
init();
