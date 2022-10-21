const licenses = require("./licenses.js");

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if (license === "None") {
    return "";
  } else {
    let licenseBadgeImageLink = renderLicenseImageLink(license);
    let licenseLink = renderLicenseLink(license);

    let markdownBadge = `[![License](${licenseBadgeImageLink})](${licenseLink})`;

    return markdownBadge;
  }
}

/* 
 *  Returns the link to the image that the license badge displays when given the license name.
 *  We already return an empty string in renderLicenseBadge(license) if the license is none, so we don't have to handle that case.
 * 
 *  INPUTS:
 *    license: A string representing any of the licenses EXCEPT None
 * 
 *  Returns:
 *    licenseImageLink: A string with a path to the image of the badge.
 */
function renderLicenseImageLink(license) {
  let licenseImageLink = licenses[license].licenseImageLink

  return licenseImageLink;
}

/* 
 *  Returns the link to the license when given the license name.
 * 
 *  INPUTS:
 *    license: A string representing any of the licenses.
 * 
 *  Returns:
 *    licenseLink: A string with a path to the description of the license, or an empty string if there is no license.
 */
function renderLicenseLink(license) {
  let licenseLink = licenses[license].licenseLink;

  if (license === "None") {
    licenseLink = "";
  } else {
    licenseLink = licenses[license].licenseLink;
  }

  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection;

  if (license === "None") {
    licenseSection = "";
  } else {
    let licenseLink = renderLicenseLink(license);

    licenseSection = `This application is covered under the license:         
[${license}](${licenseLink})`
  }

  return licenseSection;
}

/*
 *  Returns the string representing the table of contents 
 */
function renderTableOfContents(data) {
  return `<a href="#description">Description</a> •
<a href="#installation">Installation</a> •
<a href="#usage">Usage</a> •
<a href="#contributing">Contributing</a> •
<a href="#tests">Tests</a> •
<a href="#license">License</a> •
<a href="#questions">Questions</a>`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  let badgeString = renderLicenseBadge(data.license);
  let tableOfContentsString = renderTableOfContents(data);
  let licenseSectionString = renderLicenseSection(data.license);

  let markdownString = `# ${data.title}
  
${badgeString}
  
${tableOfContentsString}

## Description
  
${data.description}
  
## Installation
  
${data.installation}
 
## Usage
  
${data.usage}
 
## Contributing

${data.contributing}

## Tests

${data.tests}
  
## License
  
${licenseSectionString}

## Questions

If you have any questions you can reach me at:        
- [Github](https://github.com/${data.github})
- [E-Mail](mailto:${data.email})
`;

  return markdownString;
}

module.exports = generateMarkdown;
