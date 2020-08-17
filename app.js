const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const questions = require('./questions');

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// Array to contain all employee objects to render HTML
const employees = [];

// Function to create a manager object
async function createManager() {
    await inquirer.prompt(questions.manager)
        .then((answers) => {
            console.log(answers);

            // Create new object from class and add to employee array
            let newManager = new Manager
                (answers.managerName,
                    answers.managerID,
                    answers.managerEmail,
                    answers.managerOfficeNumber);

            employees.push(newManager);

            console.log("Manager information added to the team: ", newManager);
        })
        .catch(function (err) {
            console.log(err);
        });
};


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

async function init() {
    await createManager();
    let renderedHTML = render(employees);
    fs.writeFileSync(outputPath, renderedHTML);
}

init()
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

