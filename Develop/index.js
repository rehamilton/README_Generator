
const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const util = require("util")
const markDown = require(`./utils/generateMarkdown`);

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
        message: "Project Description",
        name: "description"
    },
    {
        message: "Installation Requirements",
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
        message: "License",
        name: "license"
    },
    {
        message: "Contributing",
        name: "contributing"
    },
    {
        message: "Tests",
        name: "tests"
    }
];

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer
    .prompt(questions)
};


async function init() {

    try {
        const answers = await promptUser();

        const readMe = markDown(answers);

        await writeFileAsync("example.md", readMe);

        console.log("README successfully created");
    } catch (err) {
        console.log(err);
    }
}

    // .then(function(data) {

    //     const queryUrl = `https://api.github.com/users/${username}`;
        
    //     axios
    //         .get(queryUrl)
    //         .then(function (response){

    //         const pictureURL = response.data.avatar_url
            
    //         console.log(pictureURL);
    //         })      
    //     })
    //     .then(function(queryURL){
    //         axios
    //         .get(queryUrl)
    //         .then(function (response){

    //         const pictureURL = response.data.avatar_url
            
    //         console.log(pictureURL);
    //         })   
    //     })

// }

init();