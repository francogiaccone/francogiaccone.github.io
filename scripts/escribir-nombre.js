const input = document.querySelector(".escribir-nombre");
const texto = document.querySelector(".nombre-carnet");

input.addEventListener("input", () => {
    if (input.value.trim() == "") {
        texto.textContent = "SIN NOMBRE";
        return;
    }
    
    texto.textContent = input.value.trim().toUpperCase();
});