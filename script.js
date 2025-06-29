// Smooth active nav link switching on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY + window.innerHeight / 2;
  sections.forEach(sec => {
    const top = sec.offsetTop;
    const bottom = top + sec.offsetHeight;
    const id = sec.getAttribute('id');
    if (scrollPos >= top && scrollPos <= bottom) {
      navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + id));
    }
  });
});

// Typing animation
const messages = ["Web Developer", "UI/UX Enthusiast", "Problem Solver"];
let msgIndex = 0, charIndex = 0;
const typingElem = document.querySelector('.typing');

function type() {
  const msg = messages[msgIndex];
  if (charIndex <= msg.length) {
    typingElem.textContent = msg.slice(0, charIndex++);
    setTimeout(type, 100);
  } else {
    setTimeout(() => {
      charIndex = 0;
      msgIndex = (msgIndex + 1) % messages.length;
      typingElem.textContent = '';
      type();
    }, 2000);
  }
}
document.addEventListener('DOMContentLoaded', () => type());

// Theme toggle
const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('click', () => {
  document.documentElement.toggleAttribute('data-theme');
  toggle.textContent = document.documentElement.hasAttribute('data-theme') ? '☀️' : '🌙';
});

// Contact form placeholder submission
document.getElementById('contact-form').addEventListener('submit', e => {
  e.preventDefault();
  alert("Thanks, I'll get back to you soon!");
  e.target.reset();
});
