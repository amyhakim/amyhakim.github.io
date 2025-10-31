document.addEventListener('DOMContentLoaded', function () {
  const projectsLink = document.querySelector('.projects-link strong');
  const projectsDropdown = document.querySelector('.projects-dropdown');

  projectsLink.addEventListener('click', function () {
    const isVisible = getComputedStyle(projectsDropdown).display === 'block';
    projectsDropdown.style.display = isVisible ? 'none' : 'block';
  });
});
