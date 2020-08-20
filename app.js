const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
var team = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

async function addMember(){
    try {
        const answers = await inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is the name of the Employee?"
            },
            {
                type: "input",
                name: "role",
                message: "What is your employee's role?"
            },
            {
                type: "input",
                name: "id",
                message: "What is the employee's ID?"
            },
            {
                type: "input",
                name: "email",
                message: "What is the employee's email?"
            },
            {
                type: "input",
                name: "github",
                message: "What is the employee's github link?",
                when: (answers) => answers.role.toLowerCase() === "engineer"
            },
            {
                type: "input",
                name: "school",
                message: "What is the employee's school?",
                when: (answers) => answers.role.toLowerCase() === "intern"
            },
            {
                type: "input",
                name: "officeNumber",
                message: "What is the manager's office number?",
                when: (answers) => answers.role.toLowerCase() === "manager"
            },
            {
                type: "confirm",
                name: "another",
                message: "Do you want to hire another employee?",
                default: false
            }
        ]).then((answers)=> {
            switch(answers.role.toLowerCase()){
                case "manager":
                    var employee = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
                case "intern":
                    var employee = new Intern(answers.name, answers.id, answers.email, answers.school);
                case "engineer":
                    var employee = new Engineer(answers.name, answers.id, answers.email, answers.github);
            }
            team.push(employee);
            if(answers.another){
                addMember();
            } else {
                const createdHtml = render(team);
                fs.writeFile(outputPath, createdHtml);
            }
        })
        
    } catch(err) {
        console.log(err);
    }
}

addMember();


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
