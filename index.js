const inquirer = require('inquirer');
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown.js');

/* The list of licenses. */
const licenses = [
    "None", "Apache 2.0 License", "Boost Software License 1.0", "BSD 3-Clause License", "BSD 2-Clause License", "CC0", "Attribution 4.0 International",
    "Attribution-ShareAlike 4.0 International", "Attribution-NonCommercial 4.0 International", "Attribution-NoDerivates 4.0 International",
    "Attribution-NonCommmercial-ShareAlike 4.0 International", "Attribution-NonCommercial-NoDerivatives 4.0 International", "Eclipse Public License 1.0",
    "GNU GPL v3", "GNU GPL v2", "GNU AGPL v3", "GNU LGPL v3", "GNU FDL v1.3", "The Hippocratic License 2.1", "The Hippocratic License 3.0",
    "IBM Public License Version 1.0", "ISC License (ISC)", "The MIT License", "Mozilla Public License 2.0", "Attribution License (BY)",
    "Open Database License (ODbL)", "Public Domain Dedication and License (PDDL)", "The Perl License", "The Artistic License 2.0",
    "SIL Open Font License 1.1", "The Unlicense", "The Do What the %$#& You Want to Public License"
];

/* The list of questions that will be fed into the inquirer prompt. */
const questions = [
    {
        name: "title",
        message: "Enter the title of the project: "
    },
    /*    {
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
        }, */
    {
        type: "list",
        name: "license",
        message: "What license do you want?",
        choices: licenses,
        loop: false
    },
    /*    {
            name: "username",
            message: "Enter your GitHub username: "
        },
        {
            name: "email",
            message: "Enter your e-mail address: "
        } */
];

/*
 *  Writes the data given to a file called fileName.
 *  I could have had this function generate the markdown text and write it to a file. I feel like that's sloppy programming, though.
 *  Each function should do a set amount of work, and if this function is called writeToFile, it should ONLY write to a file. It may
 *  be confusing to anyone reading this code if write to file also generated the markdown text.
 */
function writeToFile(fileName, data) {
    fs.writeFile('test.md', data, (err) =>
        err ? console.error(err) : console.log('README SAVED!')
    );
}

/*
 *  Initializes the README Generator.
 *  
 *  When we initialize the app we must:
 *      1. Prompt the user with the questions to generate the README.
 *      2. Generate README markdown text.
 *      2. Write the text into a markdown file.
 *      3. Possibly do something if the prompt fails.
 */
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            let toWrite = generateMarkdown(answers);

            console.log(toWrite);

            writeToFile("test.md", toWrite);
        })
        .catch((error) => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else went wrong
            }
        });
}

// Function call to initialize app
init();
