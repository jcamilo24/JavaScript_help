

// desestructuracion de arreglos
const personajes = ['Goku', 'Vegeta','Trunks'];

console.log(personajes[0])

const [,,p1] = personajes;

console.log(p1)

const retornarArreglo = ()=>{
    return ['ABC', 123];
}

const arr = retornarArreglo();
console.log(arr)

const [letras, numeros] = retornarArreglo();
console.log(letras, numeros)

//Tarea
const UseState = (valor) => {
    return [valor, ()=>{
        console.log('Hola Mundo')
    }]
};

const [nombre, setNombre] = UseState('Goku');
console.log(nombre)
setNombre();