const ROCK_PAPER_SCISSORS = ["rock", "paper", "scissors"];

let humanScore;
let computerScore;


function getComputerChoice()
{
    return ROCK_PAPER_SCISSORS[Math.floor(Math.random() * 3)];
}


function getHumanChoice()
{
    let playerChoice;
    
    while (true)
    {
        playerChoice = prompt("Your choice:").toLowerCase();

        if (playerChoice === "rock" ||
            playerChoice === "paper" ||
            playerChoice === "scissors")
            return playerChoice;
        else
            alert("Invalid input. Please try again");
    }
}


function playRound(humanChoice, computerChoice)
{
    let winState;

    if (humanChoice === computerChoice)
        winState = 0;
    else if (humanChoice === "rock")
    {
        if (computerChoice === "scissors")
            winState = 1;
        else
            winState = -1;
    }
    else if (humanChoice === "paper")
    {
        if (computerChoice === "rock")
            winState = 1;
        else
            winState = -1;
    }
    else if (humanChoice === "scissors")
    {
        if (computerChoice === "paper")
            winState = 1;
        else
            winState = -1;
    }

    let resultMessage;

    if (winState == 0)
        resultMessage = "It's a draw!";
    else if (winState == 1)
    {
        resultMessage = `You won! ` +
                        `${humanChoice[0].toUpperCase() + humanChoice.slice(1)} ` +
                        `beats ${computerChoice}`;
        humanScore++;
    }
    else if (winState == -1)
    {
        resultMessage = `You lost! ` +
                        `${computerChoice[0].toUpperCase() + computerChoice.slice(1)} ` +
                        `beats ${humanChoice}`;
        computerScore++;
    }

    alert(resultMessage);
}


function playGame()
{
    humanScore = 0;
    computerScore = 0;

    for (let i = 0; i < 5; i++)
        playRound(getHumanChoice(), getComputerChoice());

    if (humanScore > computerScore)
        alert(`Victory! Final score: ${humanScore} — ${computerScore}`);
    else if (humanScore == computerScore)
        alert(`Stalemate! Final score: ${humanScore} — ${computerScore}`);
    else
        alert(`You lost! Final score: ${humanScore} — ${computerScore}`);
}


playGame();