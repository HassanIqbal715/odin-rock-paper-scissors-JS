// Returns a random value from 0 - 2 for the computer's choice
function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

// Takes user input from 0 - 2 and returns the value
function getHumanChoice() {
    return parseInt(prompt("Enter your choice from 0 to 2. (0 = rock) (1 = paper) (2 = scissors): "));
}

// Compares the inputs and returns the results: (0 = loss) (1 = win) (2 = draw)
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

// Variables
let humanScore = 0;
let computerScore = 0;

let humanChoice = 0;
let computerChoice = 0;

console.log("The game is a first to 5. Goodluck and beat that computer!");
let result = 0;

// Main game loop
while (humanScore < 5 && computerScore < 5) {   

    // Ensures valid user input
    while (true) {
        humanChoice = getHumanChoice();
        if (humanChoice >= 0 && humanChoice <= 2) {
            break;
        }
        else {
            console.log("invalid input. enter the value again.");
        }
    }

    // Assigns a random value to computerChoice
    computerChoice = getComputerChoice();

    // Assigns the game result to result
    result = playRound(humanChoice, computerChoice);

    // Increases scores based on the victor
    if (result === 1) {
        humanScore++;
    }
    else if (result === 0) {
        computerScore++;
    }

    console.log("Score: ");
    console.log("You: ", humanScore, " Computer: ", computerScore);
}

// Outputs a message based on the human and computer scores
if (humanScore === 5) {
    console.log("YOU WIN!!");
}
else {
    console.log("computer wins...");
}

console.log ("Final Score: ");
console.log ("You: ", humanScore);
console.log("Computer: ", computerScore);