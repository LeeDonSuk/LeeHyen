const icon = document.querySelector('.menu-ico');
const elmenu = document.querySelector('.mobile-menu');

icon.addEventListener('click', () => {
  elmenu.classList.toggle('active');
  icon.classList.toggle('active');
});