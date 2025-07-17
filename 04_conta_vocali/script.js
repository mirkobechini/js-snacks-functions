/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function vowelsNum(word){
    let occurances = 0
    for(let i = 0; i < word.length; i++){
        const letter = word[i]
        if(letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u'){
            occurances++
        }
    }
    return occurances

}

/*
const vowelsNum = (word) => {
    let occurances = 0
    for(let i = 0; i < word.length; i++){
        const letter = word[i]
        if(letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u'){
            occurances++
        }
    }
    return occurances

}

const vowelsNum = word => {
    let occurances = 0
    for(let i = 0; i < word.length; i++){
        const letter = word[i]
        if(letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u'){
            occurances++
        }
    }
    return occurances

}



*/



// Invoca la funzione qui e stampa il risultato in console

console.log(vowelsNum(word));


//Risultato atteso se si passa 'javascript': 3 (a, a, i)