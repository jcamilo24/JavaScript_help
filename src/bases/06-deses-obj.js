

// Desestruturacion 
// Asignacion Desestruturante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
};

const {nombre, edad, clave} = persona;

//console.log(nombre)
//console.log(edad)
//console.log(clave)

// retornar persona funcion
const useContext = ( {nombre, edad,clave, rango='cap' }) => {
    //console.log(nombre, edad, clave)
    return {
        nombreClave: clave,
        años: edad,
        latLng:{
            lat: 12323232,
            lng: -23232313,
        }
    }
}

const {nombreClave,años, latLng:{lat,lng}} = useContext(persona);

console.log(nombreClave, años)
console.log(lat, lng)