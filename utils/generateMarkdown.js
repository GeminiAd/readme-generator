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
    licenseImageLink: "https://licensebuttons.net/l/zero/1.0/80x15.png",
    licenseLink: "http://creativecommons.org/publicdomain/zero/1.0/"
  }
};

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log("RENDERING LICENSE BADGE: " + license);

  if (license === "None") {
    console.log("NO LICENSE. RETURNING EMPTY STRING");

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

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);

  let markdownString = `# ${data.title}\n\n`;
  let badgeString = renderLicenseBadge(data.license);

  markdownString = markdownString + badgeString;

  return markdownString;
}

module.exports = generateMarkdown;
