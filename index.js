/*
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
*/

const render = require('./src/page-template.js');
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const OUTPUT_DIR = path.resolve(__dirname, 'dist');
const outputPath = path.join(OUTPUT_DIR, 'index.html');

const team = [''];
const idArray = [];

function writeFile(team) {
    fs.writeFileSync(outputPath, render(team), 'utf-8'); 
}


function init() {
    // inquirer
    inquirer.prompt ([
        {
            type: "input",
            name: "managerName", 
            message: "What is the team manager's name?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter a manager name.";
            }
        }
    ])
    .then(answers => {
        const manager = new Manager(answers.managerName)
        team.push(manager);
        writeFile(team);
        createTeam();
    });
}

function createTeam() {
    inquirer.prompt([
        {
            type: "list", 
            name: "memberChoice",
            message: "Which type would you like to enter?",
            choices: [
                "Engineer", 
                "Intern", 
                "I'm done entering my team",
            ],
        },
    ])
    .then(userChoice => {
        switch (userChoice.memberChoice) {
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;
            default:
                buildTeam();
        }
    });
}


init();