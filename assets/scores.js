// Print the Highscores to the scores page
function printHighscores() {
    // get scores from localstorage or set to empty array
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
  
    // sort highscores by score property 
    highscores.sort(function(a, b) {
      return a.score - b.score;
    });
  
    highscores.forEach(function(score) {
      // create li tag for each high score
      var liEl = document.createElement("li");
      liEl.textContent = score.initials + " - " + score.score;
  
      // display on page
      var olEl = document.getElementById("highscores");
      olEl.appendChild(liEl);
    });
}
  
function clearHighscores() {
    window.localStorage.removeItem("highscores");
    window.location.reload();
}
  
clearBtn = document.getElementById("clear");
clearBtn.onclick = clearHighscores;
  

printHighscores();


