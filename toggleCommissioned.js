const toggleButton = document.querySelector('.nav-commissioned');
const toggleButtonProjects = document.querySelector('.nav-all');
const allWorks = document.querySelectorAll('.project-card');

toggleButton.addEventListener('click', () => {
  toggleButtonProjects.classList.remove('active');
  toggleButton.classList.add('active');
  allWorks.forEach((work, key) => {
    if (!work.classList.contains('commissioned')) {
      work.classList.add('hidden');
    }
  })
})