function generateMarkdown(data) {
  return `
# ${data.title}

${data.description}

## Table of Contents

* [Installation](#installation)

* [Usage](#Usage)

* [License](#license)

* [Contributing](#contrbuting)

* [Tests](#tests)

* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

${"```"}
${data.installation}
${"```"}

## Usage

as a ${data.role}
I can ${data.capability}
so that ${data.benefit}

## License

This project is licensed under the ${data.license} License

## Contributing

${data.contributing}

## Tests

To run tests, run the following command:

${data.tests}

## Questions

If you have any questions about the repo, open an issue or contact ${data.username} on ${data.email}

`;
}

module.exports = generateMarkdown;
