const card = [
    {
        imagenes: [
        '../imagenes/mobiliario/mesa_de_luz/1.png',
        '../imagenes/mobiliario/mesa_de_luz/2.png',
        '../imagenes/mobiliario/mesa_de_luz/3.png',
        '../imagenes/mobiliario/mesa_de_luz/4.png',
        '../imagenes/mobiliario/mesa_de_luz/5.jpg',
        '../imagenes/mobiliario/mesa_de_luz/6.jpg'
        ],
        titulo: 'Mesa de Luz',
        linea: 'Calabria',
        modelo: 'Cosenza',
        alto: '50',
        ancho: '45',
        profundidad: '40',
        materialidad: 'Melamina sobre MDF',
        cantos: 'Cantos ABS 45mm',
        herrajes: 'Correderas telescopicas',
        colores: 'Blanco o Gris grafito, con Olmo Finlandes',
    },
    {
        imagenes: [
        '../imagenes/mobiliario/rack_de_tv/1.png',
        '../imagenes/mobiliario/rack_de_tv/2.png',
        '../imagenes/mobiliario/rack_de_tv/3.png',
        '../imagenes/mobiliario/rack_de_tv/4.png',
        '../imagenes/mobiliario/rack_de_tv/5.jpg',
        '../imagenes/mobiliario/rack_de_tv/6.jpg'
        ],
        titulo: 'Rack de TV',
        linea: 'Calabria',
        modelo: 'Cittanova',
        alto: '50',
        ancho: '150',
        profundidad: '40',
        materialidad: 'Melamina sobre MDF',
        cantos: 'Cantos ABS 45mm',
        herrajes: 'Bisagras de cazoleta - Correderas telescopicas',
        colores: 'Blanco o Gris grafito, con Olmo Finlandes',
    },
    {
        imagenes: [
        '../imagenes/mobiliario/comoda/1.png',
        '../imagenes/mobiliario/comoda/2.png',
        '../imagenes/mobiliario/comoda/3.png',
        '../imagenes/mobiliario/comoda/4.png',
        '../imagenes/mobiliario/comoda/5.jpg',
        '../imagenes/mobiliario/comoda/6.jpg'
        ],
        titulo: 'Comoda',
        linea: 'Calabria',
        modelo: 'Scalea',
        alto: '91',
        ancho: '130',
        profundidad: '40',
        materialidad: 'Melamina sobre MDF',
        cantos: 'Cantos ABS 45mm',
        herrajes: 'Correderas telescopicas',
        colores: 'Blanco o Gris grafito, con Olmo Finlandes',
    },
    {
        imagenes: [
        '../imagenes/mobiliario/repisa/1.png',
        '../imagenes/mobiliario/repisa/2.png',
        '../imagenes/mobiliario/repisa/3.png',
        '../imagenes/mobiliario/repisa/4.png',
        '../imagenes/mobiliario/repisa/5.jpg',
        '../imagenes/mobiliario/repisa/6.jpg'
        ],
        titulo: 'Repisa',
        linea: 'Calabria',
        modelo: 'Cetraro',
        alto: '91',
        ancho: '60',
        profundidad: '20',
        materialidad: 'Melamina sobre MDF',
        cantos: 'Cantos ABS 45mm',
        herrajes: 'Sin herrajes',
        colores: 'Blanco o Gris grafito, con Olmo Finlandes',
    },
    {
        imagenes: [
        '../imagenes/mobiliario/vajillero/1.png',
        '../imagenes/mobiliario/vajillero/2.png',
        '../imagenes/mobiliario/vajillero/3.png',
        '../imagenes/mobiliario/vajillero/4.png',
        '../imagenes/mobiliario/vajillero/5.jpg',
        '../imagenes/mobiliario/vajillero/6.jpg'
        ],
        titulo: 'Vajillero',
        linea: 'Calabria',
        modelo: 'Luzzi',
        alto: '91',
        ancho: '150',
        profundidad: '40',
        materialidad: 'Melamina sobre MDF',
        cantos: 'Cantos ABS 45mm',
        herrajes: 'Bisagras de cazoleta - Correderas telescopicas',
        colores: 'Blanco o Gris grafito, con Olmo Finlandes',
    },
    {
        imagenes: [
        '../imagenes/mobiliario/respaldo_de_cama/1.png',
        '../imagenes/mobiliario/respaldo_de_cama/2.png',
        '../imagenes/mobiliario/respaldo_de_cama/3.png',
        '../imagenes/mobiliario/respaldo_de_cama/4.png',
        '../imagenes/mobiliario/respaldo_de_cama/5.jpg',
        '../imagenes/mobiliario/respaldo_de_cama/6.jpg'
        ],
        titulo: 'Respaldo de cama',
        linea: 'Calabria',
        modelo: 'Corigliano',
        alto: '80',
        ancho: '240/260/300',
        profundidad: '40',
        materialidad: 'Melamina sobre MDF',
        cantos: 'Cantos ABS 45mm',
        herrajes: 'Correderas telescopicas',
        colores: 'Blanco o Gris grafito, con Olmo Finlandes',
    }
]

const containerCards = document.getElementById('id_container_productos');

card.forEach(cards => {
    const containerCard = document.createElement('div');
    containerCard.classList.add('card')
    
    const divFront = document.createElement('div');
    divFront.classList.add('front');
    
    divFront.innerHTML = `
                <div class="containercajas">
                    <div class="containercaja">
                        <div class="cajaproducto">
                            <div class="fotosproducto">
                                <div class="swiffy-slider">
                                    <ul class="slider-container">
                                        ${cards.imagenes.map(img => `<li><img src="${img}" style="width: 100%; height: auto;"></li>`).join('')}
                                    </ul>
                                    <button type="button" class="slider-nav"></button>
                                    <button type="button" class="slider-nav slider-nav-next"></button>
                                    <div class="slider-indicators">
                                        <button class="active"></button>
                                        <button></button>
                                        <button></button>
                                        <button></button>
                                        <button></button>
                                        <button></button>
                                        <button></button>
                                    </div>
                                </div>
                            </div>
                            <div class="cajatextos">
                                <div class="tituloproducto">${cards.titulo}</div>
                                <div class="modeloproducto"><b>Linea: </b>${cards.linea}<b> - Modelo: </b>${cards.modelo}</div>
                                <div class="container-botones">
                                    <div class="boton-izquierdo">
                                        <a href="contacto.html"><div class="cajaboton"><button class="botonproducto">Consultar</button></div></a>
                                        <a href="#"><div class="cajaboton"><button class="botonproducto ver-detalle-producto">Ver detalle</button></div></a>
                                    </div>
                                    <div class="boton-derecho">
                                        <a href="#" target="_blank" rel="noopener noreferrer"><div class="cajaboton"><button class="botonproducto">Comprar</button></div></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    `;

    const divBack = document.createElement('div');
    divBack.classList.add('back');
    
    divBack.innerHTML = `
                <div class="containercajas">
                    <div class="containercaja">
                        <div class="cajaproducto">
                            <div class="cajatextos">
                                <div class="precio">$ 80.000</div>
                                <button class="boton-cerrar">✖️​</button>
                                <div class="tituloproducto">${cards.titulo}</div>
                                <div class="modeloproducto"><b>Linea: </b>${cards.linea}<b> - Modelo: </b>${cards.modelo}</div>
                                <div class="descripcionproducto">Medidas:</div>
                                <div class="cajadescripcion">
                                    <div class="descripcionproducto">
                                        <div class="especificacion1"><b>Alto:</b></div>
                                        <div class="especificacion1"><b>Ancho:</b></div>
                                        <div class="especificacion1"><b>Profundidad:</b></div>
                                    </div>
                                    <div class="medidasproducto">
                                        <div class="especificacion2">${cards.alto} cm</div>
                                        <div class="especificacion2">${cards.ancho} cm</div>
                                        <div class="especificacion2">${cards.profundidad} cm</div>
                                    </div>
                                </div>
                                <div class="descripcionproducto">Especificaciones:</div>
                                <div class="cajadescripcion">
                                    <div class="descripcionproducto">
                                        <div class="especificacion1"><b>Materialidad:</b></div>
                                    </div>
                                    <div class="medidasproducto">
                                        <div class="especificacion2">${cards.materialidad}</div>
                                    </div>
                                </div>
                                <div class="cajadescripcion">
                                    <div class="descripcionproducto">
                                        <div class="especificacion1"><b>Cantos:</b></div>
                                    </div>
                                    <div class="medidasproducto">
                                        <div class="especificacion2">${cards.cantos}</div>
                                    </div>
                                </div>
                                <div class="cajadescripcion">
                                    <div class="descripcionproducto">
                                        <div class="especificacion1"><b>Herrajes:</b></div>
                                    </div>
                                    <div class="medidasproducto">
                                        <div class="especificacion2">${cards.herrajes}</div>
                                    </div>
                                </div>
                                <div class="cajadescripcion">
                                    <div class="descripcionproducto">
                                        <div class="especificacion1"><b>Colores:</b></div>
                                    </div>
                                    <div class="medidasproducto">
                                        <div class="especificacion2">${cards.colores}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    `;

    containerCard.appendChild(divFront);
    containerCard.appendChild(divBack);
    containerCards.appendChild(containerCard);

    
    let setEventosVisualizacion = function () {
        function onVerDetalle(e) {
            e.preventDefault();
            const card = e.target.closest('.card');
            card.classList.add('is-active');
        }
    
        function onCerrarDetalle(e) {
            e.preventDefault();
            const card = e.target.closest('.card');
            card.classList.remove('is-active');
        }
    
        const $verDetalleButtons = document.querySelectorAll('.ver-detalle-producto');
        const $cerrarDetalleButtons = document.querySelectorAll('.boton-cerrar');
    
        $verDetalleButtons.forEach($btn => $btn.addEventListener('click', onVerDetalle));
        $cerrarDetalleButtons.forEach($btn => $btn.addEventListener('click', onCerrarDetalle));
        }

        setEventosVisualizacion();


});


