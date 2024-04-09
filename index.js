#! /usr/bin/env node
import inquirer from "inquirer";
console.log("Welcome To Hibasheikh Currency Canverter");
//Define the list of currencies and their exchange rates
let exchange_rate = {
    "USD": 1,
    "EUR": 0.9,
    "JYP": 113,
    "CAD": 1.3,
    "AUD": 1.65,
    "PKR": 277.70
};
// print the user to select currencies to convert from and to
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "Select the currency to Convert from:",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "Select the currency to Convert into:",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount to convert:"
    }
]);
// Perfrm currency to conversion by using fromula
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;
//formula
let base_amount = amount / from_amount;
let converted_amount = amount * to_amount;
// Disply the converted amount
console.log(`Converted Amount = ${converted_amount.toFixed(2)}`);
