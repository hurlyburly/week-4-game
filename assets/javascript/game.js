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
var wins = 0;
var losses = 0;
var game = true;
var wizardScore = 0;
var playerScore = 0;
var crystal = {
  "red-crystal": 0,
  "blue-crystal": 0,
  "green-crystal": 0,
  "orange-crystal": 0
};

//List of functions to call
//update player score

// function collectCrystals() {
//   $(".crystal").on("click", function() {
//     var assignedValue = crystal[$(this).attr("id")];
//     playerScore = playerScore + assignedValue;
//     $(".player-score").html("Your Score: " + "<b>" + playerScore + "</b>");
//   });
// }
//start game code
function startGame() {
  wizardScore = Math.floor(Math.random() * (120 - 19) + 19);
  playerScore = 0;
  crystal["red-crystal"] = Math.floor(Math.random() * 12 + 1);
  crystal["blue-crystal"] = Math.floor(Math.random() * 12 + 1);
  crystal["green-crystal"] = Math.floor(Math.random() * 12 + 1);
  crystal["orange-crystal"] = Math.floor(Math.random() * 12 + 1);
  $(".wizard").html("The Wizard: " + "<b>" + wizardScore + "</b>");
  $(".player-score").html("Your Score: " + "<b>" + playerScore + "</b>");
  
}

//winning game code
function winGame() {
  wins++;
  $(".wins").html("Wins: " + "<b>" + wins + "</b>");
  $(".responses").text("You win! Alas, it's the 21st century and Delilah is not interested in you. She's run off to go to business school.");
}
//losing game code
function loseGame() {
  losses++;
  $(".losses").html("Losses: " + "<b>" + losses + "</b>");
  $(".responses").text("You lose! Also, Delilah's found out about the whole thing and has rained down fury on everyone involved. Maybe you should rethink your life choices.");
}

$(".new-game").on("click", function() {
    $(".wins").html("Wins: " + "<b>" + wins + "</b>");
    $(".losses").html("Losses: " + "<b>" + losses + "</b>");
    startGame();

  });
  //logic of the game
  $(".crystal").on("click", function() {
        var assignedValue = crystal[$(this).attr("id")];
        playerScore = playerScore + assignedValue;
        $(".player-score").html("Your Score: " + "<b>" + playerScore + "</b>");

    if (playerScore == wizardScore) {
      winGame();
      startGame();
    } else {
      if (playerScore < wizardScore) {
        
      } else {
        loseGame();
        startGame();
      }
    }
  }).animate(this.effect("animated bounce"));

  

//starting the game
