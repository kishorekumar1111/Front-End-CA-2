
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
      