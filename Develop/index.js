
const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
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
        mesage: "What is your email address",
        name: "email"
    },
    {
        mesage: "Project Title",
        name: "title"
    },
    {
        mesage: "Project Description",
        name: "description"
    },
    {
        mesage: "As a... (who is the project for?)",
        name: "role"
    },
    {
        mesage: "I can... (what does the user want to achieve?)",
        name: "capability"
    },
    {
        mesage: "So that... (what is the user benefit?)",
        name: "benefit"
    },
    {
        mesage: "Contributing",
        name: "contributing"
    },
    {
        mesage: "Tests",
        name: "tests"
    }
];

function init() {
inquirer
  .prompt(questions)
  .then(function(data) {
      
      const queryUrl = `https://api.github.com/users/${username}`;
      
      axios
        .get(queryUrl)
        .then(function (response){

          const pictureURL = response.data.avatar_url
          
          console.log(pictureURL);
        })      
    })
    .then(function(queryURL){
        axios
        .get(queryUrl)
        .then(function (response){

          const pictureURL = response.data.avatar_url
          
          console.log(pictureURL);
        })   
    })
  
}


function writeToFile(markDown, data) {
}

// function init() {

// }

init();

//console.log(username);
