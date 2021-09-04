/*
Start application, get prompt to enter name, employee ID, email, office number
After entering manager details, menu to add engineer or intern or quit
If user selects engineer, sees prompt to enter name, ID, email, and GitHub username, and returned to menu
If user selects intern, sees prompt to enter name, ID, email, and schools, and returned to menu
When the option gets selected to finish building team, exits application and HTML generated
*/

const create = require('./src/page-template.js');
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const OUTPUT_DIR = path.resolve(__dirname, 'dist');
const outputPath = path.join(OUTPUT_DIR, 'index.html');

const team = [];

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
                return "Please enter a manager's name.";
            }
        },
        {
            type: "input",
            name: "managerId",
            message: "What is the manager's ID?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter a manager's ID.";
            },
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the manager's email?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter a manager's email.";
            }, 
        },
        {
            type: "input",
            name: "managerOffice",
            message: "What is the manager's office number?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter a manager's office number.";
            }
        }
    ])
    .then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOffice);
        team.push(manager);
        // writeFile(team);
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
        console.log(userChoice.memberChoice);
        switch (userChoice.memberChoice) {
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;
            default:
                buildTeam(team);
        }
    });
}

function addEngineer() {
    inquirer.prompt ([
        {
            type: "input",
            name: "engineerName",
            message: "What is the engineer's name?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter an engineer's name.";
            }
        },
        {
            type: "input",
            name: "engineerId",
            message: "What is the engineer's ID?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter an engineer's ID.";
            },
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is the engineer's email?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter an engineer's email address.";
            }
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "What is the engineer's GitHub username?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter an engineer's GitHub username.";
            }
        }
    ])
    .then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        team.push(engineer);
        createTeam();
    });
}

function addIntern() {
    inquirer.prompt ([
        {
            type: "input",
            name: "internName",
            message: "What is the intern's name?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter an intern's name.";
            }
        },
        {
            type: "input",
            name: "internId",
            message: "What is the intern's ID?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter an intern's ID.";
            }
        }, 
        {
            type: "input",
            name: "internEmail",
            message: "What is the intern's email?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter an intern's email.";
            }
        }, 
        {
            type: "input",
            name: "internSchool",
            message: "What is the intern's college?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter an intern's school.";
            }
        }
    ])
    .then(answers => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        team.push(intern);
        createTeam();
    })
}

function buildTeam(team) {
   fs.writeFileSync(outputPath, create(team), "utf-8");  
}


init();