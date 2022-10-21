# README Generator

<a href="#description">Description</a> •
<a href="#key-features">Key Features</a> •
<a href="#usage">Usage</a> •
<a href="#technologies-used">Technologies Used</a> •
<a href="#concepts-demonstrated">Concepts Demonstrated</a> •
<a href="#author">Author</a>

## Description

This program generates a README after the user answers a series of prompts through the command line using the inquirer package. The answers are then used to generate the README. The series of prompts are:

1. "Enter the title of the project:"
2. "Enter a description of the project:"
3. "Enter installation instructions for the project:"
4. "Enter usage information for the project:"
5. "Enter contribution guidelines for the project:"
6. "Enter tests for the project:"
7. "What license do you want?" Then, the user selects a license from a pre-defined list using inquirer.
8. "Enter your GitHub username: "
9. "Enter your e-mail address: "

The generated README has the title that the user entered in prompt 1 under the H1 heading at the top of the README. Then, a badge is generated for the license that the user selected in prompt 7 and placed under the title. If no license is selected in prompt 7, no badge is generated or added. Then, a table of contents is generated that links to the Description, Installation, Usage, Contributing, Tests, License, and Questions sections of the generated README. The description section comes below the table of contents, and is an h2 heading with the title of Description (## Description). Under the heading in the description section is the description of the application that the user entered in prompt 2. Under the description section is the installation section, which is an h2 header with the title of Installation (## Installation). In the installation section, under the header is the installation instructions that the user entered in prompt 3. Under the installation section is the usage section, which is an h2 with the title of Usage (## Usage). In the usage section under the usage header is the usage information that the user entered in prompt 4. Under the usage section is the contributing section, which is an h2 header with the title of Contributing (## Contributing). In the contributing section under the header is the contribution guidelines for the project that the user entered in prompt 5. Under the contributing section is the tests section, which is an h2 header with the title of Tests (## Tests). In the tests section under the header are the tests for the application that the user entered in prompt 6. Under the tests section is the license section, which is an h2 header with the title of License (## License). Under the header in the license section is a short note about what license this application is covered under and a link for more information about the license the user chose in prompt 7. If no license was chosen in prompt 7, nothing is shown under the header in the license section. Finally, under the license section is the questions section, which is an h2 header with the title of Questions (## Questions). In the questions section under the header is the note "If you have any questions you can reach me at: ", along with two items: a link to a github profile for the github username that the user entered in prompt 8, and a link to an email address the user provided in prompt 9.

## Key Features

- Generate a README with a license badge, table of contents, clearly defined sectional content, and a link the user's github repository and email address.

## Usage

- Download the contents of the repository on to your hard drive
- Make sure [node.js](https://nodejs.org/en/) and the npm package manager is installed.
- Navigate using a command line interface to the directory that this program is in.
- Install inquirer package version 8.0.0.
- Type "node index.js" in the command line.
- Answer the prompts.

## Technologies Used

- [Inquirer Package](https://www.npmjs.com/package/inquirer)
- [node.js](https://nodejs.org/en/)
- [JavaScript](https://www.javascript.com/)

## Concepts Demonstrated

- The use of node.js
- Installing and using node.js packages using npm.
- Writing to a file using JavaScript.
- General JavaScript and programming knowledge.

## Author

Adam Ferro
- [Github](https://github.com/GeminiAd)
- [Linked-In](https://www.linkedin.com/in/adam-ferro)