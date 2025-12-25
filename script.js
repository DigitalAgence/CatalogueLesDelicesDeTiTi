const pages = document.querySelectorAll(".page");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const audio = document.getElementById("audio"); // Récupère l'audio

let currentPage = 0;

// ordre des pages (important pour l'effet)
pages.forEach((page, index) => {
  page.style.zIndex = pages.length - index;
});

// Fonction pour jouer le son
function playSound() {
  audio.currentTime = 0; // Repart du début
  audio.play();
}

// bouton suivant
nextBtn.addEventListener("click", () => {
  if (currentPage < pages.length) {
    pages[currentPage].classList.add("flipped");
    currentPage++;
    playSound(); // joue le son
  }
});

// bouton précédent
prevBtn.addEventListener("click", () => {
  if (currentPage > 0) {
    currentPage--;
    pages[currentPage].classList.remove("flipped");
    playSound(); // joue le son
  }
});

// clic sur la page
pages.forEach((page, index) => {
  page.addEventListener("click", () => {
    if (index === currentPage) {
      page.classList.add("flipped");
      currentPage++;
      playSound(); // joue le son
    }
  });
});
