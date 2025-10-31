document.addEventListener('DOMContentLoaded', function () {
  const projectsLink = document.querySelector('.projects-link strong');
  const projectsDropdown = document.querySelector('.projects-dropdown');

  projectsLink.addEventListener('click', function () {
    const isVisible = getComputedStyle(projectsDropdown).display === 'block';
    projectsDropdown.style.display = isVisible ? 'none' : 'block';
  });
});

if ('ontouchstart' in window) {
  const decor = document.querySelector('.decor-top-right');
  let rotated = false; 

  decor.addEventListener('click', () => {
    if (!rotated) {
      decor.style.transform = 'translate(45%, -40%) rotate(15deg)';
    } else {
      decor.style.transform = 'translate(45%, -40%) rotate(0deg)';
    }
    rotated = !rotated; 
  });
}