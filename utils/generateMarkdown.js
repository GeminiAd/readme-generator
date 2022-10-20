const licenses = {
  "Apache 2.0 License": {
    licenseImageLink: "https://img.shields.io/badge/License-Apache_2.0-blue.svg",
    licenseLink: "https://opensource.org/licenses/Apache-2.0"
  },
  "Boost Software License 1.0": {
    licenseImageLink: "https://img.shields.io/badge/License-Boost_1.0-lightblue.svg",
    licenseLink: "https://www.boost.org/LICENSE_1_0.txt"
  },
  "BSD 3-Clause License": {
    licenseImageLink: "https://img.shields.io/badge/License-BSD_3--Clause-blue.svg",
    licenseLink: "https://opensource.org/licenses/BSD-3-Clause"
  },
  "BSD 2-Clause License": {
    licenseImageLink: "https://img.shields.io/badge/License-BSD_2--Clause-orange.svg",
    licenseLink: "https://opensource.org/licenses/BSD-2-Clause"
  },
  "CC0": {
    licenseImageLink: "https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg",
    licenseLink: "http://creativecommons.org/publicdomain/zero/1.0/"
  },
  "Attribution 4.0 International": {
    licenseImageLink: "https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg",
    licenseLink: "https://creativecommons.org/licenses/by/4.0/"
  },
  "Attribution-ShareAlike 4.0 International": {
    licenseImageLink: "https://img.shields.io/badge/License-CC_BY--SA_4.0-lightgrey.svg",
    licenseLink: "https://creativecommons.org/licenses/by-sa/4.0/"
  },
  "Attribution-NonCommercial 4.0 International": {
    licenseImageLink: "https://img.shields.io/badge/License-CC_BY--NC_4.0-lightgrey.svg",
    licenseLink: "https://creativecommons.org/licenses/by-nc/4.0/"
  },
  "Attribution-NoDerivates 4.0 International": {
    licenseImageLink: "https://img.shields.io/badge/License-CC_BY--ND_4.0-lightgrey.svg",
    licenseLink: "https://creativecommons.org/licenses/by-nd/4.0/"
  },
  "Attribution-NonCommmercial-ShareAlike 4.0 International": {
    licenseImageLink: "https://img.shields.io/badge/License-CC_BY--NC--SA_4.0-lightgrey.svg",
    licenseLink: "https://creativecommons.org/licenses/by-nc-sa/4.0/"
  },
  "Attribution-NonCommercial-NoDerivatives 4.0 International": {
    licenseImageLink: "https://img.shields.io/badge/License-CC_BY--NC--ND_4.0-lightgrey.svg",
    licenseLink: "https://creativecommons.org/licenses/by-nc-nd/4.0/"
  },
  "Eclipse Public License 1.0": {
    licenseImageLink: "https://img.shields.io/badge/License-EPL_1.0-red.svg",
    licenseLink: "https://opensource.org/licenses/EPL-1.0"
  },
  "GNU GPL v3": {
    licenseImageLink: "https://img.shields.io/badge/License-GPLv3-blue.svg",
    licenseLink: "https://www.gnu.org/licenses/gpl-3.0"
  },
  "GNU GPL v2": {
    licenseImageLink: "https://img.shields.io/badge/License-GPL_v2-blue.svg",
    licenseLink: "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html"
  },
  "GNU AGPL v3": {
    licenseImageLink: "https://img.shields.io/badge/License-AGPL_v3-blue.svg",
    licenseLink: "https://www.gnu.org/licenses/agpl-3.0"
  },
  "GNU LGPL v3": {
    licenseImageLink: "https://img.shields.io/badge/License-LGPL_v3-blue.svg",
    licenseLink: "https://www.gnu.org/licenses/lgpl-3.0"
  },
  "GNU FDL v1.3": {
    licenseImageLink: "https://img.shields.io/badge/License-FDL_v1.3-blue.svg",
    licenseLink: "https://www.gnu.org/licenses/fdl-1.3"
  },
  "The Hippocratic License 2.1": {
    licenseImageLink: "https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg",
    licenseLink: "https://firstdonoharm.dev/version/2/1/license/"
  },
  "The Hippocratic License 3.0": {
    licenseImageLink: "https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg",
    licenseLink: "https://firstdonoharm.dev"
  },
  "IBM Public License Version 1.0": {
    licenseImageLink: "https://img.shields.io/badge/License-IPL_1.0-blue.svg",
    licenseLink: "https://opensource.org/licenses/IPL-1.0"
  },
  "ISC License (ISC)": {
    licenseImageLink: "https://img.shields.io/badge/License-ISC-blue.svg",
    licenseLink: "https://opensource.org/licenses/ISC"
  },
  "The MIT License": {
    licenseImageLink: "https://img.shields.io/badge/License-MIT-yellow.svg",
    licenseLink: "https://opensource.org/licenses/MIT"
  },
  "Mozilla Public License 2.0": {
    licenseImageLink: "https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg",
    licenseLink: "https://opensource.org/licenses/MPL-2.0"
  },
  "Attribution License (BY)": {
    licenseImageLink: "https://img.shields.io/badge/License-ODC_BY-brightgreen.svg",
    licenseLink: "https://opendatacommons.org/licenses/by/"
  },
  "Open Database License (ODbL)": {
    licenseImageLink: "https://img.shields.io/badge/License-ODbL-brightgreen.svg",
    licenseLink: "https://opendatacommons.org/licenses/odbl/"
  },
  "Public Domain Dedication and License (PDDL)": {
    licenseImageLink: "https://img.shields.io/badge/License-PDDL-brightgreen.svg",
    licenseLink: "https://opendatacommons.org/licenses/pddl/"
  },
  "The Perl License": {
    licenseImageLink: "https://img.shields.io/badge/License-Perl-0298c3.svg",
    licenseLink: "https://opensource.org/licenses/Artistic-2.0"
  },
  "The Artistic License 2.0": {
    licenseImageLink: "https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg",
    licenseLink: "https://opensource.org/licenses/Artistic-2.0"
  },
  "SIL Open Font License 1.1": {
    licenseImageLink: "https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg",
    licenseLink: "https://opensource.org/licenses/OFL-1.1"
  },
  "The Unlicense": {
    licenseImageLink: "https://img.shields.io/badge/license-Unlicense-blue.svg",
    licenseLink: "http://unlicense.org/"
  },
  "The Do What the Fuck You Want to Public License": {
    licenseImageLink: "https://img.shields.io/badge/License-WTFPL-brightgreen.svg",
    licenseLink: "http://www.wtfpl.net/about/"
  },
  "The zlib/libpng License": {
    licenseImageLink: "https://img.shields.io/badge/License-Zlib-lightgrey.svg",
    licenseLink: "https://opensource.org/licenses/Zlib"
  }
};

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if (license === "None") {
    console.log("NO LICENSE DETECTED");

    return "";
  } else {
    let licenseBadgeImageLink = renderLicenseImageLink(license);
    let licenseLink = renderLicenseLink(license);

    let markdownBadge = `[![License](${licenseBadgeImageLink})](${licenseLink})\n`;

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
  console.log("RENDERING THE LICENSE IMAGE LINK FOR " + license);
  let licenseImageLink = licenses[license].licenseImageLink

  return licenseImageLink;
}

/* 
 *  Returns the link to the license when given the license name.
 *  We already return an empty string in renderLicenseBadge(license) if the license is none, so we don't have to handle that case.
 * 
 *  INPUTS:
 *    license: A string representing any of the licenses EXCEPT None
 * 
 *  Returns:
 *    licenseLink: A string with a path to the image of the badge.
 */
function renderLicenseLink(license) {
  console.log("RENDERING THE LICENSE LINK FOR " + license);
  let licenseLink = licenses[license].licenseLink;

  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

/*
 *  Returns the string representing the table of contents 
 */
function renderTableOfContents(data) {
  tableOfContents = "           \n<a href=\"#description\">Description</a> •\n";
  tableOfContents += "<a href=\"#installation\">Installation</a> •\n";
  tableOfContents += "<a href=\"#usage\">Usage</a> •\n";
  tableOfContents += "<a href=\"#contributing\">Contributing</a> •\n";
  tableOfContents += "<a href=\"#tests\">Tests</a> •\n";
  tableOfContents += "<a href=\"#license\">License</a> •\n";
  tableOfContents += "<a href=\"#questions\">Questions</a>\n\n";

  return tableOfContents;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);

  let markdownString = `# ${data.title}\n\n`;
  let badgeString = renderLicenseBadge(data.license);

  markdownString = markdownString + badgeString + "\n";

  let tableOfContentsString = renderTableOfContents(data);
  markdownString += tableOfContentsString;

  markdownString += `## Description\n\n${data.description}\n\n`;

  markdownString += `## Installation\n\n${data.installation}\n\n`;

  return markdownString;
}

module.exports = generateMarkdown;
