const ROCK_PAPER_SCISSORS = ["Rock", "Paper", "Scissors"];


function getComputerChoice()
{
    return ROCK_PAPER_SCISSORS[Math.floor(Math.random() * 3)];
}

function getHumanChoice()
{
    while (true)
    {
        let playerChoice = prompt("Player Choice");
        let playerChoiceLowercase = playerChoice.toLocaleLowerCase();

        if (playerChoiceLowercase === "rock" ||
            playerChoiceLowercase === "paper" ||
            playerChoiceLowercase === "scissors")
            return playerChoice;
        else
            alert("Invalid input. Please try again");
    }
}


console.log(getHumanChoice());