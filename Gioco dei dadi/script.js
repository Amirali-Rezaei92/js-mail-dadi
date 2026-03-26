// Gioco dei dadi:
//Il programma genera due numeri casuali da 1 a 6, uno per il giocatore
// e uno per il computer. Successivamente confronta i due risultati
//per determinare chi ha ottenuto il punteggio più alto e quindi il vincitore.


//Gioco dei dadi

//1. Genero un numero casuale da 1 a 6 per il giocatore.
let numeroGiocatore = Math.floor(Math.random() * 6) + 1;
//2. Genero un numero casuale da 1 a 6 per il computer.
let numeroComputer = Math.floor(Math.random() * 6) + 1;

//3. Con  IF& elce Stampo entrambi i risultati per mostrarli all'utente.
console.log(`Numero di computer è: ${numeroComputer}`);
console.log(`Numero di Giocatore è: ${numeroGiocatore} `);


//4. Confronto i due numeri:
if(numeroGiocatore>numeroComputer){
    console.log(`Giocatore ha vinto🙆‍♂️`); //- Se il numero del giocatore è più alto, vince il giocatore.
}else if(numeroGiocatore<numeroComputer){//- Se il numero del computer è più alto, vince il computer.
    console.log(`Computer ha vinto 🖥️`);  
} else {
    console.log(`PARI`);//- Se i numeri sono uguali, la partita finisce in pareggio.
    
}


