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

    if (humanChoice === computerChoice) {
        console.log("It's a Draw! Nobody gets the points...");
        return 2;
    }
    else if (humanChoice === 0 && computerChoice === 1) {
        console.log("Computer Wins! +1 for Computer...");
        return 0;
    }
    else if (humanChoice === 0 && computerChoice === 2) {
        console.log("You Win! +1 for You!");
        return 1;
    }
    else if (humanChoice === 1 && computerChoice === 0) {
        console.log("You Win! +1 for You!");
        return 1;
    }
    else if (humanChoice === 1 && computerChoice === 2) {
        console.log("Computer Wins! +1 for Computer...");
        return 0;
    }
    else if (humanChoice === 2 && computerChoice === 0) {
        console.log("Computer Wins! +1 for Computer...");
        return 0;
    }
    else {
        console.log("You Win! +1 for You!");
        return 1;
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

let result = playRound(humanChoice, computerChoice);