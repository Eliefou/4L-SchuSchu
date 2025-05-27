// Lancer tout le script après que le DOM soit prêt
window.addEventListener("DOMContentLoaded", () => {
  // === SLIDER ===
  let slideIndex = 1;
  showSlides(slideIndex);

  // Fonctions pour navigation
  window.plusSlides = function (n) {
    showSlides(slideIndex += n);
  }

  window.currentSlide = function (n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    const slides = document.getElementsByClassName("custom-slider");
    const dots = document.getElementsByClassName("dot");

    if (slides.length === 0) return; // Sécurité si aucun slide

    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove("active");
    }

    slides[slideIndex - 1].style.display = "block";
    if (dots[slideIndex - 1]) {
      dots[slideIndex - 1].classList.add("active");
    }
  }

  // === COMPTEUR ===
  const countdownEl = document.getElementById("countdown");
  const targetDate = new Date("2026-02-18T10:00:00").getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
      countdownEl.innerHTML = "🚀 C'est parti !";
      clearInterval(timer);
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

countdownEl.innerHTML = `
  <div class="line">
    <span>${days}</span>j :
    <span>${hours.toString().padStart(2, '0')}</span>h :
    <span>${minutes.toString().padStart(2, '0')}</span>m :
    <span>${seconds.toString().padStart(2, '0')}</span>s
  </div>
  <div class="label">avant le départ</div>
`;

    // countdownEl.innerHTML = `
    //   <span>${days}</span>j :
    //   <span>${hours.toString().padStart(2, '0')}</span>h :
    //   <span>${minutes.toString().padStart(2, '0')}</span>m :
    //   <span>${seconds.toString().padStart(2, '0')}</span>s
    //   <div class="label">avant le départ</div>
    // `;
  }

  const timer = setInterval(updateCountdown, 1000);
  updateCountdown(); // Exécute tout de suite
});
