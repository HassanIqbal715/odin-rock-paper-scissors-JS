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
let computerChoice = 0;

console.log("The game is a first to 5. Goodluck and beat that computer!");
let result = 0;

while (humanScore < 5 && computerScore < 5) {    
    while (true) {
        humanChoice = getHumanChoice();
        if (humanChoice >= 0 && humanChoice <= 2) {
            break;
        }
        else {
            console.log("invalid input. enter the value again.");
        }
    }
    computerChoice = getComputerChoice();
    result = playRound(humanChoice, computerChoice);

    if (result === 1) {
        humanScore++;
    }
    else if (result === 0) {
        computerScore++;
    }

    console.log("Score: ");
    console.log("You: ", humanScore, " Computer: ", computerScore);
}

if (humanScore === 5) {
    console.log("YOU WIN!!");
}
else {
    console.log("computer wins...");
}

console.log ("Final Score: ");
console.log ("You: ", humanScore);
console.log("Computer: ", computerScore);