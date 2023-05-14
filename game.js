//todo Get player and computer selections
// Gets the Players Choice
function getPlayerSelection()
{
    let playerSelector = prompt("Press 1 for Rock, 2 for Paper or 3 for Scissors");
    
    if (playerSelector == "1" || playerSelector == "2" || playerSelector == "3")
    {
        playerChoice = playerSelector;
    }
    else
    {
        getPlayerSelection();
    }
    return playerChoice - 1;
}

//Creates a random number between 0-2 to represent rock, paper, or scissors
function getComputerSelection()
{
    let selector = Math.floor(Math.random() * 3);
    return selector;  
}

//Gives text representation to the number generated for computer in getComputerSelection
function parseSelection(selector)
{
    let choice;
    switch(selector)
    {
        case 0:
            choice = "Rock";
            break;
        case 1:
            choice = "Paper";
            break;
        case 2:
            choice = "Scissors";
            break;
    }
    return choice;
}

//Get Winner of Round
function determinWinner(player, computer)
{
    let result;
    switch(player)
    {
        case 0: //ROCK
            if (computer === 0) //rock
            {
                result = "Tie";
                break;
            }
            else if( computer === 1) //paper
            {
                result = "Computer";
                break;
            }
            else if( computer === 2)//scissors
            {
                result = "Player";
                break;
            }
        case 1: //PAPER
            if (computer === 0)//rock
            {
                result = "Player";
                break;
            }
            else if( computer === 1)//paper
            {
                result = "Tie";
                break;
            }
            else if( computer === 2)//scissors
            {
                result = "Computer";
                break;
            }
        case 2: //SCISSORS
            if (computer === 0)//rock
            {
                result = "Computer";
                break;
            }
            else if( computer === 1)//paper
            {
                result = "Player";
                break;
            }
            else if( computer === 2)//scissors
            {
                result = "Tie";
                break;
            }
    }
    return result;
}

//Starts a round of RPS
function startRound()
{
    let player = getPlayerSelection();
    let computer = getComputerSelection();
    let result = determinWinner(player, computer);
    let winner;
    if (result == "Player") {
        winner = 0;
    } else if(result == "Computer")
    {
        winner = 1;
    } else
    {
        winner = 2;
    }
    
    console.log(`
    Player:${parseSelection(player)}
    Computer:${parseSelection(computer)}
    Winner: ${result}`)
    return winner;

}

//Starts the Game
function game()
{   
    let winCounter = 0;
    let loseCounter = 0;
    let tieCounter = 0;

    for (let i = 0; i < 5; i++) 
    {
        let roundResult = startRound();
        if (roundResult == 0)
        {winCounter++}
        else if(roundResult == 1)
        {loseCounter++}
        else
        {tieCounter++}
    }
    console.log(`
    Player Wins: ${winCounter}
    Player Loses: ${loseCounter}
    Player Ties: ${tieCounter}
    `)
}
game();
