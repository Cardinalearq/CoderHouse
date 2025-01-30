const proyectos = [
    {
        img: '../imagenes/portadas-viviendas/vivienda-1.jpg',
        alt: 'vivienda-san-isidro',
        title: 'Vivienda San Isidro',
        link: '#',
        m2: '250 m²',  
        estilo: 'Moderno',
        estado: 'Terminado'
    },
    {
        img: '../imagenes/portadas-viviendas/vivienda-2.jpg',
        alt: 'vivienda-cañuelas-golf',
        title: 'Vivienda Cañuelas Golf',
        link: '#',
        m2: '350 m²',
        estilo: 'Minimalista',
        estado: 'En construcción'
    },
    {
        img: '../imagenes/portadas-viviendas/vivienda-3.jpg',
        alt: 'vivienda-terralagos',
        title: 'Vivienda Terralagos',
        link: '#',
        m2: '300 m²',
        estilo: 'Rústico',
        estado: 'Terminado'
    },
    {
        img: '../imagenes/portadas-viviendas/vivienda-4.jpg',
        alt: 'vivienda-cardales',
        title: 'Vivienda Cardales',
        link: '#',
        m2: '400 m²',
        estilo: 'Contemporáneo',
        estado: 'En construcción'
    },
    {
        img: '../imagenes/portadas-viviendas/vivienda-5.jpg',
        alt: 'vivienda-nordelta',
        title: 'Vivienda Nordelta',
        link: '#',
        m2: '280 m²',
        estilo: 'Moderno',
        estado: 'Terminado'
    },
    {
        img: '../imagenes/portadas-viviendas/vivienda-6.jpg',
        alt: 'vivienda-haras-del-sur',
        title: 'Vivienda Haras del Sur',
        link: '#',
        m2: '320 m²',
        estilo: 'Minimalista',
        estado: 'Terminado'
    }
];


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
