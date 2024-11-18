import { expresiones } from "../helpers/expresiones.js";

export function validarRegistro(nombre,email,telefono,password){
    if(
        expresiones.nombre.test(nombre)&&
        expresiones.email.test(email)&&
        expresiones.telefono.test(telefono)&&
        expresiones.password.test(password)
    ){
        // Puedes almacenar los datos en un array o simular una base de datos aquí.
        return true;
    }
    return true;
}

export function validarLogin(usuario, password) {
    // Simulación: valida con datos fijos.
    const usuarioValido = "admin";
    const passwordValida = "123456";
  
    return usuario === usuarioValido && password === passwordValida;
  }