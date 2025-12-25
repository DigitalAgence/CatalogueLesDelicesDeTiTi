const pages = document.querySelectorAll(".page");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const audio = document.getElementById("audio");

let currentPage = 0;

// ordre z-index
pages.forEach((page, index) => {
  page.style.zIndex = pages.length - index;
});

// son
function playSound() {
  audio.currentTime = 0;
  audio.play();
}

// bouton suivant
nextBtn.addEventListener("click", () => {
  if (currentPage < pages.length - 1) {
    pages[currentPage].classList.add("flipped");
    currentPage++;
    playSound();
  }
});

// bouton précédent
prevBtn.addEventListener("click", () => {
  if (currentPage > 0) {
    currentPage--;
    pages[currentPage].classList.remove("flipped");
    playSound();
  }
});

// clic page
pages.forEach((page, index) => {
  page.addEventListener("click", () => {
    if (index === currentPage && currentPage < pages.length - 1) {
      page.classList.add("flipped");
      currentPage++;
      playSound();
    }
  });
});
