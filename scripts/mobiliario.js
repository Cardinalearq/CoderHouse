let productos = [];
fetch('../json/muebles.json')
.then(response => response.json()) 
.then(data => {
    productos = data;
    if (!localStorage.getItem("productos")) {
        localStorage.setItem("productos", JSON.stringify(productos));
    }
    createMuebles(productos);
})
.catch(error => console.error('Error al cargar el JSON:', error));

function createMuebles(data) {
    const card = data;
    const containerCards = document.getElementById('id_container_productos');

    card.forEach(cards => {
        const containerCard = document.createElement('div');
        containerCard.classList.add('card');
        
        const divFront = document.createElement('div');
        divFront.classList.add('front');
        
        divFront.innerHTML = `
            <div>
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
                                </div>
                            </div>
                        </div>
                        <div class="cajatextos">
                            <div class="tituloproducto"><b>${cards.titulo}</b></div>
                            <div class="modeloproducto">Linea: <b>${cards.linea}</b> - Modelo: <b>${cards.modelo}</b></div>
                            <div class="container-botones">
                                <div class="boton-izquierdo">
                                    <a href="contacto.html"><div class="cajaboton"><button class="botonproducto">Consultar</button></div></a>
                                    <a href="#"><div class="cajaboton"><button class="botonproducto ver-detalle-producto">Ver detalle</button></div></a>
                                </div>
                                <div class="boton-derecho">
                                    <div class="cajaboton"><button id="botonAgregarCarrito-${cards.id}" class="botonproducto">Comprar</button></div>
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
            <div>
                <div class="containercaja">
                    <div class="cajaproducto">
                        <div class="cajatextos">
                            <div class="precio">$${cards.precio.toLocaleString("es-AR")}</div>
                            <button class="boton-cerrar">✖️​</button>
                            <div class="tituloproducto"><b>${cards.titulo}</b></div>
                            <div class="modeloproducto">Linea: <b>${cards.linea}</b> - Modelo: <b>${cards.modelo}</b></div>
                            <div class="descripcionproducto"><b>Medidas</b>:</div>
                            <div class="cajadescripcion">
                                <div class="descripcionproducto">
                                    <div class="especificacion1">Alto:</div>
                                    <div class="especificacion1">Ancho:</div>
                                    <div class="especificacion1">Profundidad:</div>
                                </div>
                                <div class="medidasproducto">
                                    <div class="especificacion2"><b>${cards.alto} cm</b></div>
                                    <div class="especificacion2"><b>${cards.ancho} cm</b></div>
                                    <div class="especificacion2"><b>${cards.profundidad} cm</b></div>
                                </div>
                            </div>
                            <div class="descripcionproducto"><b>Especificaciones:</b></div>
                            <div class="cajadescripcion">
                                <div class="descripcionproducto">
                                    <div class="especificacion1">Materialidad:</div>
                                </div>
                                <div class="medidasproducto">
                                    <div class="especificacion2"><b>${cards.materialidad}</b></div>
                                </div>
                            </div>
                            <div class="cajadescripcion">
                                <div class="descripcionproducto">
                                    <div class="especificacion1">Cantos:</div>
                                </div>
                                <div class="medidasproducto">
                                    <div class="especificacion2"><b>${cards.cantos}</b></div>
                                </div>
                            </div>
                            <div class="cajadescripcion">
                                <div class="descripcionproducto">
                                    <div class="especificacion1">Herrajes:</div>
                                </div>
                                <div class="medidasproducto">
                                    <div class="especificacion2"><b>${cards.herrajes}</b></div>
                                </div>
                            </div>
                            <div class="cajadescripcion">
                                <div class="descripcionproducto">
                                    <div class="especificacion1">Colores:</div>
                                </div>
                                <div class="medidasproducto">
                                    <div class="especificacion2"><b>${cards.colores}</b></div>
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
    
        let buttonAddToCart = document.getElementById("botonAgregarCarrito-" + cards.id);
        
        buttonAddToCart.addEventListener("click", function () {
            addToCart(cards); // Agrego el producto al carrito
            // Agrego alerta de SweetAlert
            Swal.fire({
                title: "Agregado al carrito",
                text: "Selecciona el carrito para ver tus productos",
                icon: "success",
                confirmButtonText: "Aceptar",
                cancelButtonText: "Ir al carrito",
                showCancelButton: true,
            }).then((result) => {
                if (result.dismiss === Swal.DismissReason.cancel) {
                    let carritoModal = document.getElementById("carritoModal"); 
                    // Verifico si el carrito ya está abierto
                    let CarritoAbierto = carritoModal.classList.contains("show") || carritoModal.style.display === "block";
                    // si esta cerrado, lo abro.
                    if (!CarritoAbierto) {
                        document.getElementById("carritoBtn").click(); 
                    }
                }
            });
        });
    });
    
    document.getElementById("carritoBtn").addEventListener("click", toggleCarrito);
}

function toggleCarrito() {
    let modal = document.getElementById("carritoModal");
    modal.style.display = modal.style.display === "block" ? "none" : "block";
    if (modal.style.display === "block") {
        renderCart(); // Actualiza el carrito cuando se abre el modal
    }
}

function renderCart() {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    let cartContainer = document.getElementById("cartContainer");

    if (carrito.length === 0) {
        cartContainer.innerHTML = "<p>El carrito está vacío.</p>";
        return;
    }

    cartContainer.innerHTML = "";
    let totalGeneral = 0;

    carrito.forEach(item => {
        // Calculo subtotal para cada producto
        let totalPorProducto = item.cantidad * item.precio;
        totalGeneral += totalPorProducto;

        let cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");

        // Mostrar el nombre del producto, precio unitario, cantidad y subtotal
        cartItem.innerHTML = `
            <p><strong>${item.titulo}</strong></p>
            <p>Precio Unitario: $${item.precio.toLocaleString()}</p>
            <div class="cantidad-control">
                <button onclick="actualizarCantidad(${item.id}, -1)">➖</button>
                <span>${item.cantidad}</span>
                <button onclick="actualizarCantidad(${item.id}, 1)">➕</button>
            </div>
            <p>Subtotal: $${totalPorProducto.toLocaleString()}</p>
            <hr>
        `;

        cartContainer.appendChild(cartItem);
    });

    // Mostrar el total general del carrito
    let totalElement = document.createElement("p");
    totalElement.innerHTML = `<strong>Total: $${totalGeneral.toLocaleString()}</strong>`;
    cartContainer.appendChild(totalElement);
}


function addToCart(newCard) {
    let currentCart = localStorage.getItem("carrito");
    if (!currentCart) {
        localStorage.setItem("carrito", JSON.stringify([]));
    }

    currentCart = JSON.parse(localStorage.getItem("carrito"));

    // Verifico si el producto ya está en el carrito
    let elem = currentCart.find(card => card.id === newCard.id);

    if (elem) {
        elem.cantidad++;
    } else {
        // Guardo el producto completo en el carrito
        currentCart.push({
            id: newCard.id,
            titulo: newCard.titulo,
            precio: newCard.precio,
            cantidad: 1,
            linea: newCard.linea,
            modelo: newCard.modelo,
            imagenes: newCard.imagenes 
        });
    }

    // Actualizo el carrito en el localStorage
    localStorage.setItem("carrito", JSON.stringify(currentCart));
    renderCart();
}


function actualizarCantidad(id, cambio) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    let item = carrito.find(p => p.id === id);
    
    if (!item) return;

    item.cantidad += cambio;

    // Si la cantidad es menor o igual a 0, elimino el producto del carrito
    if (item.cantidad <= 0) {
        carrito = carrito.filter(p => p.id !== id);
    }

    // Actualizo el carrito en el localStorage
    localStorage.setItem("carrito", JSON.stringify(carrito));
    
    // Renderizo el carrito actualizado
    renderCart();
}

