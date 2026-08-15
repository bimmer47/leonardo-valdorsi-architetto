document.getElementById('year').textContent = new Date().getFullYear();

const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

navToggle.addEventListener('click', () => {
  mainNav.classList.toggle('open');
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => mainNav.classList.remove('open'));
});

const sections = document.querySelectorAll('main .section, main .hero');
const navLinks = document.querySelectorAll('.nav-link');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { rootMargin: '-50% 0px -50% 0px' });

sections.forEach(section => observer.observe(section));

const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

form.addEventListener('submit', e => {
  e.preventDefault();
  if (!form.checkValidity()) {
    status.textContent = 'Compila tutti i campi correttamente.';
    return;
  }
  status.textContent = 'Grazie! Il tuo messaggio è stato preparato — collega il modulo a un servizio email per l\'invio reale.';
  form.reset();
});
