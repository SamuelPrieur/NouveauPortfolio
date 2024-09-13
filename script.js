function init() {
  const listItems = document.querySelectorAll("li.project");

  listItems.forEach((li) => {
    li.addEventListener("mouseenter", () => {
      li.classList.add("hovered");

      const previousHr = li.previousElementSibling;
      const nextHr = li.nextElementSibling;

      if (previousHr && previousHr.tagName.toLowerCase() === "hr") {
        previousHr.classList.add("PjLine");
        previousHr.style.width = "100%";
      }

      if (nextHr && nextHr.tagName.toLowerCase() === "hr") {
        nextHr.classList.add("PjLine");
        nextHr.style.width = "100%";
      }
    });

    li.addEventListener("mouseleave", () => {
      li.classList.remove("hovered");

      const previousHr = li.previousElementSibling;
      const nextHr = li.nextElementSibling;

      if (previousHr && previousHr.tagName.toLowerCase() === "hr") {
        previousHr.style.width = "0";
      }

      if (nextHr && nextHr.tagName.toLowerCase() === "hr") {
        nextHr.style.width = "0";
      }
    });
  });

  // Utilisation de SplitType et animation avec GSAP
  const textHeading = new SplitType("#textHeading");
  const Projects = new SplitType(".Projects");
  gsap.to(".word", {
    y: 0,
    stagger: 0.05,
    delay: 0,
    duration: 0.5,
  });

  // Sélection des liens
  const linkA = document.querySelector("#pj1");
  const linkB = document.querySelector("#pj2");
  const linkC = document.querySelector("#pj3");
  const linkD = document.querySelector("#pj4");
  const img = document.querySelector("main img");

  // Vérification que les éléments existent avant d'ajouter des événements
  if (linkA && linkB && linkC && linkD && img) {
    function changeImage(imageSrc) {
      img.src = imageSrc;
    }

    linkA.addEventListener("mouseenter", () => changeImage("img/projects/2023Portfolio.jpg"));
    linkB.addEventListener("mouseenter", () => changeImage("img/projects/dashboard.jpg"));
    linkC.addEventListener("mouseenter", () => changeImage("img/projects/leCaroussel.jpg"));
    linkD.addEventListener("mouseenter", () => changeImage("img/projects/bugTracker.jpg"));
  } else {
    console.error("Un ou plusieurs éléments n'ont pas été trouvés.");
  }
}

// Initialisation de Swup
const swup = new Swup();

// Attente du chargement complet du document
if (document.readyState === "complete") {
  init();
} else {
  document.addEventListener("DOMContentLoaded", init);
}

// Réinitialisation après chaque changement de page via Swup
swup.hooks.on("page:view", init);

// Fonction pour afficher l'heure
function afficherHour() {
  let now = new Date();
  let options = {
    timeZone: "Europe/Paris",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };
  let hourParis = now.toLocaleTimeString("en-US", options);
  document.getElementById("Hour").textContent = hourParis;
}

// Initialisation de l'affichage de l'heure
window.onload = function () {
  afficherHour();
  setInterval(afficherHour, 1000);
};

// Intersection Observer pour afficher les éléments
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("showN");
    }
  });
});

// Sélection et observation des éléments cachés
const ShowAnim = document.querySelectorAll(".hiddenN");
ShowAnim.forEach((el) => observer.observe(el));
