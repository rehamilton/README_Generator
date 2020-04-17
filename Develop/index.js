
const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");

const questions = [
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
  .then(function(response) {
      username = response.username
      email = response.email
      title = response.title
      description = response.description
      role = response.role
      capability = response.capability
      benefit = response.beneift
      contributing = response.contributing
      tests = response.tests


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


// function writeToFile(fileName, data) {
// }

// function init() {

// }

init();

//console.log(username);
