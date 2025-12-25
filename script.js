const pages = document.querySelectorAll(".page");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const audio = document.getElementById("audio");

let currentPage = 0;

// ordre des pages (z-index)
pages.forEach((page, index) => {
  page.style.zIndex = pages.length - index;
});

// 🔊 jouer le son
function playSound() {
  audio.currentTime = 0;
  audio.play();
}

// 📐 redimensionner les pages
function resizePages() {
  const container = document.querySelector(".book");
  const boundWidth = container.clientWidth;
  const boundHeight = container.clientHeight;

  pages.forEach((page) => {
    const originalWidth = page.naturalWidth || page.offsetWidth;
    const originalHeight = page.naturalHeight || page.offsetHeight;

    const size = calculateBound({
      width: originalWidth,
      height: originalHeight,
      boundWidth: boundWidth,
      boundHeight: boundHeight,
    });

    page.style.width = size.width + "px";
    page.style.height = size.height + "px";
  });
}

// 🔄 resize au chargement + resize écran
window.addEventListener("load", resizePages);
window.addEventListener("resize", resizePages);

// ▶ bouton suivant (bloqué à la dernière page)
nextBtn.addEventListener("click", () => {
  if (currentPage < pages.length - 1) {
    pages[currentPage].classList.add("flipped");
    currentPage++;
    playSound();
  }
});

// ◀ bouton précédent
prevBtn.addEventListener("click", () => {
  if (currentPage > 0) {
    currentPage--;
    pages[currentPage].classList.remove("flipped");
    playSound();
  }
});

// 📖 clic sur une page (dernière page bloquée)
pages.forEach((page, index) => {
  page.addEventListener("click", () => {
    if (index === currentPage && currentPage < pages.length - 1) {
      page.classList.add("flipped");
      currentPage++;
      playSound();
    }
  });
});
