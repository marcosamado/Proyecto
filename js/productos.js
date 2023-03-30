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
//*********** capturando elementos para agregar productos **********************/
const card=document.getElementById("cards");
const templateCard= document.getElementById("template-card").content;
const templateSilla=document.getElementById("template-card-sillas").content;
const templateComputadora=document.getElementById("template-card-computadoras").content;
const fragment =document.createDocumentFragment();
const cardSillas= document.getElementById("cards-sillas");
const cardComputadora=document.getElementById("cards-computadoras");


document.addEventListener("DOMContentLoaded", () => {
    fetchData();
    // traerProductos();
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

// const traerProductos= async()=>{
//         try {
//             const respuesta= await fetch("http://localhost:5000/api/productos");
//             const data= await respuesta.json();
//             console.log(data.length);
//             // cargarTarjetas(data);
//         } catch (error) {
//             console.log(error);
//         }
//     }



// *******Imprimiendo productos en el html *****
function cargarTarjetas(data){
    data.forEach(producto => {  
        if(producto.tipo==="computadora"){
            templateComputadora.querySelector(".titulo").innerText= producto.title;
            templateComputadora.querySelector(".precio").innerText=producto.precio;
            templateComputadora.querySelector("img").setAttribute("src", producto.Url);
            templateComputadora.querySelector(".btn").dataset.id = producto.id;
            templateComputadora.querySelector(".descripcion").innerText=producto.descripcion;
            const clone= templateComputadora.cloneNode(true);
            fragment.appendChild(clone);
            }else {
                templateCard.querySelector(".titulo").innerText= producto.title;
                templateCard.querySelector(".precio").innerText=producto.precio;
                templateCard.querySelector("img").setAttribute("src", producto.Url);
                templateCard.querySelector(".btn").dataset.id = producto.id;
                const clone= templateCard.cloneNode(true);
                fragment.appendChild(clone);
            }
        if(producto.tipo==="juego"){
            card.appendChild(fragment);
        }
        if(producto.tipo==="silla"){
            cardSillas.appendChild(fragment);
        }
        if(producto.tipo==="computadora"){
            cardComputadora.appendChild(fragment);
        }
    });
};



let carrito = {};

const btnAgregar = document.querySelector("main");
btnAgregar.addEventListener("click", (e) => {
    if(e.target.classList.contains("btn")){
        seleccionarProducto(e.target.parentElement);
        console.log(carrito);
    };
});



function seleccionarProducto(objeto) {
    const producto = {
        id: objeto.querySelector(".btn").dataset.id,
        titulo: objeto.querySelector(".titulo").textContent,
        precio: objeto.querySelector(".precio").textContent,
        cantidad: 1 
    };
    if(carrito.hasOwnProperty(producto.id)){
        producto.cantidad = carrito[producto.id].cantidad + 1;
    };

    carrito[producto.id] = {...producto};

    localStorage.setItem('carrito',JSON.stringify(carrito));
};









