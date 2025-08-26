const ROCK_PAPER_SCISSORS = ["Rock", "Paper", "Scissors"];


function getComputerChoice()
{
    return ROCK_PAPER_SCISSORS[Math.floor(Math.random() * 3)];
}


console.log(getComputerChoice());