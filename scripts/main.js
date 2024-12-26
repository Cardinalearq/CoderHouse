const tarjetas = [];

function crearTarjetas () {
    let nombre;

    do {
        nombre = prompt("Ingrese el nombre de la obra");
        if (!nombre) {
            alert("Debe completar el campo.");
        }
    } while (!nombre);

    let ubicacion;

    do {
        ubicacion = prompt("Ingrese la ubicacion de la obra");
        if (!isNaN(ubicacion) || !ubicacion) {
            alert("Por favor, ingrese un valor alfabetico.");
        }
    } while (!ubicacion || !isNaN(ubicacion));

    let anio;

    do {
        anio = prompt("Ingrese el año de la obra");
        if (isNaN(anio) || !anio) {
            alert("Por favor, ingrese un valor numerico.");
        }
    } while (isNaN(anio) || !anio);

    let metroscuadrados;

    do {
        metroscuadrados = prompt("Ingrese los metros cuadrados de la obra");
        if (isNaN(metroscuadrados) || !metroscuadrados) {
            alert("Por favor, ingrese un valor numerico.");
        }
    } while (isNaN(metroscuadrados) || !metroscuadrados);

    let estilo;

    do {
        estilo = prompt("Ingrese el estilo de la obra");
        if (!isNaN(estilo) || !estilo) {
            alert("Por favor, ingrese un valor alfabetico.");
        }
    } while (!estilo || !isNaN(estilo));

    let estado;

    do {
        estado = prompt("Ingrese el estado de la obra");
        if (!isNaN(estado) || !estado) {
            alert("Por favor, ingrese un valor alfabetico.");
        }
    } while (!estado || !isNaN(estado));

    const tarjeta = {
        nombre,
        ubicacion,
        anio,
        metroscuadrados,
        estilo,
        estado
    };

    if (confirm (`¿Quiere confirmar estos datos? \n \n Nombre de la obra: ${nombre} \n Ubicacion: ${ubicacion} \n Año: ${anio} \n Metros cuadrados: ${metroscuadrados} \n Estilo: ${estilo} \n Estado: ${estado}`)) {
            tarjetas.push(tarjeta);
            alert ("Datos cargados")
            } else {alert ("Carga cancelada")};

        
}

function mostrarTarjeta () {
    if (tarjetas.length === 0){
        alert("No hay datos cargados")
    } else {
        let mensaje = `Se cargaron los siguientes datos: \n`;
        tarjetas.forEach((tarjeta, i) => {
            mensaje += `\nTarjeta ${i + 1}:\n\n`;
            mensaje += `Nombre: ${tarjeta.nombre}\n`;
            mensaje += `Ubicación: ${tarjeta.ubicacion}\n`;
            mensaje += `Año: ${tarjeta.anio}\n`;
            mensaje += `Metros cuadrados: ${tarjeta.metroscuadrados}\n`;
            mensaje += `Estilo: ${tarjeta.estilo}\n`;
            mensaje += `Estado: ${tarjeta.estado}\n`;
        })
        alert(mensaje);

    }
}

function ejecucion (){
    let opcionElegida 

    do {
        opcionElegida = prompt ('Seleccione una opción: \n 1. Agregar obra \n 2. Mostrar obras cargadas \n 3. Salir')

        if (opcionElegida === "3"){
            alert ("Gracias por usar el programa")
            break;
        } else if (parseInt(opcionElegida) >= 4) {
            alert ("Debe ingresar una opcion valida")
        } else {
            switch (opcionElegida){
                case "1": crearTarjetas();
                break;
                case "2": mostrarTarjeta();
                break;
            }
        }

        
    } while (opcionElegida !== "3")
}

ejecucion ();