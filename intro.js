document.addEventListener("DOMContentLoaded", function() {
    var overlay = document.getElementById('overlay');
    overlay.style.display = 'absolute'; // Show the popup when the page loads
  });
  
  function closePopup() {
    var overlay = document.getElementById('overlay');
    var content = document.getElementById('content');
    var playerNameInput = document.getElementById('playerName');
  
    var playerName = playerNameInput.value.trim();
  
    if (playerName !== '') {
      // Close the popup and show the content
      overlay.style.display = 'none';
      content.style.display = 'block';
  
      // Do something with playerName, like store it in localStorage
      // Example: localStorage.setItem('playerName', playerName);
    } else {
      alert('Please enter your name.'); // Show an alert if the player name is empty
    }
  }
  function redirectToIntro() {
    window.location.href = "game.html";
}

document.addEventListener("DOMContentLoaded", function() {
  var bgMusic = document.getElementById("bgMusic");
  var musicControl = document.getElementById("musicControl");
  var isPlaying = false;

  musicControl.addEventListener("click", function() {
    if (isPlaying) {
      bgMusic.pause();
      isPlaying = false;
      musicControl.src = "sound_PNG20.png"; // Change image to play icon
    } else {
      bgMusic.play();
      isPlaying = true;
      musicControl.src = "Pause-Button-PNG-Pic.png"; // Change image to pause icon
    }
  });
});