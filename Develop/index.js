//Step 1. Create questions that prompt user input for their README file
//Step 2. When I enter my project title it is displayed as the title of the README
//Step 3. When I enter the description, installation instructions, usage information, contribution guidelines, and test instructions
//        they are displayed in the given sections 
//Step 4. When I choose a license for my application, from the given list, then a badge for that license is added to the top of the  
//        README and in the sectioned called "License" it explains which license the application is covered under
//Step 5. When I enter my GitHub username & email it is displayed in the questions section with a link to my GitHub profile (username) 
//        with instructions in on how to reach me for additional questions
//Step 6. When I click on the links in the table of contents it takes me to the given sections of the README. 

import inquirer from "inquirer";
import fs from "fs";


// TODO: Create an array of questions for user input
//const questions = [];

// ****Wrote function instead of Array for the user input questions****

function promptUser() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectTitle',
            message: 'What is the name of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Tell us about your project.'
        },
        {
            type: 'input',
            name: 'installInstructions',
            message: 'What are the installation instructions?'
        },
        {
            type: 'input',
            name: 'usageInfo',
            message: 'What is this project used for?'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Who contributed on this project?'
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license are you using?',
            choices: [
                "ISC",
                "MIT",
                "GNU",
                "Apache",
                "BSD"
            ]
        },
        {
            type: 'input',
            name: 'test',
            message: 'Are there any tests required for this project?'
        },
        {
            type: 'input',
            name: 'userName',
            message: 'What is your GitHub username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        }
    ]);
}

promptUser();

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();
