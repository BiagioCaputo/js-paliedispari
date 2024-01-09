/**
 * Funzione che inverte gli elementi di una stringa
 * @param {string} text testo da invertire
 * @returns {string} testo invertito
 */

function reverseText(text){
    let reversedText = '';

    for(let i = text.length - 1; i >= 0; i--){
        reversedText += text[i];
    }

    return reversedText;
}

/**
 * Funzione che confrontando una parola con il suo inverso dichiara se questa sia palindroma o meno
 * @param {*} text testo da invertire con l'ausilio di una funzione già compilata e da confrontare con il suo inverso
 * @returns valore flag che conferma o nega che la parola sia palindroma
 */
function isPalindrome(text){
    let palindrome = false;
    const reversedText = reverseText(text);

    if(reversedText === text) palindrome = true;

    return palindrome;

}

// Funzione che crea un numero random compreso fra 1 e 5
function getRandomNumber(){
    return Math.floor(Math.random() * (5 - 1 + 1) ) + 1;
}

function isEven (number){
    let even = "dispari";

    if(number % 2 === 0) even = "pari";

    return even;
}