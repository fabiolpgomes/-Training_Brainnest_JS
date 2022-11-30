let computerSelection;
let choiceAdd;
let playerSelection;
let computerPoints = 0;
let playerPoints = 0;

function computerPlay() {
  let randomComputer = Math.floor(Math.random() * 3);
  console.log(randomComputer);

  if (randomComputer == 0) {
    computerSelection = "rock";
  } else if (randomComputer == 1) {
    computerSelection = "paper";
  } else {
    computerSelection = "scissors";
  }
  return computerSelection;
}
console.log(computerSelection);

function selectOption() {
  choiceAdd = window.prompt(`Choice Rock, Paper or Scissors`);
  let userChoice = choiceAdd.toLowerCase();

  if (
    userChoice == "rock" ||
    userChoice == "paper" ||
    userChoice == "scissors"
  ) {
    playerSelection = userChoice;
  } else {
    alert("Please Choice rock, paper or scissors");
  }
  return playerSelection;
}

function playRound(computerSelection, playerSelection) {
  playerSelection = selectOption();
  console.log(`Player chose ${playerSelection}`);

  computerSelection = computerPlay();
  console.log(`Computer chose ${computerSelection}`);

  if (
    (computerSelection == "rock" && playerSelection == "rock") ||
    (computerSelection == "paper" && playerSelection == "paper") ||
    (computerSelection == "scissors" && playerSelection == "scissors")
  ) {
    console.log("No winner, try your luck again");
    alert("No winner, try your luck again");
  } else if (
    (computerSelection == "rock" && playerSelection == "paper") ||
    (computerSelection == "paper" && playerSelection == "scissors") ||
    (computerSelection == "scissors" && playerSelection == "rock")
  ) {
    playerPoints++;
    console.log("Player is the winner, try your luck again");
    alert(
      `Player wins!!!! The Computer can't cry. The result was: Player = ${playerPoints} and Computer = ${computerPoints} `
    );
  } else if (
    (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "paper" && playerSelection == "rock") ||
    (computerSelection == "scissors" && playerSelection == "paper")
  ) {
    computerPoints++;
    alert(
      `The computer won!!!! Don't get discouraged, keep trying. The result was: Computer = ${computerPoints} and Player = ${playerPoints} `
    );
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    playRound(computerSelection, playerSelection);
  }

  alert(`The final score is: 
    Computer = ${computerPoints} and Player = ${playerPoints}`);
}

game();
