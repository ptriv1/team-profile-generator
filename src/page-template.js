const generateTeam = team => {

const createManager = manager => {
    return `
        <div class="manager-section">
        <h2 class="card-title">${manager.getName()}</h2>
        <ul class="employee-list">
                <li class="list-item">ID: ${manager.getId()}</li>
                <li class="list-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-item">Office number: ${manager.getOfficeNumber()}</li>
        </ul>
        </div>
        `;
};

const createEngineer = engineer => {
    return `
        <div class="engineer-section">
        <h2 class="card-title">${engineer.getName()}</h2>
        <ul class="employee-list">
                <li class="list-item">ID: ${engineer.getId()}</li>
                <li class="list-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li class="list-item">GitHub: <a href="http://github.com/${engineer.getGithub()}">${engineer.getName()}</a></li>
        </ul>
        </div>
        `;
};

const createIntern = intern => {
    return `
        <div class="intern-section">
        <h2 class="card-title">${intern.getName()}</h2>
        <ul class="employee-list">
                <li class="list-item">ID: ${intern.getId()}</li>
                <li class="list-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li class="list-item">School: ${intern.getSchool()}</li>
        </ul>
        </div>
        `;
};

const htmlArray = [];
console.log(team);
htmlArray.push(
        team
        .filter((employee) => employee.getRole() === 'Manager')
        .map((manager) => createManager(manager))
        .join("")
    );
    

htmlArray.push(
        team
        .filter((employee) => employee.getRole() === 'Engineer')
        .map((engineer) => createEngineer(engineer))
        .join("")
    );
    

htmlArray.push(
        team
        .filter((employee) => employee.getRole() === 'Intern')
        .map((intern) => createIntern(intern))
        .join("")
    );
    return htmlArray.join("");
}

module.exports = team => {
    return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Team Profiles</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>

<body>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                ${generateTeam(team)}
            </div>
        </div>
    </div>
</body>
</html>
    `;
}