
    // Game details arrays
    const names = ["Color Challenge", "Memory Match"];
    const urls = [
      "https://unstopablethinkerr.github.io/color-quiz-challenge/",
      "https://unstopablethinkerr.github.io/memory-match-game/"
    ];
    const images = [
      "img1.jpg",
      "img2.png"
    ];

    // Populate the grid dynamically
    const gridContainer = document.getElementById("grid-container");

    for (let i = 0; i < names.length; i++) {
      const gridItem = document.createElement("div");
      gridItem.className = "grid-item";

      gridItem.innerHTML = 
        <img src="${images[i]}" alt="${names[i]}">
        <p><a href="${urls[i]}" target="_blank">${names[i]}</a></p>
      ;

      gridContainer.appendChild(gridItem);
    }

function shareGame() {
  if (navigator.share) {
    navigator.share({
      title: name,
      text: 🏏Check out this game : https://unstopablethinkerr.github.io/gamegrid/ 
      
    }).then(() => {
      console.log('Thanks for sharing!');
    }).catch((err) => {
      console.error('Error sharing:', err);
    });
  } else {
    alert('Web Share API is not supported in your browser.');
  }
}



// Select the game background element
const gameBg = document.querySelector('.gamebg');

// Create particles dynamically
for (let i = 0; i < 100; i++) {
  const particle = document.createElement('div');
  particle.className = 'particle';
  
  // Randomize position and animation duration
  particle.style.left = Math.random() * 100 + 'vw';
  particle.style.top = Math.random() * 100 + 'vh';
  particle.style.animationDuration = 5 + Math.random() * 5 + 's';
  particle.style.animationDelay = Math.random() * 5 + 's';

  // Append particles to the game background
  gameBg.appendChild(particle);
}
