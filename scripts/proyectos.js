fetch('../json/obras.json')
    .then(response => response.json())  
    .then(proyectos => {
        const container = document.getElementById('proyectos-container');


        proyectos.forEach(proyecto => {
            const proyectoDiv = document.createElement('div');
            proyectoDiv.classList.add('cajas-portadas');
            
            proyectoDiv.innerHTML = `
                <img src="${proyecto.img}" alt="${proyecto.alt}">
                <h5 class="titulos-portadas">${proyecto.title}</h5>
                <button class="botones-ver-mas">Ver más</button>
                <div class="info-adicional" style="display: none;">
                    <p><strong>M2 de la obra:</strong> ${proyecto.m2}</p>
                    <p><strong>Estilo:</strong> ${proyecto.estilo}</p>
                    <p><strong>Estado:</strong> ${proyecto.estado}</p>
                </div>
            `;
            
        
            const botonVerMas = proyectoDiv.querySelector('.botones-ver-mas');
            const infoAdicional = proyectoDiv.querySelector('.info-adicional');
            
            botonVerMas.addEventListener('click', () => {
                infoAdicional.style.display = (infoAdicional.style.display === 'none' || infoAdicional.style.display === '') ? 'block' : 'none';
            });
            
            container.appendChild(proyectoDiv);
        });
    })
    .catch(error => {
        console.error('Error al cargar el archivo JSON:', error);
    });



