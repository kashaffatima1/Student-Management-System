import inquirer from "inquirer";
const randomNumber = Math.floor(10000 + Math.random() * 50000);
let mybalance = 0;
let answers = await inquirer.prompt([
    {
        name: "students",
        type: "input",
        message: "Enter Student Name:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a non empty value.";
        },
    },
    {
        name: "courses",
        type: "list",
        message: "Select the course to enroll",
        choices: ["Javascript", "PHP", "Typescript", "Python", "HTML"],
    },
]);
const tutionfee = {
    "Javascript": 2000,
    "PHP": 3000,
    "Typescript": 2500,
    "Python": 3000,
    "HTML": 2500,
};
console.log(`\nTution Fees: ${tutionfee[answers.courses]}/-\n`);
console.log(`Balance: ${mybalance}\n`);
let paymenttype = await inquirer.prompt([
    {
        name: "payment",
        type: "list",
        message: "Select payment method",
        choices: ["Easypaisa", "Jazzcash", "Bank transfer"],
    },
    {
        name: "amount",
        type: "input",
        message: "Transfer Money:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a non-empty value";
        },
    },
]);
console.log(`\nYou select payment method:${paymenttype.payment}`);
const tutionfees = tutionfee[answers.courses];
const paymentamount = parseFloat(paymenttype.amount);
if (tutionfees === paymentamount) {
    console.log(`Congratulations! You have successfully enrolled in ${answers.courses}\n`);
    let answer = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: "What would you like to do next?",
            choices: ["View status", "Exit"],
        }
    ]);
    if (answer.select === "View status") {
        console.log("\n***** Status*****\n");
        console.log(`Student Name: ${answers.students}`);
        console.log(`Student ID: ${randomNumber}`);
        console.log(`Programming Language course: ${answers.courses}`);
        console.log(`Tution Fees Paid: ${paymentamount}`);
        console.log(`Balance: ${mybalance += paymentamount}`);
    }
    else {
        console.log("\nExiting to student mangement system\n");
    }
}
else {
    console.log("Invalid amount due to course\n");
}
;
