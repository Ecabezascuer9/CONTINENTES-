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
        <img class="image-opacity" src="${continente.imagen}" alt="${continente.nombre}" style="width: 100%; height: 250px; object-fit:cover;">
        <div class="contain-component">
        <section class="container-titulo-component">
          <h2 class="titulo">${continente.nombre}</h2>
          </section>
          <section class="contain-text">
          <p>${continente.definicion}</p>
          </section>
          </div>
          <div class="contain-cm-button">
          <button class="button-cm">Consulta más</button>
          </div>
        `;
            }
        });
    })
    .catch(error => console.error('Error cargando JSON:', error));


// Información que a futuro utilizaremos para mapear datos -->

//   <p><strong>Superficie:</strong> ${continente.superficie_km2.toLocaleString()} km²</p>
//           <p><strong>Población:</strong> ${continente.poblacion.toLocaleString()}</p>
//           <p><strong>Número de países:</strong> ${continente.numero_paises}</p>
//           <p><strong>Idiomas principales:</strong> ${continente.idiomas.join(', ')}</p>
//           <p><strong>Características:</strong></p>
//           <ul>
//             ${continente.caracteristicas.map(c => `<li>${c}</li>`).join('')}
//           </ul>
