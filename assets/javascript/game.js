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
// * The random number shown at the start of the game should be between 19 - 120.
// *  Each crystal should have a random hidden value between 1 - 12.

//global variables
var wizardScore = [Math.floor(Math.random() * (120 - 19) + 19)];
var playerScore = 0;
var blueCrystal = Math.floor(Math.random() * 12 + 1);
var orangeCrystal = Math.floor(Math.random() * 12 + 1);
var greenCrystal = Math.floor(Math.random() * 12 + 1);
var redCrystal = Math.floor(Math.random() * 12 + 1);
var wins;
var losses;
var game = false;

//List of functions to call
//update player score
function collectCrystals() {
  $(".blue-crystal").on("click", function() {
    playerScore = playerScore + blueCrystal;
  });
  $(".orange-crystal").on("click", function() {
    playerScore = playerScore + orangeCrystal;
  });
  $(".green-crystal").on("click", function() {
    playerScore = playerScore + greenCrystal;
  });
  $(".red-crystal").on("click", function() {
    playerScore = playerScore + redCrystal;
  });
}
//start game code
function startGame() {
  $(".start-game").on("click", function() {
    game = true;
  });
  $(".wizard").html = "Wizard: " + wizardNumber;
}

//winning game code
function winGame() {
  wins++;
  $("wins").append("Wins: " + wins);
  gameStart = false;
}
//losing game code
function loseGame() {
  losses++;
  $("losses").append("Losses: " + losses);
  gameStart = false;
}

//logic of the game

function gameLogic() {
  if (playerScore !== wizardScore) {
    if (playerScore > wizardScore) {
      loseGame();
    } else {
      collectCrystals();
    }
  } else {
    winGame();
  }
}

//starting the game
$(document).on("click", function() {
  if (game) {
    gameLogic();
  } else {
    startGame();
    wizardScore();
  }
});
