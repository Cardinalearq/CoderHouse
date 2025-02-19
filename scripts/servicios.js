
const botonesVerMas = document.querySelectorAll('.botones-ver-mas');


botonesVerMas.forEach(boton => {
    const cajaPortada = boton.closest('.cajas-portadas');
    const infoAdicional = cajaPortada.querySelector('.info-adicional');

    boton.addEventListener('click', () => {
        infoAdicional.style.display = (infoAdicional.style.display === 'none' || infoAdicional.style.display === '') ? 'block' : 'none';
    });
});

