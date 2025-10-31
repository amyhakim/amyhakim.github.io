document.addEventListener('DOMContentLoaded', function () {
  const projectsLink = document.querySelector('.projects-link strong');
  const projectsDropdown = document.querySelector('.projects-dropdown');

  projectsLink.addEventListener('click', function (e) {
  e.stopPropagation(); 
  const isVisible = getComputedStyle(projectsDropdown).display === 'block';

  if (isVisible) {
    projectsDropdown.style.display = 'none';
  } else {
    projectsDropdown.style.display = 'block';
  }
});

 
  if ('ontouchstart' in window) {
    const decor = document.querySelector('.decor-top-right');
    let rotated = false;

    decor.addEventListener('click', function (e) {
      e.stopPropagation(); 
      if (!rotated) {
        decor.style.transform = 'translate(45%, -40%) rotate(15deg)';
        rotated = true;
      } else {
        decor.style.transform = 'translate(45%, -40%) rotate(0deg)';
        rotated = false;
      }
    });
  }
});
