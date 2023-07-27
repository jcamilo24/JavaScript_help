

import {getHeroId} from './bases/08-imp-exp'

/*const promesa = new Promise((resolve,reject) => {
    setTimeout(() => {
        // importar 
        const heroe =  getHeroId(2);
        resolve(heroe);
       // resolve();
       reject('No se pudo encontrar el heroe')
    }, 2000)
})

promesa.then((heroe) =>{
    console.log('heroe', heroe)
})
.catch(err => console.warn(err));*/

const getHeroByIdAsync = ( id ) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            // importar 
            const heroe =  getHeroId(id);
            if(heroe){
                resolve(heroe)
            }else{
                reject('No se pudo encontrar el heroe')
            }
        }, 2000)
    })
}

getHeroByIdAsync(17)
.then(heroe => console.log('Heroe', heroe))
.catch(err => console.warn(err));