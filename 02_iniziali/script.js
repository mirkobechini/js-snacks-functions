/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

function firstLetter(array){
    const initials = []
    for(let i = 0; i < array.length; i++){
        const thisItem = array[i]
        initials[i] = thisItem[0]
    }
    return initials
}

/*
const firstLetter = (array) => {
    const initials = []
    for(let i = 0; i < array.length; i++){
        const thisItem = array[i]
        initials[i] = thisItem[0]
    }
    return initials
}

const firstLetter = array => {
    const initials = []
    for(let i = 0; i < array.length; i++){
        const thisItem = array[i]
        initials[i] = thisItem[0]
    }
    return initials
}
*/


// Invoca la funzione qui e stampa il risultato in console
console.log(firstLetter(names));



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]