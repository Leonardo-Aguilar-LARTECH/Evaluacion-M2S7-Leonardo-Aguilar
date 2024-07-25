let opcion = parseInt(prompt("¡Hola! Soy Eva, tu asistente virtual del Servicio al Cliente de Mentel. Estoy aquí para ayudarte en lo que necesides.\nEscribe el número de la opción que buscas: \n1. - Boletas y Pagos \n2. - Señal y llamadas \n3. - Oferta comercial  \n4. - Otras consultas"));

//FUNCIONES

function Eleccion1() {
    let boletasYPagos = prompt("Seleccione una opción:\n1.- Ver Boleta\n2.- Pagar cuenta");
    if (boletasYPagos == 1) {
        alert("Haga click aqui para descargar su boleta");
    } else {
        if (boletasYPagos == 2) {
            alert("Usted está siendo Transferido. Espere por favor...");
        } else {
            alert("La opcioón ingresada no es válida. Gracias por preferir nuestros servicios");
        }
    }
}

function Eleccion2() {
    let SenalYLlamadas = prompt("Seleccione una opción:\n1.- Problemas con la señal\n2.- Problemas con las llamadas");
    if (SenalYLlamadas == 1) {
        let solicitud = prompt("A Continuación Escriba su solicitud");
        alert("Estimado Usuario, su solicitud: ", solicitud, ".\nHa sido ingresada con exito.\nPronto será contactado por uno de nuestros ejecutivos");
    } else {
        if (SenalYLlamadas == 2) {
            let solicitud = prompt("A Continuación Escriba su solicitud");
            alert("Estimado Usuario, su solicitud: \n" + solicitud + ".\nHa sido ingresada con exito.\nPronto será contactado por uno de nuestros ejecutivos");
        } else {
            alert("La opcioón ingresada no es válida. Gracias por preferir nuestros servicios");
        }
    }
}

function Eleccion3() {
    let ofertaComercial = prompt("¡Mentel tiene una oferta comercial acorde a tus necesidades!\nPara conocer mas información y ser asesorado personalmente por un\nejecutivo escribe 'SI' y un ejecutivo te llamará. De lo contrario ingrese\n'NO' ");
    let aceptaOferta = ofertaComercial.toUpperCase();
    if (aceptaOferta == "SI") {
        alert("Un ejecutivo se contactará con usted");
    } else {
        if (aceptaOferta == "NO") {
            alert("Gracias por preferir nuestros servicios");
        } else {
            alert("La opcioón ingresada no es válida. Gracias por preferir nuestros servicios");
        }
    }
}

function Eleccion4() {
    let solicitud = prompt("A Continuación Escriba su solicitud");
            alert("Estimado Usuario, su solicitud: \n" + solicitud + ".\nHa sido ingresada con exito.\nPronto será contactado por uno de nuestros ejecutivos");
}



switch (opcion) {
    case 1: Eleccion1();
        break
    case 2: Eleccion2();
        break
    case 3: Eleccion3();
        break
    case 4: Eleccion4();
        break
    default:
        alert("La opcioón ingresada no es válida. Gracias por preferir nuestros servicios");
}

