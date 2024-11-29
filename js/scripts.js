
export function disableButton(button) {
    button.disabled = true;
}

export function enableButton(button) {
    button.disabled = false;
}

export function restartAnimation(element, animationClass) {
    element.classList.remove(animationClass);
    void element.offsetWidth;
    element.classList.add(animationClass);
}

export function showOutput(output, animationIn, delay) {
    setTimeout(() => {
        output.classList.remove('flip-fade-out');
        output.style.display = 'block';
        output.classList.add(animationIn);
    }, delay);
}

export function hideOutput(output, animationOut, delay, finalDelay, callback) {
    setTimeout(() => {
        output.classList.remove('flip-fade-in');
        output.classList.add(animationOut);

        setTimeout(() => {
            output.style.display = 'none';
            if (callback) callback();
        }, finalDelay);
    }, delay);
}

export function finalizar(imagen) {
    restartAnimation(imagen, 'aplastarYExpandir');
    imagen.src = "./res/img/img-fin.png";
}

export function nombrarPlanta(selectedNumber, output) {
    if (selectedNumber === 0) {
        output.innerHTML = `<p id="estilo-nombre" class="estilo-nombre">HIGUERA</p>`;
    } else if (selectedNumber === 1) {
        output.innerHTML = `<p id="estilo-nombre" class="estilo-nombre">ACHIRA</p>`;
    } else if (selectedNumber === 2) {
        output.innerHTML = `<p id="estilo-nombre" class="estilo-nombre">CABELLO DE ANGEL</p>`;
    } else if (selectedNumber === 3) {
        output.innerHTML = `<p id="estilo-nombre" class="estilo-nombre">CEIBO</p>`;
    } else if (selectedNumber === 4) {
        output.innerHTML = `<p id="estilo-nombre" class="estilo-nombre">CERRAJA</p>`;
    } else if (selectedNumber === 5) {
        output.innerHTML = `<p id="estilo-nombre" class="estilo-nombre">COLA DE CABALLO</p>`;
    } else if (selectedNumber === 6) {
        output.innerHTML = `<p id="estilo-nombre" class="estilo-nombre">DAMA DE NOCHE</p>`;
    } else if (selectedNumber === 7) {
        output.innerHTML = `<p id="estilo-nombre" class="estilo-nombre">GIRASOL</p>`;
    } else if (selectedNumber === 8) {
        output.innerHTML = `<p id="estilo-nombre" class="estilo-nombre">GUINDO</p>`;
    } else if (selectedNumber === 9) {
        output.innerHTML = `<p id="estilo-nombre" class="estilo-nombre">GUISANTES</p>`;
    } else if (selectedNumber === 10) {
        output.innerHTML = `<p id="estilo-nombre" class="estilo-nombre">LAGUNILLA</p>`;
    } else if (selectedNumber === 11) {
        output.innerHTML = `<p id="estilo-nombre" class="estilo-nombre">LIMONERO</p>`;
    } else if (selectedNumber === 12) {
        output.innerHTML = `<p id="estilo-nombre" class="estilo-nombre">MALVA</p>`;
    } else if (selectedNumber === 13) {
        output.innerHTML = `<p id="estilo-nombre" class="estilo-nombre">MBURUCUYÁ</p>`;
    } else if (selectedNumber === 14) {
        output.innerHTML = `<p id="estilo-nombre" class="estilo-nombre">POLILLERA</p>`;
    } else if (selectedNumber === 15) {
        output.innerHTML = `<p id="estilo-nombre" class="estilo-nombre">REPOLLITO DE AGUA</p>`;
    } else if (selectedNumber === 16) {
        output.innerHTML = `<p id="estilo-nombre" class="estilo-nombre">ROSAL</p>`;
    } else if (selectedNumber === 17) {
        output.innerHTML = `<p id="estilo-nombre" class="estilo-nombre">TOTORA</p>`;
    } else if (selectedNumber === 18) {
        output.innerHTML = `<p id="estilo-nombre" class="estilo-nombre">YUCA</p>`;
    } else if (selectedNumber === 19) {
        output.innerHTML = `<p id="estilo-nombre" class="estilo-nombre">VINAGRILLO ROSADO</p>`;
    }
}




