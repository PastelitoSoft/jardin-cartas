import { nombrarPlanta, disableButton, restartAnimation, showOutput, hideOutput, finalizar, enableButton } from "./scripts.js";


export let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]


const imagen = document.getElementById('img-planta');
const output = document.getElementById('nombre-planta');
const sound = document.getElementById('audio');
const btn_sound = document.getElementById('btn-sound');
const btn_comenzar = document.getElementById('boton-siguiente');
const btn_reinicio = document.getElementById('boton-reinicio');
const btn_mostrar = document.getElementById('boton-mostrar');
const img_btn_com = document.getElementById('img-btn-com');


window.onload = () => {
    document.body.scrollIntoView({ behavior: 'smooth', block: 'end' });
    setTimeout(() => {
        document.body.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 300);
};


btn_comenzar.addEventListener('click', () =>{

    if (numbers.length > 0) {
        btn_sound.play();
        img_btn_com.src = "./res/img/btn-siguiente.png";

        const randomIndex = Math.floor(Math.random() * numbers.length);
        const selectedNumber = numbers.splice(randomIndex, 1)[0];

        disableButton(btn_comenzar);
        disableButton(btn_mostrar);
        disableButton(btn_reinicio);

        restartAnimation(imagen, 'aplastarYExpandir');
        imagen.src = `./res/img/${selectedNumber}.jpg`;
        sound.play();

        nombrarPlanta(selectedNumber, output)
        showOutput(output, 'flip-fade-in', 1000);
        hideOutput(output, 'flip-fade-out', 11500, 1000, () => {
           
            enableButton(btn_comenzar);
            enableButton(btn_mostrar);
            enableButton(btn_reinicio);
        });

        disableButton(btn_comenzar);
        disableButton(btn_mostrar);
        btn_reinicio.addEventListener('click', ()=>{
            location.reload();
        })

        btn_mostrar.addEventListener('click',()=> {
            btn_sound.play();
            disableButton(btn_comenzar);
            disableButton(btn_mostrar);
            disableButton(btn_reinicio);
            nombrarPlanta(selectedNumber, output);
            showOutput(output, 'flip-fade-in', 1000);
            hideOutput(output, 'flip-fade-out', 11500, 1000, () => 
                {
                    enableButton(btn_comenzar);
                    enableButton(btn_mostrar);
                    enableButton(btn_reinicio);
        
                })});
        

    } else {
        finalizar(imagen);
        disableButton(btn_comenzar);
        disableButton(btn_mostrar);
        btn_reinicio.addEventListener('click', ()=>{
            location.reload();
        })
    }
});

