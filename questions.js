const managerQuestions = [
    {
        type: 'input',
        message: "This application will generate an HTML page for your software engineering team.Please enter you team details as prompted. \n what is your manager's name?",
        name: 'managerName',
        validate: function (answer) {
            if (answer.length === 0) {
                return console.log("Please enter a valid input");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is your manager's employee ID?",
        name: 'managerID',
        validate: function (answer) {
            if (answer.length === 0) {
                return console.log("Please enter a valid input");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is your manager's email address?",
        name: 'managerEmail',
        validate: function (answer) {
            if (answer.length === 0) {
                return console.log("Please enter a valid input");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is your manager's office number?",
        name: 'managerOfficeNumber',
        validate: function (answer) {
            if (answer.length === 0) {
                return console.log("Please enter a valid input");
            }
            return true;
        }
    },
];

const confirmEmployee = [
    {
        type: 'confirm',
        message: "Next, would you like to add another team member to the team?",
        name: 'confirmEmp'
    }
];

const employeeType = [
    {
        type: 'list',
        message: "Would you like to add an Engineer or Intern to the team?",
        choices: ['Engineer', 'Intern'],
        name: 'empRole'
    }
];


module.exports = {
    manager: managerQuestions,
    create: confirmEmployee,
    employee: employeeType,
};

