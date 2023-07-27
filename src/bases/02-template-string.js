

const nombre = 'camilo';
const apellido = 'bolaños'; 

// const nombreCompleto = nombre + ' ' + apellido
const nombreCompleto = `
${ nombre } 
${ apellido }
${ 1+2}
`;

console.log(nombreCompleto)

function getSaludo(nombre){
    return 'Hola '+ nombre;
}

console.log(`Este en un texto: ${getSaludo(nombre)}`)


