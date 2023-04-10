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
});

/******************MAIN ************************/

// ****** Capturamos elementos *********//
const cajaProductos=document.getElementById("items-body");
const cajaFooter=document.getElementById("items-footer");
const templateProductos=document.getElementById("template-productos").content;
const templateFooter=document.getElementById("template-footer").content;


const fragment = document.createDocumentFragment();

document.addEventListener("DOMContentLoaded", () => {
    cargarTemplateProductos();
})
//**********Capturamos el objeto con los productos del HTML productos****/

let productoCarrito=localStorage.getItem("carrito");
productoCarrito=JSON.parse(productoCarrito);
// console.log(productoCarrito);


function cargarTemplateProductos(){
    Object.values(productoCarrito).forEach(producto=>{
        console.log(producto.id);
        templateProductos.getElementById("Producto").textContent=producto.titulo;
        templateProductos.getElementById("Cantidad").innerHTML=`<td id="Cantidad">${producto.cantidad}
                                                                    <button id="${producto.id}" class="agregar">+</button>
                                                                    <button id="${producto.id}" class="quitar botonQuitar">-</button>
                                                                    </td>`
        // templateProductos.querySelector(".agregar").dataset.id=producto.id;
        // templateProductos.querySelector(".quitar").textContent;
        templateProductos.getElementById("Total").textContent=(producto.precio * producto.cantidad);
        const clone=templateProductos.cloneNode(true);
        fragment.appendChild(clone);
    });
    // console.log(fragment)
    cajaProductos.appendChild(fragment);
};








