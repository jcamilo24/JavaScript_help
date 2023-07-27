
// Funciones 
function saludar1(nombre){
    return `Hola, ${nombre}`;
}

// Funciones en JS

const saludar2 = function (nombre){
    return `Hola, ${nombre}`;
}

// funcion de flecha
const saludar3 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar4 = (nombre) => `Hola, ${nombre}`;

const saludar5 = () => `hola mundo`;

// console.log(saludar('camilo'))
console.log(saludar1)
console.log(saludar4('vegeta'))
console.log(saludar5())

const getUser = () => ({
    uid: 'ABC123',
    username: 'camilo24',
});

console.log(getUser())

const user = getUser();
console.log(user)



// ejercicio
const getUsuarioActivo = (nombre) => ({
        uid: 'ABC567',
        username: nombre,
});

const usuarioActivo = getUsuarioActivo('fernando');
console.log(usuarioActivo)