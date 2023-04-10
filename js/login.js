/*************** header*************/

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
/*******************main ********************/
const correo=document.getElementById("inputEmail");
const contra=document.getElementById("inputPassword");
const mensajeError=document.querySelector("p");
const formulario=document.querySelector("form");

const boton=document.querySelector(".ingresar");


formulario.addEventListener('submit',function(e){
    e.preventDefault();
    let usuarioCargado=localStorage.getItem("usuarios");
    usuarioCargado=JSON.parse(usuarioCargado);
    console.log(usuarioCargado);
    validarUsuario(usuarioCargado);
})
function validarUsuario(usuarioCargado){
    Object.values(usuarioCargado).forEach(usuario=>{
    if (usuario.email===correo.value && usuario.password===contra.value){
        formulario.reset();
        location.replace("./index.html");
        console.log("registrado");
    }else{
        mensajeError.classList.add("errores");
        mensajeError.innerText="Algunos de tus datos son incorrectos";
    }
})
}
