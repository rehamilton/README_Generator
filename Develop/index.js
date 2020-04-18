
const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const util = require("util")
const markDown = require(`./utils/generateMarkdown`);

//set questions for user
const questions = [
    {
        message: "What is the Repo Name?",
        name: "reponame"
    },
    {
        message: "Enter your GitHub username",
        name: "username"
    },
    {
        message: "What is your email address",
        name: "email"
    },
    {
        message: "Project Title",
        name: "title"
    },
    {
        message: "Provide a detialed description of the project",
        name: "description"
    },
    {
        message: "What needs to be installed to run the application?",
        name: "installation"
    },
    {
        message: "As a... (who is the project for?)",
        name: "role"
    },
    {
        message: "I can... (what does the user want to achieve?)",
        name: "capability"
    },
    {
        message: "So that... (what is the user benefit?)",
        name: "benefit"
    },
    {
        message: "What license are you using?",
        name: "license"
    },
    {
        message: "What are the rules for contributing",
        name: "contributing"
    },
    {
        message: "What is the test line command?",
        name: "tests"
    }
];

const writeFileAsync = util.promisify(fs.writeFile);


//prompt user using questions set
function promptUser() {
    return inquirer
    .prompt(questions)
    
};

// main function that goes through questions and urls to send info to markdown file
async function init() {

    try {
        // name answers
        const answers = await promptUser();

        //get the URL which is required for the user avatar
        const queryURL = `https://api.github.com/users/${answers.username}`;
        const queryResponse = await axios.get(queryURL)
        //name the avatar URL
        const avatarURL = queryResponse.data.avatar_url

        //take both the questions and the avatar and place in an object for use in the markdown
        const markdownData = {
            avatar: avatarURL,
            answers
        }

        //console.log(markdownData);

        //set file data
        const readMe = markDown(markdownData);

        //write to file
        await writeFileAsync("README.md", readMe);

        //notify user of success
        console.log("README successfully created");
    } catch (err) {
        //notify user of error
        console.log(err);
    }
};

init();