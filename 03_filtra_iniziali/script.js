/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function nameFromLetter(list, letter){
    const listFiltered = []
    for(let i = 0; i < list.length; i++){
        const thisItem = list[i]
        if(thisItem[0] === letter){
            listFiltered.push(thisItem)
        }
    }
    return listFiltered
}

/*

const nameFromLetter = (list, letter) => {
    const listFiltered = []
    for(let i = 0; i < list.length; i++){
        const thisItem = list[i]
        if(thisItem[0] === letter){
            listFiltered.push(thisItem)
        }
    }
    return listFiltered
}

*/

// Invoca la funzione qui e stampa il risultato in console

console.log(nameFromLetter(names, "A"))

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]