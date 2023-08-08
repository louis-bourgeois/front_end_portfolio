document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = entry.target.getAttribute('data-delay');
          setTimeout(() => entry.target.classList.add('visible'), delay);
        }
      });
    }, { threshold: 0 }); // Ici on met le threshold à 0

    document.querySelectorAll('.scroll-animate').forEach((el, index) => {
      el.setAttribute('data-delay', index * 500); // On met un délai pour chaque paragraphe
      observer.observe(el);
    });
  }, 2750); // Le temps d'attente en millisecondes avant que le code s'exécute
});
