const siteico = document.querySelectorAll(".site-items > ul > li");
const sitebtn = document.querySelectorAll(".site-items");
const sitehover = document.querySelector(".site-hover");

sitebtn.forEach((btn) => {
    btn.addEventListener('mouseover', () => {
        if (window.innerWidth >= 768) {
            siteico.forEach((item) => {
                item.classList.add('active');
            });
            sitehover.innerText = "담양산성";
        }
    });

    btn.addEventListener('mouseout', () => {
        if (window.innerWidth >= 768) {
            siteico.forEach((item) => {
                item.classList.remove('active');
            });
            sitehover.innerText = "hover me!";
        }
    });
});
if (window.innerWidth < 768) {
    sitehover.innerText = "담양산성";
}