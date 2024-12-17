fetch('./continentes.json')
    //La respuesta que obtenemos la convierte en JSON -->
    .then(response => response.json())
    .then(datos => {
        // Seleccionar todos los divs con la clase "continente"
        const divsContinentes = document.querySelectorAll('.continente');

        // Iterar sobre los continentes y llenar cada div
        datos.continentes.forEach((continente, index) => {
            if (divsContinentes[index]) {
                divsContinentes[index].innerHTML = `
        <img class="image-opacity" src="${continente.imagen}" alt="${continente.nombre}" style="width: 100%; height: 250px; object-fit:cover">
        <div class="contain-component">
        <section class="container-titulo-component">
          <h2 class="titulo">${continente.nombre}</h2>
          </section>
          <section class="contain-text">
          <p>${continente.definicion}</p>
          </section>
          </div>
          <div class="contain-cm-button">
          <button class="button-cm" data-index="${index}">Consulta más</button>
          </div>
        `;
            }
        });

        // JavaScript para la creacion del popup -->
        const botones = document.querySelectorAll('.button-cm');
        botones.forEach(boton => {
            boton.addEventListener('click', () => {
                const index = boton.getAttribute('data-index');
                mostrarPopup(datos.continentes[index]);
            });
        });
    })

    .catch(error => console.error('Error cargando JSON:', error));

const popupOverlay = document.getElementById('popup-overlay');
const popupContent = document.getElementById('popup-info');
const closePopup = document.getElementById('close-popup');

function mostrarPopup(continente) {
    popupContent.innerHTML = `
        <h2>${continente.nombre}</h2>
        <p><strong>Superficie:</strong> ${continente.superficie_km2.toLocaleString()} km²</p>
        <p><strong>Población:</strong> ${continente.poblacion.toLocaleString()}</p>
        <p><strong>Número de países:</strong> ${continente.numero_paises}</p>
        <p><strong>Idiomas principales:</strong> ${continente.idiomas.join(', ')}</p>
        <p><strong>Características:</strong></p>
        // Base -->
        <img class="style-image-second" src=${continente.imagen} alt=${continente.nombre}>;
        <ul>
            ${continente.caracteristicas.map(c => `<li>${c}</li>`).join('')}
        </ul>
    `;
    popupOverlay.style.display = 'flex';
}

closePopup.addEventListener('click', () => {
    popupOverlay.style.display = 'none';
});

popupOverlay.addEventListener('click', (e) => {
    if (e.target === popupOverlay) {
        popupOverlay.style.display = 'none';
    }
});
