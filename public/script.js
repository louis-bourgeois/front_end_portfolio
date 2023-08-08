document.addEventListener("DOMContentLoaded", function () {
  console.log("Etape 1: DOM content loaded");
  
  const menuOverlay = document.getElementById("menuOverlay");
  const menuItems = document.querySelectorAll(".menu-item");
  const menuIcon = document.querySelector(".menu-icon");
  const topbar = document.querySelector(".top-bar");
  const btmbar = document.querySelector(".bottom-bar");
  
  console.log("Etape 2: Elements sélectionnés", menuIcon);
  
  if(menuIcon) {
      menuIcon.addEventListener("click", toggleMenu);
      console.log("Etape 3: Ecouteur d'événement ajouté à menuIcon");
  }

  function toggleMenu() {
      if(menuIcon.classList.contains('isopen')) {
          closeMenu();
      } else {
          openMenu();
      }
  }

  function openMenu() {
    console.log("Etape 4: Fonction openMenu déclenchée");
    menuOverlay.style.display = "flex";
    menuOverlay.style.zIndex ="50";
    menuIcon.classList.add('isopen');
    topbar.classList.toggle('opened');
    btmbar.classList.toggle('opened');
    menuItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = "1";
            item.style.transform = "translateX(0)";
        }, index * 200 + 300);
    });
  }

  function closeMenu() {
      console.log("Etape 5: Fonction closeMenu déclenchée");
      topbar.classList.remove('opened');
      btmbar.classList.remove('opened');
      menuItems.forEach((item, index) => {
          setTimeout(() => {
              item.style.opacity = "0";
              item.style.transform = "translateX(100%)";
          }, index * 100);
      });
      setTimeout(() => {
          menuOverlay.style.display = "none";
          menuIcon.classList.remove('isopen'); // Il faut aussi enlever la classe 'isopen' quand on ferme le menu
      }, menuItems.length * 100);
  }
  window.addEventListener('resize', function() {
    if (window.innerWidth < 1023) {
        var anchors = document.querySelectorAll('a.menu-item');
        for (var i = 0; i < anchors.length; i++) {
            anchors[i].addEventListener('click', function(event) {
                // Récupérez la destination de l'attribut data-dest
                var dest = this.getAttribute('data-dest');
  
                // Si data-dest existe, empêchez le comportement par défaut et faites défiler la page
                if (dest) {
                    event.preventDefault();
  
                    // Ajoutez le symbole # pour faire un sélecteur CSS valide
                    
                    dest = "#" + dest;
  
                    document.querySelector(dest).scrollIntoView({
                        behavior: 'smooth'
                    });
  
                    closeMenu();
                }
                // Si data-dest n'existe pas, le lien d'ancrage se comportera normalement
            });
        }
    }
  });
  
  
  window.dispatchEvent(new Event('resize'));
});

function toggleDarkMode() {
  document.body.classList.toggle('transition'); // Ajoute la classe de transition
  document.body.classList.toggle('dark-mode');  // Ajoute la classe dark-mode au body
  document.documentElement.classList.toggle('dark-mode');
  let elements = document.body.getElementsByTagName('*');
  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.toggle('dark-mode');
  }
}

document.getElementById('themeButton').addEventListener('click', function() {
  toggleDarkMode();
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

window.onload = function() {
  if (localStorage.getItem('theme') === 'dark') {
    toggleDarkMode();
  }
}

  $(document).ready(function() {
    // Définit la fonction de transition initiale
    $('.pc.contact-layer').css('transition', 'transform 0.5s ease-in');
  
    $('#trigger').click(function(event) {
      if ($(window).width() <= 1023) {
        var lang = document.documentElement.lang;
        // Si la largeur est inférieure ou égale à 1023px, redirigez vers ./contact.html
        if (lang === 'fr') {
        window.location.href = './contact_fr.html';}
        else {
          window.location.href = './contact_en.html'
        }
      } else {
        // Si la largeur est supérieure à 1023px, exécutez votre code
        $('.pc.contact-layer').toggleClass('centered');
      }
    });
  
    $('.pc.contact-layer').on('transitionend', function() {
      if ($(this).hasClass('centered')) {
        $(this).css('transition', 'transform 0.5s ease-in');
      } else {
        $(this).css('transition', 'transform 0.5s ease-out');
      }
    });
});
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        entry.target.classList.add('visible');
      } 
      else {
        entry.target.classList.remove('show');
        entry.target.classList.remove('visible');
      }
    })
  }
);
// Écoutez l'événement de redimensionnement de la fenêtre
window.addEventListener('resize', function() {
  if (window.innerWidth < 1023) {
      var anchors = document.querySelectorAll('a.menu-item');
      for (var i = 0; i < anchors.length; i++) {
          anchors[i].addEventListener('click', function(event) {
              // Récupérez la destination de l'attribut data-dest
              var dest = this.getAttribute('data-dest');

              // Si data-dest existe, empêchez le comportement par défaut et faites défiler la page
              if (dest) {
                  event.preventDefault();

                  // Ajoutez le symbole # pour faire un sélecteur CSS valide
                  dest = "#" + dest;

                  document.querySelector(dest).scrollIntoView({
                      behavior: 'smooth'
                  });

                  closeMenu();
              }
              // Si data-dest n'existe pas, le lien d'ancrage se comportera normalement
          });
      }
  }
});


window.dispatchEvent(new Event('resize'));
