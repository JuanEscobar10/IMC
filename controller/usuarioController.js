import { validarRegistro, ValidarLogin } from "../models/usuarioModel.js";

document.addEventListener ("DOMContentLoaded", () =>{
    const btnLogin = document.getElementById("btn-login");
    const btnRegister = document. getElementById ("btn-register");
    const formLogin = document.getElementById ("form-login");
    const formRegister = document.getElementById ("for-register");
});

//Alternar entre formularios
btnLogin.addEventListener("click", () => {
    formLogin.classlist.remove("hidden");
    formRegister.classlist.add("hidden");
});

btnRegister.addEventListener("click", () => {
    formRegister.classlist.remove("hidden");
    formLogin.classlist.add("hidden");
});


//Validar login

formLogin.addEventListener("sudmit", (e) => {
    e. preventDefault();
    const usuario = document.getElementById("login-user").Value;
    const password = document.getElementById("login-pass").Value;

    if(validarRegistro(usuario, password)){
        alert("Inicio de sesión exitoso");
        window.location.href = "./imc.html";
    }else{
        alert("Usuario o contraseña incorrectos")
    }
});

 // Validar registro
formRegister.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("register-name").value;
    const email = document.getElementById("register-email").value;
    const telefono = document.getElementById("register-phone").value;
    const password = document.getElementById("register-pass").value;

    if (validarRegistro(nombre, email, telefono, password)) {
      alert("Registro exitoso. Ahora puedes iniciar sesión.");
      formRegister.reset();
    } else {
      alert("Por favor, verifica los datos ingresados.");
    }
});

