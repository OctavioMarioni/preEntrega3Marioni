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

const mailLogin = document.getElementById('emailLogin'),
    passLogin = document.getElementById('passwordLogin'),
    recordar = document.getElementById('recordarme'),
    btnLogin = document.getElementById('login'),
    btnLogout = document.getElementById('btnLogout'),
    modalEl = document.getElementById('modalLogin'),
    nombreUsuario = document.getElementById('nombreUsuario'),
    modal = new bootstrap.Modal(modalEl),
    toggles = document.querySelectorAll('.toggles');

function validarUsuario(baseUsuarios, user, pass) {
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


function guardarDatos(baseUsuario, storage) {
    const usuario = {
        'name': baseUsuario.nombre,
        'user': baseUsuario.mail,
        'pass': baseUsuario.pass
    }

    storage.setItem('usuario', JSON.stringify(usuario));

}

function recuperarDatos(storage) {
    let usuarioEnStorage = JSON.parse(storage.getItem('usuario'));
    return usuarioEnStorage;
}

function MostrarUsuario(usuario) {
    nombreUsuario.innerHTML = `<span>${usuario.name}</span>`
}




function hudLogeado(array, clase) {
    array.forEach(element => {
        element.classList.toggle(clase);

    });
}


btnLogin.addEventListener('click', (e) => {
    e.preventDefault();

    if (!mailLogin.value  || !passLogin.value) {
        alert('debe completar todos los campos');
    } else {
        let datos = validarUsuario(Usuarios, mailLogin.value, passLogin.value);

        if (!datos) {
            alert('Usuario y/o contraseña incorrecto')
        } else {
            if (recordar.checked) {
                guardarDatos(datos, localStorage);
                nombreUsuario(recuperarDatos(sessionStorage));
            }else {
                guardarDatos(datos, sessionStorage);
                MostrarUsuario(recuperarDatos(sessionStorage));
            }
            modal.hide()

            presentarInfo(toggles, 'd-none');

        }
    }

})

btnLogout.addEventListener('click', () => {
    borrarDatos();
    presentarInfo(toggles, 'd-none');
});

