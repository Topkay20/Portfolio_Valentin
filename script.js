// MENU BURGER fonction pour afficher/masquer le menu au clic sur le burger
document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".burger");
  const menu = document.getElementById("mobile-menu");

  burger.addEventListener("click", function () {
    menu.classList.toggle("show");
  });
});

// NAVBAR, fonction pour réduire la navbar au scroll
const nav = document.querySelector(".nav_container");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    nav.classList.add("shrink");
  } else {
    nav.classList.remove("shrink");
  }
});

// CAROUSEL BTS SIO
let currentIndex = 0;
const items = document.querySelectorAll(".carouselBTS-item");

function showSlide(index) {
  const inner = document.querySelector(".carouselBTS-inner");
  const total = items.length;
  if (index < 0) index = total - 1;
  if (index >= total) index = 0;
  currentIndex = index;
  inner.style.transform = `translateX(-${index * 100}%)`;
}

function prevSlide() {
  showSlide(currentIndex - 1);
}
function nextSlide() {
  showSlide(currentIndex + 1);
}

// SECTION PARCOURS, fonction pour changer le texte au clic sur les boutons
// Textes associés à chaque bouton
const textes = [
  "<b>Besançon (Franche-Comté) au 13e Régiment du Génie.</b><br>Dans le Génie, j'ai operé pendant 3 ans en tant que sapeur de combat, spécialisé en pyrotechnie et en combat.<br> J'ai participé à diverses missions, notamment en Guyane, où j'ai acquis des compétences en environnement tropical et en survie.<br> Mon expérience militaire m'a permis de développer des qualités telles que la discipline, le travail en équipe et la gestion du stress.",

  "<b>Rouen (Normandie) à l'école Providence Sainte Thérèse</b><br>Dans le Marketing, j'ai réalisé 2 ans en alternance dans la grande distribution.<br> J'ai appris à gérer une équipe, à organiser des opérations commerciales et à analyser les performances des ventes.<br> Cette expérience m'a permis de renforcer mes compétences en communication, en leadership et en gestion de projet.",

  "<b>Chambery (Savoie) à l'école CIFEP</b><br>Dans l'informatique, j'ai été en alternance pendant 2 ans dans le domaine de la vidéo protection chez Ineo Infracom, appartenant au groupe Bouygues.<br> J'étais responsable de l'installation, de la configuration et de la maintenance des systèmes de vidéosurveillance pour divers institutions publiques <br>(notamment Annecy, La Motte Servolex etc ...).<br> Cette expérience m'a permis de développer des compétences techniques en réseaux, en sécurité informatique et en gestion de projets IT.",
];

// Ajoute l'écouteur sur chaque bouton
document.querySelectorAll(".boutons_parcours").forEach((btn, i) => {
  btn.addEventListener("click", () => changerTexte(i, btn));
});

// Fonction pour changer le texte et l'état actif
function changerTexte(index, boutonClique) {
  document.getElementById("contenu").innerHTML = textes[index];

  // Retirer la classe 'actif' de tous les boutons
  const boutons = document.querySelectorAll(".boutons_parcours");
  boutons.forEach((b) => b.classList.remove("actif"));

  // Ajouter la classe 'actif' au bouton cliqué
  boutonClique.classList.add("actif");
}

// Affiche par défaut le texte du premier bouton et l'active
window.onload = () => {
  const premierBouton = document.querySelectorAll(".boutons_parcours")[0];
  premierBouton.classList.add("actif");
  changerTexte(0, premierBouton);
};

// SECTION COMPETENCES, fonction pour afficher le texte au clic sur les carreaux
//Recup les element qui ont la classe carreau
document.querySelectorAll(".carreau").forEach((carreau) => {
  carreau.addEventListener("click", function () {
    if (this.classList.contains("active")) {
      // Si déjà active, on désactive (revient au titre)
      this.classList.remove("active");
    } else {
      // Sinon, on désactive les autres et active celle-ci
      document
        .querySelectorAll(".carreau")
        // On démarre une boucle pour chaque élément avec la classe "carreau" et on nomme "c" chaque élément de la boucle
        .forEach((c) => c.classList.remove("active"));
      this.classList.add("active");
    }
  });
});
