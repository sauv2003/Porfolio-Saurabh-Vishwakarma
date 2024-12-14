// script.js

// Theme Toggle
const toggleButton = document.createElement('button');
toggleButton.textContent = "Toggle Theme";
document.body.appendChild(toggleButton);

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Form Validation
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for your message!');
});
