/*************** header*************/



/*************main ***************/
/************capurando elementos *********/
let nombre=document.getElementById("inputNombre");
let apellido=document.getElementById("inputApellido");
let email=document.getElementById("inputEmail");
let password=document.getElementById("inputPassword");
let formulario=document.querySelector(".formulario");

let usuarios=[];
let campoTexto=/^[A-Z+ " "]+$/i;
let validacionEmail=/^\w+([.-_+]?\w+)@\w+([.-]?\w+)(.\w{2,10})+$/;

formulario.addEventListener('submit',(e)=>{
            e.preventDefault();
            validarDatos();
            
        localStorage.setItem('usuarios',JSON.stringify(usuarios));     
})
function validarDatos(){
     if (validacionEmail.test(email.value) && password.value.length>5 && password.value.length<16&&campoTexto.test(nombre.value) && campoTexto.test(apellido.value)){
              usuarios.push({nombre:nombre.value,apellido:apellido.value,correo: email.value, possword: password.value});        
     }
     
     
}










/************footer *************/
