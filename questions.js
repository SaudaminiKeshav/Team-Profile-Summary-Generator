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

const engineerQuestions = [
    {
        type: 'input',
        message: "What is your software engineer's name?",
        name: 'engName',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid name is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is your engineer's employee ID?",
        name: 'engId',
        validate: function (answer) {
            if (answer <= 0) {
                return console.log("A valid employee ID is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is your engineer's email address?",
        name: 'engEmail',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid email address is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is your engineer's GitHub? (No @ needed)",
        name: 'engGithub',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid GitHub is required.");
            }
            return true;
        }
    }
];

module.exports = {
    manager: managerQuestions,
    create: confirmEmployee,
    employee: employeeType,
    engineer: engineerQuestions
};

