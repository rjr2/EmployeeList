const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const writeFileAsync = util.promisify(fs.writeFile);

const mainMenu = () => {
    inquirer.prompt([{
        type: 'list',
        message: 'Would you like to add an Employee?',
        name: "switch",
        choices: [
            "Manager",
            "Intern",
            "Engineer",
            "Exit"
        ]
    }]).then(answer => {
        console.log(answer)
        if(answer.switch === "Manager"){
            //call ask manager function
            askManager()
        }
        else if(answer.switch === "Intern"){
            //call ask intern function
            askIntern()
        }
        else if(answer.switch === "Engineer"){
            //same thing
            askEngineer()
        }
        else{
            //build file function
            writeFileAsync('index.html', renderHTML())
        }
    })
};

const askManager = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter Manager Name:"
        },
        {
            type: "input",
            name: "id",
            message: "Enter Managers ID:"
        },
        {
            type: "input",
            name: "email",
            message: "Enter Managers Email:"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Enter Manager Office Number"
        }
    ]).then((answers) => {
        mainMenu()
        createManager(answers)
    })
}

const askIntern = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter Intern Name:"
        },
        {
            type: "input",
            name: "id",
            message: "Enter Intern ID:"
        },
        {
            type: "input",
            name: "email",
            message: "Enter Intern Email:"
        },
        {
            type: "input",
            name: "school",
            message: "Enter Interns School:"
        }
    ]).then((answers) => {
        mainMenu()
        createIntern(answers)
    })
};

const askEngineer = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter Engineer Name:"
        },
        {
            type: "input",
            name: "id",
            message: "Enter Engineer ID:"
        },
        {
            type: "input",
            name: "email",
            message: "Enter Engineer Email:"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Enter Engineers Github:"
        }
    ]).then.then((answers) => {
        mainMenu()
        createEngineer(answers)
    })
};

const createManager = (answers) => {
    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
    managerCard = `
    <div class="card col text-center"> 
      <div class="card-header">
        <h2 class="card-title">${manager.getRole()}</h5>
        <h3 class="card-subtitle mb-2">${manager.name}</h6>
        <div style="width: 100%;">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${manager.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
        <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
      </ul>
    </div>
      </div>
    </div>
        ` + managerCard;
};

const createIntern = (answers) => {
    const intern = new Intern (answers.name, answers.id, answers.email, answers.school)
    internCard = `
    <div class="card col text-center"> 
      <div class="card-header">
        <h2 class="card-title">${intern.getRole()}</h5>
        <h3 class="card-subtitle mb-2">${intern.name}</h6>
        <div style="width: 100%;">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${intern.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
        <li class="list-group-item">Office Number: ${intern.school}</li>
      </ul>
    </div>
      </div>
    </div>
        ` + internCard;
}

const createEngineer = (answers) => {
    const engineer = new Engineer (answers.name, answers.id, answers.email, answers.github)
    managerCard = `
    <div class="card col text-center"> 
      <div class="card-header">
        <h2 class="card-title">${engineer.getRole()}</h5>
        <h3 class="card-subtitle mb-2">${engineer.name}</h6>
        <div style="width: 100%;">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${engineer.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
        <li class="list-group-item">Office Number: ${engineer.github}</li>
      </ul>
    </div>
      </div>
    </div>
        ` + engineerCard;
}

mainMenu();
