function busqueda() {
    const xrh = new XMLHttpRequest();
    xrh.open('GET', 'http://localhost:5500/proyectoFinal/proyecto_frontend_inicio/datos.json');
    xrh.onload = () => {
        if (xrh.status == 200) {
            // Obteniendo los datos del JSON
            const valoresJSON = JSON.parse(xrh.response).canciones;
            
            let barra = document.getElementById('buscarMusica').value;
            let prueba = valoresJSON.filter(comparar => new RegExp(barra, 'i').test(comparar.nombre));
            let listaCanciones = [];

            prueba.forEach(comparar => {
                if (barra == comparar.nombre) {
                    listaCanciones +=
                    `<div class="col-10 col-md-4 mx-auto mb-3">
                    <div class="card">
                        <div class="bg-light d-flex justify-content-center p-4">
                            <img src="./imagenes/icon_${comparar.icono}.svg" class="card-img-top img-sm-icon" alt="Icono Musica">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title text-center">${comparar.nombre}</h5>
                            <audio src="./canciones/${comparar.ruta}" controls class="w-100"></audio>
                        </div>
                    </div>
                </div>`;
                };
            });
            // document.getElementById("invento").innerHTML = listaCanciones;
        } else {
            console.log("No hay conexión");
        };
    };
    xrh.send();
};

function mostrarLista() {
    const xrh = new XMLHttpRequest();
    xrh.open('GET', 'http://localhost:5500/proyectoFinal/proyecto_frontend_inicio/datos.json');
    xrh.onload = () => {
        if (xrh.status == 200) {
            // Obteniendo los datos del JSON
            const valoresJSON = JSON.parse(xrh.response).canciones;
            var elemento = document.getElementById("invento");

            for (var i of valoresJSON){
                elemento.innerHTML +=
                `<div class="col-10 col-md-4 mx-auto mb-3">
                    <div class="card">
                        <div class="bg-light d-flex justify-content-center p-4">
                            <img src="./imagenes/icon_${i.icono}.svg" class="card-img-top img-sm-icon" alt="Icono Musica">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title text-center">${i.nombre}</h5>
                            <audio src="./canciones/${i.ruta}" controls class="w-100"></audio>
                        </div>
                    </div>
                </div>`
            }
        } else {
            console.log("No hay conexión");
        };
    };
    xrh.send();
};

mostrarLista();
busqueda();