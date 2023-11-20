// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license) {
    return(license)
  }
  else {
    return(console.log("No License"));
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Questions](#questions)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage

  ${data.usage}
  
  ## License 

  ${data.license}
  
  ## How to Contribute
  
  ${data.contributions}

  ## Tests
  
  ${data.tests}

  ## Questions
  
  ${data.questions}

  ## GitHub Username

  ${data.github}
`;
}

module.exports = generateMarkdown;
