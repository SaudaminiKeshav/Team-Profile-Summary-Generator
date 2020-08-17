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

module.exports = {
    manager: managerQuestions
};