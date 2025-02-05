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