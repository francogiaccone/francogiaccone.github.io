const boton = document.querySelector(".girar");
const carnet_frente = document.querySelector(".carnet-socio");
const carnet_dorso = document.querySelector(".carnet-dorso");

let estado = true;

boton.addEventListener("click", () => {
    if (estado) {
        carnet_frente.style.display = "none";
        carnet_dorso.style.display = "flex";
        estado = false;
    } else {
        carnet_dorso.style.display = "none";
        carnet_frente.style.display = "block";
        estado = true;
    }
});