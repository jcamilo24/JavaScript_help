

//import {heroes} from './data/heroes'
//import {heroes} from './data/heroes'

import heroes,{owners} from '../data/heroes'

console.log(owners);
console.log(heroes);

/*const getHeroId = (id) => {
    return heroes.find( (heroe) => {
        if (heroe.id == id){
            return true;
        }else{
            return false;
        }
    });
}*/

export const getHeroId = (id) => {
    return heroes.find( (heroe) => heroe.id == id);
}

console.log(getHeroId(2))

// find? => filtro
const getHeroByOwner =(owner) => heroes.filter( (heroe) => heroe.owner == owner);

console.log(getHeroByOwner('DC'))