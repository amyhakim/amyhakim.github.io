document.addEventListener('DOMContentLoaded', function () {
  const projectsLink = document.querySelector('.projects-link strong');
  const projectsDropdown = document.querySelector('.projects-dropdown');

  projectsLink.addEventListener('click', function () {
    const isVisible = getComputedStyle(projectsDropdown).display === 'block';
    projectsDropdown.style.display = isVisible ? 'none' : 'block';
  });
});

const decor = document.querySelector('.decor-top-right');

decor.addEventListener('touchstart', () => {
  decor.style.transform = 'translate(45%, -40%) rotate(15deg)';
});

decor.addEventListener('touchend', () => {
  decor.style.transform = 'translate(45%, -40%) rotate(0deg)';
});
