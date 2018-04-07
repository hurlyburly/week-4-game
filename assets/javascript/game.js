//To Do:
// * The player will be shown a random number at the start of the game.
// * When the player clicks on a crystal, it will add a specific amount of points to the player's total score.
//   * Your game will hide this amount until the player clicks a crystal.
//   * When they do click one, update the player's score counter.
// * The player wins if their total score matches the random number from the beginning of the game.
// * The player loses if their score goes above the random number.
// * The game restarts whenever the player wins or loses.
//   * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.
// * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

//global variables
var wins;
var losses;
var game = false;
var wizardScore = Math.floor(Math.random() * (120 - 19) + 19);
var playerScore = 0;
var blueCrystal = Math.floor(Math.random() * 12 + 1);
var orangeCrystal = Math.floor(Math.random() * 12 + 1);
var greenCrystal = Math.floor(Math.random() * 12 + 1);
var redCrystal = Math.floor(Math.random() * 12 + 1);
//List of functions to call
//update player score

function collectCrystals() {
    
  $(".blue-crystal").on("click", function() {
    Math.floor(Math.random() * 12 + 1);
    playerScore =playerScore + blueCrystal;
  });
  $(".player-score").html("Your Score: " + "<b>" + playerScore + "</b>");

  $(".orange-crystal").on("click", function() {
    score = playerScore + orangeCrystal;
  });
  $(".player-score").html("Your Score: " + "<b>" + playerScore + "</b>");

  $(".green-crystal").on("click", function() {
    playerScore = playerScore + greenCrystal;
  });
  $(".player-score").html("Your Score: " + "<b>" + playerScore + "</b>");

  $(".red-crystal").on("click", function() {
    playerScore = playerScore + redCrystal;
  });
  $(".player-score").html("Your Score: " + "<b>" + playerScore + "</b>");
}

//start game code
function startGame() {
  wizardScore = Math.floor(Math.random() * (120 - 19) + 19);
  playerScore = 0;
  blueCrystal = Math.floor(Math.random() * 12);
  orangeCrystal = Math.floor(Math.random() * 12);
  greenCrystal = Math.floor(Math.random() * 12);
  redCrystal = Math.floor(Math.random() * 12);

  $(".start-game").on("click", function() {
    game = true;
  });
  $(".wizard").html("The Wizard: " + "<b>" + wizardScore + "</b>");
  $(".player-score").html("Your Score: " + "<b>" + playerScore + "</b>");
}

//winning game code
function winGame() {
  wins++;
  $("wins").html("Wins: " + wins);
  $("responses").text("You win!");
  wizardScore = 0;
  playerScore = 0;
}
//losing game code
function loseGame() {
  losses++;

  $("losses").html("Losses: " + losses);
  $("responses").text("You lose!");
  wizardScore = 0;
  playerScore = 0;
}

//logic of the game

function gameLogic() {
  if (playerScore == wizardScore) {
    winGame();
  } else {
    if (playerScore < wizardScore) {
      collectCrystals();
      console.log("player score:" + playerScore);
    } else {
      loseGame();
    }
  }
}
//starting the game
$(document).on("click", function() {
  if (game) {
    gameLogic();
  } else {
    startGame();
  }
});
