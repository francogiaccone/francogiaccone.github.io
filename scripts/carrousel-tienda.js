let index = 0;

const portadas = ['../img/main_ruge.webp', '../img/main_ruge2.webp', '../img/main_ruge3.webp'];

const fondo = document.querySelector("#tienda-section-1");
const botonIzq = document.querySelector(".btnIzq");
const botonDer = document.querySelector(".btnDer");

botonIzq.addEventListener("click", () => {
    if (index == 0) {
        index = portadas.length-1;
    } else {
        index--;
    }

    let portadaActual = portadas[index];

    fondo.style.backgroundImage = "url(" + portadaActual + ")";

});

botonDer.addEventListener("click", () => {
    if (index == portadas.length-1) {
        index = 0;
    } else {
        index++;
    }

    let portadaActual = portadas[index];

    fondo.style.backgroundImage = "url(" + portadaActual + ")";
});