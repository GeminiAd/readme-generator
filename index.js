const inquirer = require('inquirer');
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown.js');
const licenses = require('./utils/licenses.js');

/* The list of questions that will be fed into the inquirer prompt. */
const questions = [
    {
        name: "title",
        message: "Enter the title of the project: "
    },
    {
        name: "description",
        message: "Enter a description of the project: "
    },
    {
        name: "installation",
        message: "Enter installation instructions for the project: "
    },
    {
        name: "usage",
        message: "Enter usage information for the project: "
    },
    {
        name: "contributing",
        message: "Enter contribution guidelines for the project: "
    },
    {
        name: "tests",
        message: "Enter tests for the project: "
    },
    {
        type: "list",
        name: "license",
        message: "What license do you want?",
        choices: Object.keys(licenses),
        loop: false
    },
    {
        name: "github",
        message: "Enter your GitHub username: "
    },
    {
        name: "email",
        message: "Enter your e-mail address: "
    }
];

/*
 *  Writes the data given to a file called fileName.
 *  I could have had this function generate the markdown text and write it to a file. I feel like that's sloppy programming, though.
 *  Each function should do a set amount of work, and if this function is called writeToFile, it should ONLY write to a file. It may
 *  be confusing to anyone reading this code if write to file also generated the markdown text.
 */
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('README saved as generated-README.md!')
    );
}

/*
 *  Initializes the README Generator.
 *  
 *  When we initialize the app we must:
 *      1. Prompt the user with the questions to generate the README.
 *      2. Generate README markdown text with the answers.
 *      3. Write the text into a markdown file.
 *      4. Possibly do something if the prompt fails?
 */
function init() {

    inquirer
        /* 1. Prompt the user with the questions to generate the README. */
        .prompt(questions)
        .then((answers) => {
            /* 2. Generate README markdown text with the answers. */
            let toWrite = generateMarkdown(answers);

            /* 3. Write the text into a markdown file. */
            writeToFile("generated-README.md", toWrite);
        })
        .catch((error) => {
            /* 4. Possibly do something if the prompt fails? */
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else went wrong
            }
        });
}

// Function call to initialize app
init();