const elg = document.querySelector('.menu-ico');
const elmenu = document.querySelector('.mobile-menu');

elg.addEventListener('click', () => {
  elmenu.classList.toggle('active');
  elg.classList.toggle('active');
});