const toggleButtonAll = document.querySelector('.nav-all');
const toggleButtonCommissioned = document.querySelector('.nav-commissioned');
const allProjects = document.querySelectorAll('.project-card');

toggleButtonAll.addEventListener('click', () => {
  toggleButtonCommissioned.classList.remove('active');
  toggleButtonAll.classList.add('active');
  allProjects.forEach((project, key) => {
    if (project.classList.contains('hidden')) {
      project.classList.remove('hidden');
    }
  })
})