const pages = document.querySelectorAll(".page");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let currentPage = 0;

// ordre des pages (important pour l'effet)
pages.forEach((page, index) => {
  page.style.zIndex = pages.length - index;
});

// bouton suivant
nextBtn.addEventListener("click", () => {
  if (currentPage < pages.length) {
    pages[currentPage].classList.add("flipped");
    currentPage++;
  }
});

// bouton précédent
prevBtn.addEventListener("click", () => {
  if (currentPage > 0) {
    currentPage--;
    pages[currentPage].classList.remove("flipped");
  }
});

// clic sur la page
pages.forEach((page, index) => {
  page.addEventListener("click", () => {
    if (index === currentPage) {
      page.classList.add("flipped");
      currentPage++;
    }
  });
});
