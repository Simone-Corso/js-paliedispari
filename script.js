
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//Sommiamo i due numeri
//Stabiliamo se la somma dei due numeri è pari o dispari (usando un'altra funzione)
//Dichiariamo chi ha vinto.


//Creare un prompt per chiedere all'utente pari o dispari

    const pariOppuredispari = prompt ("scrivi un numero pari o dispari");
    console.log(pariOppuredispari);

    //nella console funziona per chiedere pari o dispari.

//Creare un'altra prompt per chiedere di scrivere un numero da 1 a 5.

    const qualeNumero = prompt ("scrivere un numero da 1 a 5");
    console.log(qualeNumero);

//Nella console funziona sia per chiedere e quale numero che vuole sceglieri l'utente.

//Ora dovremmo creare un numero randomico generato dal computer, per poi procedere alla somma dei due numeri.

    const generaComputerNumber = (Math.random(1,5));
    console.log(generaComputerNumber);

//Nella console funziona in modo corretto, genera il numero randomico.

//Adesso dobbiamo creare una variabile per sommare pariOppuredispari + generaComputerNumber

    const somma = pariOppuredispari + generaComputerNumber;
    console.log(somma);

//Nella console funziona, presenta sia dispari che il numero. 

//facciamo la funzione per il calcolo, da un numero minimo al max.

    function generaComputerNumber(min,max){


}


