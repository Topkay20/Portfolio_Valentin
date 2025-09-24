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

function changerContenu(id) {
  // Contenus préparés
  const contenus = {
    contenu1: {
      parcoursTitre: "Besançon (Franche-Comté) au 13e Régiment du Génie.",
      parcoursTexte:
        "Dans le Génie, j'ai operé pendant 3 ans en tant que sapeur de combat, spécialisé en pyrotechnie et en combat.<br> J'ai participé à diverses missions, notamment en Guyane, où j'ai acquis des compétences en environnement tropical et en survie.<br> Mon expérience militaire m'a permis de développer des qualités telles que la discipline, le travail en équipe et la gestion du stress.",
      parcoursImage: "image/guyane.jpg",
    },
    contenu2: {
      parcoursTitre: "Rouen (Normandie) à l'école Providence Sainte Thérèse",
      parcoursTexte:
        "Dans le Marketing, j'ai réalisé 2 ans en alternance dans la grande distribution.<br> J'ai appris à gérer une équipe, à organiser des opérations commerciales et à analyser les performances des ventes.<br> Cette expérience m'a permis de renforcer mes compétences en communication, en leadership et en gestion de projet.",
      parcoursImage: "image/vente.jpg",
    },
    contenu3: {
      parcoursTitre: "Chambery (Savoie) à l'école CIFEP",
      parcoursTexte:
        "Dans l'informatique, j'ai été en alternance pendant 2 ans dans le domaine de la vidéo protection chez Ineo Infracom, appartenant au groupe Bouygues.<br> J'étais responsable de l'installation, de la configuration et de la maintenance des systèmes de vidéosurveillance pour divers institutions publiques <br>(notamment Annecy, La Motte Servolex etc ...).<br> Cette expérience m'a permis de développer des compétences techniques en réseaux, en sécurité informatique et en gestion de projets IT.",
      parcoursImage: "image/poste_info.jpg",
    },
  };

  // Mise à jour du contenu
  document.getElementById("parcoursTitre").innerHTML =
    contenus[id].parcoursTitre;
  document.getElementById("parcoursTexte").innerHTML =
    contenus[id].parcoursTexte;
  document.getElementById("parcoursImage").src = contenus[id].parcoursImage;
}

document.querySelectorAll(".boutons_parcours").forEach((bouton) => {
  bouton.addEventListener("click", function () {
    if (this.classList.contains("active")) {
      // Si déjà active, on désactive (revient au titre)
      this.classList.remove("active");
    } else {
      // Sinon, on désactive les autres et active celle-ci
      document
        .querySelectorAll(".boutons_parcours")
        // On démarre une boucle pour chaque élément avec la classe "carreau" et on nomme "c" chaque élément de la boucle
        .forEach((b) => b.classList.remove("active"));
      this.classList.add("active");
    }
  });
});

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
