//1 Parola palindroma

// chiedo all'utente din inserire la parola da controllare
const word = prompt('Inserisci una parola, controllerò se sia palindroma o no', "anna");

//applico la funzione e stampo in console il risultato
console.log(isPalindrome(word));


//2 Gioco dei dadi

//recupero gli elementi

const form = document.querySelector('form');
const userNumber = document.getElementById('user-number');
const pariDispari = document.getElementById('choice');

const finalResult = document.getElementById('result');


//reagisco all'invio dei dati del form

form.addEventListener('submit', function(event){

    // impedisco il comportamento di default del form
    event.preventDefault();
    
    //creo il numero random del computer con una funzione
    const randomPcNumber = getRandomNumber();
    console.log(randomPcNumber);

    //faccio la somma del numero dell'utente e quello del computer
    const sum = parseInt(randomPcNumber) + parseInt(userNumber.value);
    console.log(sum);
    
    //applico la funzione per vedere se è pari o dispari
    const result = isEven(sum);

    //confronto la scelta dell'utente con la sommatoria e dichiaro se ha vinto o perso
    if(result === choice.value){
        finalResult.innerText = "Congrautolazioni, hai vinto"
    }else{
        finalResult.innerText = "Peccato, hai perso"
    }
})

