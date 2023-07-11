const choices = ["rock", "paper", "scissors"];

let gameStats = {wins: 0, losses: 0, ties: 0};

let player = {choice: null};


let pressRock = document.getElementById("Rock")
pressRock.addEventListener("click", function() {playRock()})

let pressPaper = document.getElementById("Paper")
pressPaper.addEventListener("click", function(){playPaper()})

let pressScissors = document.getElementById("Scissors")
pressScissors.addEventListener("click", function(){playScissors()})

function playRock() {
player.choice = "rock";
playGame()
}

function playPaper() {
player.choice = "paper";
playGame()
}

function playScissors() {
player.choice = "scissors";
playGame()
}

function playGame() {
    
let computerChoice = getComputerChoice();
document.getElementById("computer-choice").textContent = "Computer´s Choice: " + computerChoice;
document.getElementById("player-choice").textContent = "Your Choice: " + player.choice;
compareChoices(player.choice, computerChoice);
    
}

function getComputerChoice(){
return choices[Math.floor(Math.random() * choices.length)]
}

function compareChoices(palyerChoice, computerChoice){
if (palyerChoice === computerChoice)
    {gameStats.ties++
    displayMessage("It´s a tie!")
}
else if (
    (palyerChoice === "rock" && computerChoice === "scissors") ||
    (palyerChoice === "scissors" && computerChoice === "paper") ||
    (palyerChoice === "paper" && computerChoice === "rock")) {gameStats.wins++
    displayMessage("You win!" + palyerChoice + " beats " + computerChoice + ".")
}
else {
    gameStats.losses++
    displayMessage("You lose!" + computerChoice + " beats " + palyerChoice + ".")
}
updateGameStats()
}

function displayMessage(msg){
document.getElementById("message".textContent = "msg")
}

function updateGameStats(){
    document.getElementById("game-stats").textContent = "wins: " + gameStats.wins + " | Losses: " + gameStats.losses + " | Ties: " + gameStats.ties;
}
