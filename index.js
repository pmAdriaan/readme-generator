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
    },
    {
        type: "input",
        name: "description",
        message: "Enter a description of your project:",
    },
    {
        type: "input",
        name: "installation",
        message: "Enter installation instructions:",
    },
    {
        type: "input",
        name: "usage",
        message: "Enter usage information:",
    },
    {
        type: "list",
        name: "license",
        message: "Choose a license for your application:",
        choices: ["MIT", "Apache-2.0", "GPL-3.0", "BSD-3-Clause", "None"],
    },
    {
        type: "input",
        name: "contributing",
        message: "Enter contribution guidelines:",
    },
    {
        type: "input",
        name: "tests",
        message: "Enter test instructions:",
    },
    {
        type: "input",
        name: "username",
        message: "Enter your GitHub username:",
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email address:",
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
    inquirer
        .prompt(questions)
        .then((answers) => {
            const readmeContent = generateMarkdown(answers);
            writeToFile("README.md", readmeContent);
        })
        .catch((error) => {
            console.error("Error generating README:", error);
        });
}

// function call to initialize program
init();
