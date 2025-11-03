// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma (NON usare split, reverse e join)
//
//RAGIONAMENTO
// creo una variabile con una parola inserita dall'utent (prompt).
// come faccio a verificare che la parola è palindroma?
// in ingresso avrò sicuramente una stringa, dovrei considerare sicuramente le maiuscole e minuscole.
// ogni stringa ha come indice iniziale lo zero, magari con .length prendo la lunghezza e questo valore
// lo posso usare come confronto?
// come confronto mi basta arrivare al centro, tipo:
// a e r e a, mi basta avere il confronto con 0 e 4, 1 e 3, se è true allora la mia parola è palindroma.


function isPalindrome(word) {
    word = word.toLowerCase();
    let lengthWordUser = word.length;
    let checkPalindrome = true;

    for (let i = 0; i < lengthWordUser / 2; i++) {
        // console.log(i);
        if (word[i] !== word[lengthWordUser - 1 - i]) {
            checkPalindrome = false;
            break;
        }
    }

    return checkPalindrome;
}

let wordUser = prompt("inserisci una parola!");
// console.log(wordUser);

let result = "non è palindroma!";

if (isPalindrome(wordUser)) {
    result = "è palindroma!";
}

console.log(`la parola ${wordUser} ${result}`);