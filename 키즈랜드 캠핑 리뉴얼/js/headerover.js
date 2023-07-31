const logoImg = document.querySelector("#logo img");
const imgwhite = "../imgs/logo/logo_white.png";
const imgorange = "../imgs/logo/logo_orange.png";

logoImg.addEventListener('mouseover', () => {
  logoImg.setAttribute("src", imgwhite);
});

logoImg.addEventListener('mouseout', () => {
  logoImg.setAttribute("src", imgorange);
});

const elg = document.querySelector('.menu-ico');
const elmenu = document.querySelector('.mobile-menu');

elg.addEventListener('click', () => {
  elmenu.classList.toggle('active');
  elg.classList.toggle('active');
});