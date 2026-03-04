// Typewriter
const phrases = [
  'my package arrives.',
  'my kid gets home.',
  'someone parks in my space.',
];
let pIdx = 0, cIdx = 0, deleting = false;

function typeWriter() {
  const el = document.getElementById('typeTarget');
  if (!el) return;
  const phrase = phrases[pIdx];

  if (!deleting) {
    el.textContent = phrase.slice(0, cIdx + 1);
    cIdx++;
    if (cIdx === phrase.length) {
      deleting = true;
      setTimeout(typeWriter, 2200);
      return;
    }
    setTimeout(typeWriter, 68);
  } else {
    el.textContent = phrase.slice(0, cIdx - 1);
    cIdx--;
    if (cIdx === 0) {
      deleting = false;
      pIdx = (pIdx + 1) % phrases.length;
      setTimeout(typeWriter, 400);
      return;
    }
    setTimeout(typeWriter, 38);
  }
}
typeWriter();

// Navbar scroll
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  });
}

// Mobile menu
function openMenu() {
  document.getElementById('mobileMenu').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeMenu() {
  document.getElementById('mobileMenu').classList.remove('open');
  document.body.style.overflow = '';
}

// Fade-in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// FAQ accordion
document.querySelectorAll('.faq-q').forEach(q => {
  q.addEventListener('click', () => {
    const item = q.parentElement;
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

// Pricing toggle (annual/monthly)
const toggle = document.querySelector('.toggle');
if (toggle) {
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('annual');
    const annual = toggle.classList.contains('annual');
    document.querySelectorAll('.price-amount[data-monthly]').forEach(el => {
      const m = parseFloat(el.dataset.monthly);
      el.textContent = annual ? Math.round(m * 0.8) : m;
    });
    const lbl = document.querySelector('.billing-period');
    if (lbl) lbl.textContent = annual ? 'billed annually' : 'billed monthly';
  });
}
