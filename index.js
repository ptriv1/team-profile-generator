/*
Start application, get prompt to enter name, employee ID, email, office number
After entering manager details, menu to add engineer or intern or quit
If user selects engineer, sees prompt to enter name, ID, email, and GitHub username, and returned to menu
If user selects intern, sees prompt to enter name, ID, email, and schools, and returned to menu
When the option gets selected to finish building team, exits application and HTML generated
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
        const manager = new Manager(answers.managerName);
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

function addEngineer() {
    inquirer.prompt ([
        {
            type: "input",
            name: "engineerName",
            message: "What is the engineer's name?"
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter an engineer name.";
            }
        }
    ])
    .then(answers => {
        const engineer = new Engineer(answers.engineerName);
        team.push(engineer);
    });
}


init();