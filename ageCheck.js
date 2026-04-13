// Mini Program: Age Checker with User Input

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function checkAge(age) {

    if (age <= 0 || isNaN(age)) {
        console.log("❌ Invalid age. Please enter a valid number.");
        return;
    }

    if (age < 13) {
        console.log("👶 You are a Child. Enjoy learning and playing!");
    }
    else if (age <= 19) {
        console.log("🧑‍🎓 You are a Teenager. Focus on studies and skills!");
    }
    else if (age <= 59) {
        console.log("🧑‍💼 You are an Adult. Balance work and health!");
    }
    else {
        console.log("👴 You are a Senior Citizen. Take care and stay healthy!");
    }
}

rl.question("Enter your age: ", function(input) {
    let userAge = Number(input);
    checkAge(userAge);
    rl.close();
});
