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
const templateSilla=document.getElementById("template-card-sillas").content;
const templateComputadora=document.getElementById("template-card-computadoras").content;
const fragment =document.createDocumentFragment();
const cardSillas= document.getElementById("cards-sillas");
const cardComputadora=document.getElementById("cards-computadoras");


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
    data.forEach(producto => {
        if (producto.tipo==="juego"){
        templateCard.querySelector(".titulo").innerText= producto.title;
        templateCard.querySelector(".precio").innerText=producto.precio;
        templateCard.querySelector("img").setAttribute("src", producto.Url);
        let clone= templateCard.cloneNode(true);
        fragment.appendChild(clone);
        }
    });
        card.appendChild(fragment);
        data.forEach(producto => {
        if (producto.tipo==="silla"){
        templateSilla.querySelector(".titulo").innerText= producto.title;
        templateSilla.querySelector(".precio").innerText=producto.precio;
        templateSilla.querySelector("img").setAttribute("src", producto.Url);
        let clone= templateSilla.cloneNode(true);
        fragment.appendChild(clone);
        }
        
    });
    cardSillas.appendChild(fragment);
    data.forEach(producto => {
        if (producto.tipo==="computadora"){
        templateComputadora.querySelector(".titulo").innerText= producto.title;
        templateComputadora.querySelector(".precio").innerText=producto.precio;
        templateComputadora.querySelector("img").setAttribute("src", producto.Url);
        templateComputadora.querySelector(".descripcion").innerText=producto.descripcion;
        let clone= templateComputadora.cloneNode(true);
        fragment.appendChild(clone);
        }
    });
    cardComputadora.appendChild(fragment);
};

function agregarAlCarrito() {
    const btnAgregar = document.querySelector("main");
    btnAgregar.addEventListener("click", (e) => {
            if(e.target.classList.contains("btn")){
                let tituloProductoAgregado = {nombre:e.target.previousSibling.previousSibling.previousSibling.previousSibling.textContent};
                console.log(tituloProductoAgregado)
            };
        });
}
agregarAlCarrito();





