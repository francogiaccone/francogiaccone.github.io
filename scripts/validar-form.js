const btnEnviar = document.querySelector(".btnEnviar");
const btnLimpiar = document.querySelector(".btnReset");
const form = document.querySelector("#formulario");
const errores_div = document.querySelector(".errores");
const botones_div = document.querySelector(".btns");

let errores = [];

const validar = () => {

    borrarErrores();

    let form_nombre = document.querySelector("#form_nombre");
    let nombre = form_nombre.value.trim();

    let form_email = document.querySelector("#form_email");
    let email = form_email.value.trim();
    let validacionMail = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;

    let form_txt = document.querySelector("#form_txt");
    let txt = form_txt.value.trim();

    if (nombre == "") {
        
        errores.push("Nombre: campo vacio.");

    }

    if (nombre.length > 30) {

        errores.push("Nombre: Excedió la cantidad max. de caracteres");

    }

    
    if (email == "") {

        errores.push("Email: campo vacio.");

    } else if (!validacionMail.test(email)) {

        errores.push("Email: No cumple el formato de email.");

    }

    if (txt === "") {

        errores.push("Consulta: campo vacio.");

    }

    if (txt.length > 500) {

        errores.push("Consulta: Excedió la cantidad max. de caracteres");

    }

    if (errores.length > 0) {

        for (let i = 0; i < errores.length; i++) {
            
            let listaError = document.createElement("li");
            listaError.textContent = errores[i];
            listaError.style.listStyleType = "none";
            listaError.style.color = "red";
            listaError.style.textAlign = "center";

            errores_div.appendChild(listaError);
        }

        return false;
    }

    botones_div.removeChild(btnEnviar);
    botones_div.removeChild(btnLimpiar);
    form.removeChild(errores_div);

    const parrafo = document.createElement("p");
    parrafo.textContent = "Gracias por enviar el formulario. Pronto estaras recibiendo novedades por el correo " + email;
    parrafo.style.textAlign = "center";
    parrafo.style.color = "green";
    parrafo.style.marginTop = "-10px";
    form.appendChild(parrafo);

    form_nombre.disabled = true;
    form_email.disabled = true;
    form_txt.disabled = true;

    return false;
};

let borrarErrores = () => {
    while (errores.length > 0) {
        
        errores.pop();

        errores_div.removeChild(errores_div.lastChild);
    }
};

btnLimpiar.addEventListener("click", () => {
    borrarErrores();
});