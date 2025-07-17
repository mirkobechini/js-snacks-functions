/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function nameFromLetter(array, letter){
    const arrayFiltered = []
    for(let i = 0; i < array.length; i++){
        const thisItem = array[i]
        if(thisItem[0] === letter){
            arrayFiltered.push(thisItem)
        }
    }
    return arrayFiltered
}

/*

const nameFromLetter = (array, letter) => {
    const arrayFiltered = []
    for(let i = 0; i < array.length; i++){
        const thisItem = array[i]
        if(thisItem[0] === letter){
            arrayFiltered.push(thisItem)
        }
    }
    return arrayFiltered
}

*/

// Invoca la funzione qui e stampa il risultato in console

console.log(nameFromLetter(names, "A"))

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]