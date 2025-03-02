function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function getHumanChoice() {
    return parseInt(prompt("Enter your choice from 0 to 2. (0 = rock) (1 = paper) (2 = scissors): "));
}

function playRound(humanChoice, computerChoice) {
    console.log("You picked: ");
    if (humanChoice === 0) {
        console.log("Rock!");
    }
    else if (humanChoice === 1) {
        console.log("Paper!");
    } 
    else {
        console.log("Scissors!");
    }

    console.log("Computer picked: ");
    if (computerChoice === 0) {
        console.log("Rock!");
    }
    else if (computerChoice === 1) {
        console.log("Paper!");
    }
    else {
        console.log("Scissors!");
    }
}

let humanScore = 0;
let computerScore = 0;

let humanChoice = 0;
let computerChoice = getComputerChoice();

while (true) {
    humanChoice = getHumanChoice();
    if (humanChoice >= 0 && humanChoice <= 2) {
        break;
    }
    else {
        console.log("invalid input. enter the value again.");
    }
}

playRound(humanChoice, computerChoice);