const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

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
    ]).then(answers => {
        const manager = new Manager (answers.switch)
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
    ]).then(answers => {
        const manager = new Intern (answers.switch)
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
    ]).then(answers => {
        const manager = new Manager (answers.switch)
    })
}
mainMenu();
