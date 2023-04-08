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
/*************main ***************/
/************capurando elementos *********/
const nombre=document.getElementById("inputNombre");
const apellido=document.getElementById("inputApellido");
const email=document.getElementById("inputEmail");
const password=document.getElementById("inputPassword");
const formulario=document.querySelector(".formulario");
const mensajeError=document.querySelector("p");


formulario.addEventListener('submit',(e)=>{
    e.preventDefault();
    validarDatos();
    // localStorage.setItem('usuarios',JSON.stringify(usuarios));
    if(usuarios.length > 0){
        let config = {
            method: "POST",
            body: JSON.stringify(usuarios[0]),
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
            }

        }
        fetch("http://localhost:5000/api/usuarios", config)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
    }
});


let usuarios=[];
let campoTexto=/^[A-Z+ " "]+$/i;
let validacionEmail=/^\w+([.-_+]?\w+)@\w+([.-]?\w+)(.\w{2,10})+$/;

function validarDatos(){
    if (validacionEmail.test(email.value) && password.value.length>=5 && password.value.length<16&&campoTexto.test(nombre.value) && campoTexto.test(apellido.value)){
        usuarios.push({nombre:nombre.value,apellido:apellido.value,email: email.value, password: password.value});
        formulario.reset();
        mensajeError.classList.remove("errores");          
    }else{
        mensajeError.classList.add("errores");
        mensajeError.innerText="Algunos de tus datos son incorrectos";
    }
}










/************footer *************/
