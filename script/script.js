const Usuarios = [{
    nombre: 'Guillermo',
    mail: 'Guillermodiaz@gmail.com',
    pass: 'Willyrex123'

},
{
    nombre: 'Samuel',
    mail: 'SamuelDeluque@gmail.com',
    pass: 'Vegettagamer123'

},
{
    nombre: 'Ruben',
    mail: 'DoblasRuben@gmail.com',
    pass: 'RubenOMG123'

},
{
    nombre: 'Ivan',
    mail: 'IvanRaul@gmail.com',
    pass: 'Speed123'

}
]
const juegos = [{
    Titulo: '',
    portada: '',
    descripcion: '',
    valoracion: '',
},
{
    Titulo: '',
    portada: '',
    descripcion: '',
    valoracion: '',
},
{
    Titulo: '',
    portada: '',
    descripcion: '',
    valoracion: '',
},
{
    Titulo: '',
    portada: '',
    descripcion: '',
    valoracion: '',
},
{
    Titulo: '',
    portada: '',
    descripcion: '',
    valoracion: '',
},
{
    Titulo: '',
    portada: '',
    descripcion: '',
    valoracion: '',
}
]

function ValidarUsuario(baseUsuarios, user, pass) {
    let encontrado = baseUsuarios.find((baseUsuarios) => baseUsuarios.mail == user);

    if (typeof encontrado === 'undefined') {
        return false;

    } else {
        if (encontrado.pass != pass) {
            return false;

        } else {
            return encontrado;
        }
    }
}


function GuardarDatos(baseUsuarios, storage) {
    const usuario = {
        'name': usuarioDB.nombre,
        'user': usuarioDB.mail,
        'pass': usuarioDB.pass
    }

    storage.setItem('usuario', JSON.stringify(usuario));

}

function recuperarDatos(storage) {
    let usuarioEnStorage = JSON.parse(storage.getItem('usuario'));
    return usuarioEnStorage;
}

function MostrarUsuario(usuario) {
    nombreUsurio.innerHTML = '<span>${usuario.name}</span>'
}

function mostrarJuegos(array) {
    Carrito.innerHTML = '';
    array.forEach(element => {
        let html = `<div class="card cardJuego" id="tarjeta${element.titulo}">
                <h3 class="card-header" id="tituloJuego">Nombre: ${element.titulo}</h3>
                <img src="${element.portada}" alt="${element.titulo}" class="card-img-bottom" id="portadaJuego">
                <div class="card-body">
                    <p class="card-text" id="descripcionMascota">Especie: ${element.descripcion}</p>
                    <p class="card-text" id="valoracion">Edad: ${element.valoracion} años</p>
                </div>
            </div>`;
        contTarjetas.innerHTML += html;
    });
}

