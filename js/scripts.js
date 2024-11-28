
// Función para deshabilitar el botón
export function disableButton(button) {
    button.disabled = true;
}

// Función para habilitar el botón
export function enableButton(button) {
    button.disabled = false;
}

// Función para reiniciar la animación de aplastar y expandir
export function restartAnimation(element, animationClass) {
    element.classList.remove(animationClass); // Eliminar la clase
    void element.offsetWidth; // Forzar un reflow del DOM
    element.classList.add(animationClass); // Volver a agregar la clase
}

// Función para mostrar el output con la animación
export function showOutput(output, animationIn, delay) {
    setTimeout(() => {
        output.classList.remove('flip-fade-out'); // Asegurarse de que no tenga la clase de fade-out
        output.style.display = 'block'; // Asegurar que esté visible
        output.classList.add(animationIn); // Agregar la clase de flip-fade-in
    }, delay);
}

// Función para ocultar el output con la animación
export function hideOutput(output, animationOut, delay, finalDelay, callback) {
    setTimeout(() => {
        output.classList.remove('flip-fade-in'); // Eliminar la clase de fade-in
        output.classList.add(animationOut); // Agregar la clase de fade-out

        // Ocultar completamente después de la animación
        setTimeout(() => {
            output.style.display = 'none'; // Ocultar después de que termine la animación
            if (callback) callback(); // Ejecutar la función callback
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
        output.innerHTML = `<p id="estilo-nombre" class="estilo-nombre">YUCA</p>`;
    } else if (selectedNumber === 18) {
        output.innerHTML = `<p id="estilo-nombre" class="estilo-nombre">VINAGRILLO ROSADO</p>`;
    } else if (selectedNumber === 19) {
        output.innerHTML = `<p id="estilo-nombre" class="estilo-nombre">DAMA DE NOCHE</p>`;
    }
}

export function mostrarDeNuevo(selectedNumber, output, button) {
    nombrarPlanta(selectedNumber, output);
    showOutput(output, 'flip-fade-in', 1500);
    hideOutput(output, 'flip-fade-out', 2500, 1500, () => enableButton(button));
}


