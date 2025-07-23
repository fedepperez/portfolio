const nav = document.getElementById('nav');
const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');
});