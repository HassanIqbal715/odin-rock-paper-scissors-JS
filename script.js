const optionRock = document.querySelector("#option-rock");
const optionPaper = document.querySelector("#option-paper");
const optionScissors = document.querySelector("#option-scissors");
const choiceBoxes = document.querySelectorAll(".choice-box");
const humanWinText = document.querySelector("#player-win-text");
const computerWinText = document.querySelector("#computer-win-text");
const humanChoiceBox = document.querySelector("#player-choice");
const computerChoiceBox = document.querySelector("#computer-choice");
const humanChoiceImg = document.querySelector("#player-choice-img");
const computerChoiceImg = document.querySelector("#computer-choice-img");
const humanScoreUI = document.querySelector("#player-score");
const computerScoreUI = document.querySelector("#computer-score"); 

// Returns a random value from 0 - 2 for the computer's choice
function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

// Takes user input from 0 - 2 and returns the value
function getHumanChoice() {
    return parseInt(prompt("Enter your choice from 0 to 2. (0 = rock) (1 = paper) (2 = scissors): "));
}

// Compares the inputs and returns the results: (0 = loss) (1 = win) (2 = draw)
function playRound() {
    if (humanChoice === 0) {
        humanChoiceBox.setAttribute("style", "background-color: #FF5D5D");
        humanChoiceImg.src = 'images/rock.webp';
    }
    else if (humanChoice === 1) {
        humanChoiceBox.setAttribute("style", "background-color: #64DDEF");
        humanChoiceImg.src = 'images/paper.webp';
    } 
    else {
        humanChoiceBox.setAttribute("style", "background-color: #FFE74E");
        humanChoiceImg.src = 'images/scissors.webp';
    }

    if (computerChoice === 0) {
        computerChoiceBox.setAttribute("style", "background-color: #FF5D5D");
        computerChoiceImg.src = 'images/rock.webp';
    }
    else if (computerChoice === 1) {
        computerChoiceBox.setAttribute("style", "background-color: #64DDEF");
        computerChoiceImg.src = 'images/paper.webp';
    }
    else {
        computerChoiceBox.setAttribute("style", "background-color: #FFE74E");
        computerChoiceImg.src = 'images/scissors.webp';
    }

    choiceBoxes.forEach((box)=> {
        box.style.display = 'block';
    });

    humanWinText.style.display = 'none';
    computerWinText.style.display = 'none';

    if (humanChoice === computerChoice) {
        return 2;
    }
    else if (humanChoice === 0 && computerChoice === 1) {
        computerWinText.style.display = 'flex';
        return 0;
    }
    else if (humanChoice === 0 && computerChoice === 2) {
        humanWinText.style.display = 'flex';
        return 1;
    }
    else if (humanChoice === 1 && computerChoice === 0) {
        humanWinText.style.display = 'flex';
        return 1;
    }
    else if (humanChoice === 1 && computerChoice === 2) {
        computerWinText.style.display = 'flex';
        return 0;
    }
    else if (humanChoice === 2 && computerChoice === 0) {
        computerWinText.style.display = 'flex';
        return 0;
    }
    else {
        humanWinText.style.display = 'flex';
        return 1;
    }
}

function updateScores() {
    if (result === 1) {
        humanScore++;
        humanScoreUI.textContent = humanScore;
    }
    else if (result === 0) {
        computerScore++;
        computerScoreUI.textContent = computerScore;
    }
}

function checkWin() {
    if (humanScore === 5) {
        return 1;
    }
    else if (computerScore === 5) {
        return 2;
    }
    return 0;
}

function reset() {
    humanScore = 0;
    computerScore = 0;

    humanScoreUI.textContent = 0;
    computerScoreUI.textContent = 0;
}

function mainGame() {
    if (stop) {
        return;
    }

    computerChoice = getComputerChoice();
    result = playRound();
    updateScores();
    win = checkWin();
    if (win == 1) {
        stop = true;
        alert("Player won!!");
    }
    else if (win == 2) {
        stop = true;
        alert("Computer won!!");
    }
}

// Variables
let humanScore = 0;
let computerScore = 0;

let humanChoice = 0;
let computerChoice = 0;

let result = 0;
let win = 0;
let stop = false;

optionRock.addEventListener("click", () => {
    if (stop) {
        stop = false;
        reset();
    }
    humanChoice = 0;
    mainGame();
});

optionPaper.addEventListener("click", () => {
    if (stop) {
        stop = false;
        reset();
    }
    humanChoice = 1;
    mainGame();
});

optionScissors.addEventListener("click", () => {
    if (stop) {
        stop = false;
        reset();
    }
    humanChoice = 2;
    mainGame();
});