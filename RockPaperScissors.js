let score = 0;
let oppScore = 0;
let gameScore = 0;
let oppGameScore = 0;
let ties = 0;
let gameNum = 1;
let keepPlaying = true;
let askPlay = "yes";
function computerPlay() {
    var play = Math.floor(Math.random() * 3);
    if (play === 0){
        //return("Rock");
        return("Rock");
    }
    else if (play === 1) {
        //return("Paper");
        return("Paper");
    }
    else if (play === 2){
        //return("Scissors");
        return("Scissors");
    }
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        if (computerSelection === "Rock") {
            return("Rock ties with Rock! It's a draw.");
        }
        if (computerSelection === "Paper") {
            oppScore = oppScore + 1;
            return("Paper beats Rock. You lose!");
        }
        if (computerSelection === "Scissors") {
            score = score + 1;
            return("Rock beats Scissors. You win!");
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "Rock") {
            score = score + 1;
            return("Paper beats Rock. You win!");
        }
        if (computerSelection === "Paper") {
            return("Paper ties with Paper! It's a draw.");
        }
        if (computerSelection === "Scissors") {
            oppScore = oppScore + 1;
            return("Scissors beat Paper. You lose!");
        }
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "Rock") {
            oppScore = oppScore + 1;
            return("Rock beats Scissors. You lose!");
        }
        if (computerSelection === "Paper") {
            score = score + 1;
            return("Scissors beat Paper. You win!");
        }
        if (computerSelection === "Scissors") {
            return("Scissors tie with Scissors. It's a draw.");
        }
    }
}
function game(){
    for (var i = 1; i < 6; i++){
        let computerChoice = computerPlay();
        let playerChoice = prompt("Enter Rock, Paper, or Scissors");
        console.log("Game " + gameNum + " Round " + i + ": " + playRound(playerChoice.toLowerCase(), computerChoice));
        console.log("The score is " + score + "-" + oppScore);
    }
}
while (keepPlaying === true) {
    score = 0;
    oppScore = 0;
    console.log(game());
    if (score < oppScore){
        console.log("You lose!");
        oppGameScore = oppGameScore + 1;
    }
    else if (oppScore < score) {
        console.log("You win!");
        gameScore = gameScore + 1;
    }
    else {
        console.log("It's a draw.");
        ties = ties + 1;
    }
    console.log("Total Record: " + gameScore + "-" + oppGameScore + "-" + ties);
    askPlay = prompt("Continue playing? (Yes or No)");
    askPlay = askPlay.toLowerCase();
    if (askPlay === "yes") {
        keepPlaying = true;
        gameNum = gameNum + 1;
    }
    else {
        keepPlaying = false;
    }
    
}
