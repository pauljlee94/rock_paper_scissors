// /string/i becomes case-insensitive
function computerPlay () {
    let choices = ['rock','paper','scissors']
    return choices[Math.floor(Math.random() * 3)]
}

function playerPlay () {
    let input = prompt("Rock, paper, or scissors?")
    return input.toLowerCase()
}

function playRound(playerSelection, computerSelection) {
    let result
    if (playerSelection == "rock") {
        (computerSelection == "rock") ? result = "Tie" : 
        (computerSelection == "paper") ? result = "You lose" :
        result = "You win"
    }   else if (playerSelection == "paper") {
        (computerSelection == "rock") ? result = "You win" : 
        (computerSelection == "paper") ? result = "Tie" :
        result = "You lose"
    }   else if (playerSelection == "scissors") {
        (computerSelection == "rock") ? result = "You lose" : 
        (computerSelection == "paper") ? result = "Tie" :
        result = "You win"
    }   else {
        result = "Invalid entry"
        }
    return result
}

let playerSelection = playerPlay()
let computerSelection = computerPlay()
console.log(playRound(playerSelection, computerSelection));
console.log("Player:" + playerSelection)
console.log("Computer:" + computerSelection)
