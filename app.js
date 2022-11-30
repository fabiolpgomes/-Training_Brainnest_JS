let computerSelection;
let computerPoints = 0;
let playerPoints = 0;

function computerPlay() {
  let selection = Math.floor(Math.random() * 3);
  console.log(selection);

  if (selection == 0) {
    computerSelection = "rock";
  } else if (selection == 1) {
    computerSelection = "paper";
  } else {
    computerSelection = "scissors";
  }
  return computerSelection;
}

let promptImput;
let playerSelection;

function selectOption() {
  promptImput = window.prompt(`Choice Rock, Paper or Scissors`);

  let lowerPropmtImput = promptImput.toLowerCase();

  if (
    lowerPropmtImput == "rock" ||
    lowerPropmtImput == "paper" ||
    lowerPropmtImput == "scissors"
  ) {
    playerSelection = lowerPropmtImput;
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
      `Player is the winner, try your luck again. The score is: Computer = ${computerPoints} and Player = ${playerPoints} `
    );
  } else if (
    (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "paper" && playerSelection == "rock") ||
    (computerSelection == "scissors" && playerSelection == "paper")
  ) {
    computerPoints++;
    alert(
      `Computer is the winner. Try again. The score is: Computer = ${computerPoints} and Player = ${playerPoints} `
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
