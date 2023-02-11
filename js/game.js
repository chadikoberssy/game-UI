const choices = ["rock", "paper", "scissors"];
const result = document.getElementById("result");
const buttons = document.querySelectorAll("img");
const cpuScore = document.querySelector("#cpu-score");
const userScore = document.querySelector("#user-score");
const gameResult = document.querySelector("#game-result");

let computerScore = 0,
playerScore = 0;

// Game
buttons.forEach(button => {
  button.addEventListener("click", e => {
    gameResult.innerHTML = "";
    let playerChoice = e.target.id;
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(playerChoice);

    if (playerChoice === computerChoice) {
      result.innerHTML = "It's a tie!";
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      result.innerHTML = "You win!";
      playerScore++;
      updateScore(playerScore, "user");
    } else {
      result.innerHTML = "Computer wins!";
      computerScore++;
      updateScore(computerScore, "cpu");
    }
    checkScore(playerScore, computerScore);
  });
});

// Clear all scores and start fresh
const clear = () => {
  playerScore = 0;
  computerScore = 0;
  result.innerHTML = "Start";
  userScore.innerHTML = 0;
  cpuScore.innerHTML = 0;
}

// Updates the score on the interface
const updateScore = (score, player) => {
  if(player == "user") {
    userScore.innerHTML = score;
  } else {
    cpuScore.innerHTML = score;
  }
}

// Check score to see who won 5 rounds
const checkScore = (playerScore, computerScore) => {
  if(playerScore == 5) {
    gameResult.style.color = "green";
    gameResult.innerHTML = "You Win !!";
    clear();
  } else if (computerScore == 5) {
    gameResult.style.color = "red";
    gameResult.innerHTML = "Better luck next time";
    clear();
  }
}


