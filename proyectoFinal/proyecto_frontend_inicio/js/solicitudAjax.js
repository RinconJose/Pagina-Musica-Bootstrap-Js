function consulta() {
    var peticion = new XMLHttpRequest();
    peticion.open('GET', 'http://localhost:5500/proyectoFinal/proyecto_frontend_inicio/datos.json');
    peticion.onload = function () {
        if (peticion.status == 200) {
            const datosJSON = JSON.parse(peticion.response);
            const listaReproducciones = datosJSON.canciones;
            const listaOrdenada = listaReproducciones.sort(function (a,b) {
                if (a.reproducciones < b.reproducciones) {
                    return 1;
                } if (a.reproducciones > b.reproducciones) {
                    return -1;
                }
                return 0;
            }).slice(0,3);
            document.getElementById("nombreCancion_1").innerHTML = listaOrdenada[0].nombre;
            // var audio = document.getElementById("audio1");
            // audio.setAttribute("src", `./canciones/${listaOrdenada[0].ruta}`);
            document.getElementById("audio1").setAttribute("src", `./canciones/${listaOrdenada[0].ruta}`);

            document.getElementById("nombreCancion_2").innerHTML = listaOrdenada[1].nombre;
            document.getElementById("audio2").setAttribute("src", `./canciones/${listaOrdenada[1].ruta}`);

            document.getElementById("nombreCancion_3").innerHTML = listaOrdenada[2].nombre;
            document.getElementById("audio3").setAttribute("src", `./canciones/${listaOrdenada[2].ruta}`);
        }
    };
    peticion.send();
};

consulta();
