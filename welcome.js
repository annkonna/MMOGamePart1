setInterval(function(){ updatePlayers(); }, 3000);

function updatePlayers() {
  document.getElementById("players").value = "Number of players: "+Math.floor((Math.random() * 100) + 1);
}

function redirect() {
//    setTimeout('window.location.href="game4.html"', 0); 
  window.location.href="game.html"
}