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

const main=document.querySelector("main");

const fragment = document.createDocumentFragment();


let productoCarrito=localStorage.getItem("carrito");

productoCarrito=JSON.parse(productoCarrito);
console.log(productoCarrito);



document.addEventListener("DOMContentLoaded", () => {
    cargarTemplateProductos();
    cargarTemplateFooter();

});

main.addEventListener("click", (event)=> {
    if(event.target.classList.contains("agregar")){
        let sumadorCantidad= productoCarrito[event.target.id].cantidad++;
        const numProductos=document.getElementById("Cantidad")
        numProductos.textContent= sumadorCantidad;
        cargarTemplateProductos();
    }
    if(event.target.classList.contains("quitar")){
        if (productoCarrito[event.target.id].cantidad==1){
            delete productoCarrito[event.target.id];
            cargarTemplateProductos();
        }else{
            let restadorCantidad=productoCarrito[event.target.id].cantidad--; 
            const numProductos=document.getElementById("Cantidad");
            numProductos.textContent=restadorCantidad;
            cargarTemplateProductos();
        }
        
        let totalProductos = 0;
        Object.values(productoCarrito).forEach(producto => {
            totalProductos += producto.cantidad;
            templateFooter.querySelectorAll("span")[0].textContent = totalProductos;
            cargarTemplateFooter();
        });
        console.log(Object.values(productoCarrito).length);
    }
    if(event.target.classList.contains("vaciar-carrito")){
        //console.log("vacio todo")
        
    }
})




//**********Capturamos el objeto con los productos del HTML productos****/


// console.log(productoCarrito);



function cargarTemplateProductos(){
    if(productoCarrito !== null){
        cajaProductos.innerHTML= "";
        Object.values(productoCarrito).forEach(producto=>{
            templateProductos.getElementById("Producto").textContent=producto.titulo;
            templateProductos.getElementById("Cantidad").innerHTML=`<td id="Cantidad">${producto.cantidad}
                                                                        <button id="${producto.id}" class="agregar">+</button>
                                                                        <button id="${producto.id}" class="quitar botonQuitar">-</button>
                                                                        </td>`
            templateProductos.getElementById("Total").innerHTML=`<td id="Total"><span>$ </span>${producto.precio*producto.cantidad}
                                                                    </td>`
            const clone=templateProductos.cloneNode(true);
            fragment.appendChild(clone);
        });
    cajaProductos.appendChild(fragment);
    };
};


function cargarTemplateFooter(){
    cajaFooter.innerHTML= "";
    if(Object.keys(productoCarrito).length === 0){
        cajaFooter.innerHTML=`<th>Carrito Vacio... Comienza a comprar!</th>`;
    }else{
        // cajaFooter.innerHTML= "";
        let cantidadProductos = 0;
        let precioTotal = 0;
        Object.values(productoCarrito).forEach(producto => {
            cantidadProductos += producto.cantidad;
            precioTotal += producto.precio*producto.cantidad;
        });
        templateFooter.querySelectorAll("span")[0].textContent=cantidadProductos;
        templateFooter.querySelectorAll("span")[1].textContent=precioTotal;
        const clone=templateFooter.cloneNode(true);
        fragment.appendChild(clone);
        cajaFooter.appendChild(fragment);
    };
};















