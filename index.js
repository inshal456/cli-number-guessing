#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10);
const answer = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "please guess a number between 1-10 =",
    }
]);
console.log(randomNumber);
console.log(answer);
if (answer.userGuessNumber === randomNumber) {
    console.log("congratulations you guess right number");
}
else {
    console.log(" you guess wrong number ");
}
