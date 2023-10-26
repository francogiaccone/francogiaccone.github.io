let estado = true;

const sponsors = ['img/sponsor1.webp', 'img/sponsor2.webp', 'img/sponsor3.webp', 'img/sponsor4.webp', 'img/sponsor5.webp', 'img/sponsor6.webp'];

const btnIzq = document.querySelector(".btnIzquierdo");
const btnDer = document.querySelector(".btnDerecho");
const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const img3 = document.querySelector(".img3");

btnIzq.addEventListener("click", () => {
    if (estado) {
        img1.src = sponsors[3];
        img2.src = sponsors[4];
        img3.src = sponsors[5];
        estado = false;
    } else {
        img1.src = sponsors[0];
        img2.src = sponsors[1];
        img3.src = sponsors[2];
        estado = true;
    }

});

btnDer.addEventListener("click", () => {
    if (estado) {
        img1.src = sponsors[3];
        img2.src = sponsors[4];
        img3.src = sponsors[5];
        estado = false;
    } else {
        img1.src = sponsors[0];
        img2.src = sponsors[1];
        img3.src = sponsors[2];
        estado = true;
    }

});