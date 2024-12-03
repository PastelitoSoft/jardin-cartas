
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
        output.innerHTML = `<p id="estilo-nombre" class="estilo-nombre">higuera</p>`;
    } else if (selectedNumber === 1) {
        output.innerHTML = `<p id="estilo-nombre" class="estilo-nombre">achira</p>`;
    } else if (selectedNumber === 2) {
        output.innerHTML = `<p id="estilo-nombre" class="estilo-nombre">cabello de ángel</p>`;
    } else if (selectedNumber === 3) {
        output.innerHTML = `<p id="estilo-nombre" class="estilo-nombre">ceibo</p>`;
    } else if (selectedNumber === 4) {
        output.innerHTML = `<p id="estilo-nombre" class="estilo-nombre">cerraja</p>`;
    } else if (selectedNumber === 5) {
        output.innerHTML = `<p id="estilo-nombre" class="estilo-nombre">cola de caballo</p>`;
    } else if (selectedNumber === 6) {
        output.innerHTML = `<p id="estilo-nombre" class="estilo-nombre">dama de noche</p>`;
    } else if (selectedNumber === 7) {
        output.innerHTML = `<p id="estilo-nombre" class="estilo-nombre">girasol</p>`;
    } else if (selectedNumber === 8) {
        output.innerHTML = `<p id="estilo-nombre" class="estilo-nombre">guindo</p>`;
    } else if (selectedNumber === 9) {
        output.innerHTML = `<p id="estilo-nombre" class="estilo-nombre">guisante</p>`;
    } else if (selectedNumber === 10) {
        output.innerHTML = `<p id="estilo-nombre" class="estilo-nombre">lagunilla</p>`;
    } else if (selectedNumber === 11) {
        output.innerHTML = `<p id="estilo-nombre" class="estilo-nombre">limonero</p>`;
    } else if (selectedNumber === 12) {
        output.innerHTML = `<p id="estilo-nombre" class="estilo-nombre">malva</p>`;
    } else if (selectedNumber === 13) {
        output.innerHTML = `<p id="estilo-nombre" class="estilo-nombre">mburucuyá</p>`;
    } else if (selectedNumber === 14) {
        output.innerHTML = `<p id="estilo-nombre" class="estilo-nombre">polillera</p>`;
    } else if (selectedNumber === 15) {
        output.innerHTML = `<p id="estilo-nombre" class="estilo-nombre">repollito de agua</p>`;
    } else if (selectedNumber === 16) {
        output.innerHTML = `<p id="estilo-nombre" class="estilo-nombre">rosal</p>`;
    } else if (selectedNumber === 17) {
        output.innerHTML = `<p id="estilo-nombre" class="estilo-nombre">totora</p>`;
    } else if (selectedNumber === 18) {
        output.innerHTML = `<p id="estilo-nombre" class="estilo-nombre">yuca</p>`;
    } else if (selectedNumber === 19) {
        output.innerHTML = `<p id="estilo-nombre" class="estilo-nombre">vinagrillo rosado</p>`;
    }
}




