// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

![License](https://img.shields.io/badge/License-${encodeURIComponent(data.license)}-blue.svg)

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Dependencies](#dependencies)
- [Tests](#tests)
- [Contributing](#contributing)
- [Questions](#questions)
- [License](#license)
- [Credits](#credits)

## Installation
\`\`\`
${data.installation}
\`\`\`

## Usage
\`\`\`
${data.usage}
\`\`\`

## Features
${formatList(data.features) ? formatList(data.features) : "No specific features at the moment."}

## Dependencies
${formatList(data.dependencies) ? formatList(data.dependencies) : "No specific dependencies at the moment."}

## Tests
\`\`\`
${data.tests}
\`\`\`

## Contributing
${data.contributing}

## Questions
If you have any questions, feel free to reach out to me via [GitHub](https://github.com/${data.username}) or email me at ${data.email}.

## License
This application is covered under the ${data.license} license. ![License](https://img.shields.io/badge/License-${encodeURIComponent(data.license)}-blue.svg)

## Credits
${data.credits ? data.credits : "No specific credits at the moment."}
`;
}

function formatList(list) {
  return list ? list.split(',').map(item => `- ${item.trim()}`).join('\n') : '';
}

module.exports = generateMarkdown;
