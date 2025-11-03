// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
//
//RAGIONAMENTO
// creo una varibiabile per scegliere pari o dispari e una per un numero.
// prima funzione per il numero random pc.
// poi faccio la somma del numero utente +  numero computer.
// poi mi serve una funzione per verificare se la somma dei due numeri è pari o dispari.
// decretiamo la vittoria.

function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    return randomNumber;
}

function getParity(num) {
    let result;
    if (num % 2 === 0) {
        result = "pari";
    } else {
        result = "dispari";
    }
    return result;
}

// numero computer
const computerNumber = generateRandomNumber();
// console.log(computerNumber);
// pari o dispari utente
let eveneOrOdd = prompt("Scegli: pari o dispari!").toLowerCase();
// console.log(eveneOrOdd);
// numero inserito dall'utente
let userNumber = parseInt(prompt("Inserisci un numero da 1 a 5!"));
// console.log(userNumber);
// somma numero utente + numero computer
let sumNumber = computerNumber + userNumber;
// console.log(sumNumber);

let resultParity = getParity(sumNumber);

let victory = "Peccato, questa volta ha vinto il computer!";

if (resultParity === eveneOrOdd) {
    victory = "Complimenti, hai vinto!";
}

console.log(`Hai scelto: ${eveneOrOdd} e il numero: ${userNumber}, il computer ha ottenuto il numero ${computerNumber}. La somma è ${sumNumber}. ${victory}`);

