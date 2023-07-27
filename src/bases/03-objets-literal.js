

const persona = {
    nombre: 'Tony',
    apellido: 'stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 55336677,
        latitud: 14.33445,
        longitud: 34.56789,
    }
}

// console.table(persona)
console.log(persona)

const persona2 = {...persona};
persona2.nombre = 'peter';

console.log(persona2)