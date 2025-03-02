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
function startGame() {
    console.clear();
    console.log("The game is first to 5. Good luck and beat that computer!");

    let humanScore = 0;
    let computerScore = 0;

    while (humanScore < 5 && computerScore < 5) {   
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        let result = playRound(humanChoice, computerChoice);

        if (result === 1) {
            humanScore++;
        } else if (result === 0) {
            computerScore++;
        }

        console.log(`Score: You ${humanScore} - Computer ${computerScore}`);
    }

    if (humanScore === 5) {
        console.log("🎉 YOU WIN!! 🎉");
    } else {
        console.log("💀 Computer wins... Better luck next time!");
    }

    console.log(`Final Score: You ${humanScore} - Computer ${computerScore}`);
}
