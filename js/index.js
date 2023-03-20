// *************** HEADER ***************//

// ***Boton Hamburguesa***
const barMenu = document.querySelector(".bars_menu");
const bar1 = document.querySelector(".line1_bars-menu");
const bar2 = document.querySelector(".line2_bars-menu");
const bar3 = document.querySelector(".line3_bars-menu");


barMenu.addEventListener("click", () => {
    bar1.classList.toggle("activeline1_bars-menu");
    bar2.classList.toggle("activeline2_bars-menu");
    bar3.classList.toggle("activeline3_bars-menu");
})
