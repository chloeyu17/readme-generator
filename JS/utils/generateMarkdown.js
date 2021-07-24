// Function that returns a license badge based on which license is selected
function genBadge(license) {
  if (license === "apache-2.0") {
    return `[![apache-2.0](https://img.shields.io/badge/license-apache--2.0-green?style=plastic)]`
  }
  else if (license === 'BSD 3-Clause "New" or "Revised"'){
    return `[![BSD 3-Clause "New" or "Revised"](https://img.shields.io/badge/license-BSD%203--Clause%20%22New%22%20or%20%22Revised%22-green?style=plastic)]`
  }
  else if (license === 'GNU General Public License v3.0'){
    return `[![GNU General Public License v3.0](https://img.shields.io/badge/license-GNU%20General%20Public%20License%20v3.0-green?style=plastic)]`
  }
  else if (license === 'MIT'){
    return `[![MIT](https://img.shields.io/badge/license-MIT-green?style=plastic)]`
  }
  else {
    return ""
  }
};

// Function that returns the license link based on which license is selected
function genLink(license) {
  if (license === "apache-2.0") {
    return `(https://www.apache.org/licenses/LICENSE-2.0)`
  }
  else if (license === 'BSD 3-Clause "New" or "Revised"'){
    return `(https://choosealicense.com/licenses/bsd-3-clause/)`
  }
  else if (license === 'GNU General Public License v3.0'){
    return `(https://www.gnu.org/licenses/gpl-3.0.en.html)`
  }
  else if (license === 'MIT'){
    return `(https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt)`
  }
  else {
    return ""
  }
};

// Function that returns the license section of README
function genLicenseSection(license) {
  if (license) {
    return `## License`
  }
  else {
    return ""
  }
};

// Function to generate markdown for README
function genMarkdown(data) {
  return `
# ${data.title}
${genBadge(data.license)}${genLink(data.license)}
## Description
  ${data.description}
## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Links](#links)
  * [License](#license)
  * [Contributions](#contributions)
  * [Tests](#tests)
  * [Questions](#questions)
  
  
## Installation
  ${data.installation}

## Usage
  ${data.usage}

 ## Links
  * Application URL: (https://${data.username}.github.io/${data.repository}/)
  * Github Repository URL: (https://github.com/${data.username}/${data.repository})
${genLicenseSection(data.license)}
  ${genBadge(data.license)}${genLink(data.license)}

## Contributions
  ${data.contributors}

## Tests
  ${data.tests}

## Questions
  Please email me with any question regarding this project @ ${data.email} or ${data.contact} and connect with me on Github and LinkedIn. 
  [![GitHub](https://img.shields.io/badge/My%20GitHub-Click%20Me!-blueviolet?style=plastic&logo=GitHub)](https://github.com/${data.username}) 
  `;
}

module.exports = genMarkdown;