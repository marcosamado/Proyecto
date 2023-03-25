// *************** HEADER ***************//

// ***Boton Hamburguesa y menu desplegable responsive***
const barMenu = document.querySelector(".bars_menu");
const bar1 = document.querySelector(".line1_bars-menu");
const bar2 = document.querySelector(".line2_bars-menu");
const bar3 = document.querySelector(".line3_bars-menu");

const menuDesplegable = document.getElementById("menu-desplegable");
const backMenu = document.querySelector(".back_menu");

barMenu.addEventListener("click", () => {
    bar1.classList.toggle("activeline1_bars-menu");
    bar2.classList.toggle("activeline2_bars-menu");
    bar3.classList.toggle("activeline3_bars-menu");
    menuDesplegable.classList.toggle("nav-desplegable");
})
/********************** MAIN*************************************** */
//*********** Recuperar productos de la api **********************/
const card=document.getElementById("cards");
const templateCard= document.getElementById("template-card").content;
const fragment =document.createDocumentFragment();
document.addEventListener("DOMContentLoaded", () => {
    fetchData();
})
const fetchData= async()=>{
    try {
        const respuesta= await fetch("./json/apiProductos.json");
        const data= await respuesta.json();
        cargarTarjetas(data);
    } catch (error) {
        console.log(error);
    }
}

function cargarTarjetas(data){
    data.forEach((juego) => {
        templateCard.querySelector(".titulo").innerText= juego.title;
        templateCard.querySelector(".precio").innerText=juego.precio;
        templateCard.querySelector("img").setAttribute("src", juego.Url);
        templateCard.querySelector(".btn-dark").dataset.id=juego.id;
        const clone= templateCard.cloneNode(true);
        fragment.appendChild(clone);
    });
        card.appendChild(fragment);
}