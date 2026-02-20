document.querySelector('.hamburger').addEventListener('click', () => {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('hidden');
  navLinks.classList.toggle('absolute');
  navLinks.classList.toggle('w-full');
  navLinks.classList.toggle('top-20');
  navLinks.classList.toggle('left-12');
  navLinks.classList.toggle('bg-primary');
  navLinks.classList.toggle('mt-0');
});
