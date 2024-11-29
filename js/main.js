import { nombrarPlanta, disableButton, restartAnimation, showOutput, hideOutput, finalizar, enableButton, mostrarDeNuevo } from "./scripts.js";


export let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]


const imagen = document.getElementById('img-planta');
const output = document.getElementById('nombre-planta');
const sound = document.getElementById('audio');
const btn_comenzar = document.getElementById('boton-siguiente');
const btn_reinicio = document.getElementById('boton-reinicio');
const btn_mostrar = document.getElementById('boton-mostrar');
const img_btn_com = document.getElementById('img-btn-com');


// Función principal que se ejecuta al hacer clic
function handleClick(btn_comenzar, numbers, imagen, output, sound, img_btn_com) {
    if (numbers.length > 0) {

        btn_mostrar.addEventListener('click', () => {
            nombrarPlanta(selectedNumber, output);
            showOutput(output, 'flip-fade-in', 1500);
            hideOutput(output, 'flip-fade-out', 11500, 1500, () => enableButton(btn_comenzar));
        });

        img_btn_com.src = "./res/img/btn-siguiente.png"
        disableButton(btn_comenzar); // Deshabilitar el botón

        const randomIndex = Math.floor(Math.random() * numbers.length);
        const selectedNumber = numbers.splice(randomIndex, 1)[0];

        // Reiniciar la animación de aplastar y expandir
        restartAnimation(imagen, 'aplastarYExpandir');

        // Cambiar la imagen
        imagen.src = `./res/img/${selectedNumber}.jpg`;

        // Reproducir el sonido
        sound.play();

        // Nombrar la planta
        nombrarPlanta(selectedNumber, output);

        // Mostrar el output con flip-fade-in después de 1.5 segundos
        showOutput(output, 'flip-fade-in', 1500);

        // Ocultar el output con flip-fade-out después de 10 segundos y habilitar el botón
        hideOutput(output, 'flip-fade-out', 11500, 1500, () => enableButton(btn_comenzar));
    } else {
        finalizar(imagen);
        btn_comenzar.disabled = true;
        btn_mostrar.disabled = true;
    }
}

btn_reinicio.addEventListener('click', () => {
    location.reload();
});

window.onload = () => {
    document.getElementById('framework').scrollIntoView();
};



// Asignar evento al botón
btn_comenzar.addEventListener('click', () => handleClick(btn_comenzar, numbers, imagen, output, sound, img_btn_com));



