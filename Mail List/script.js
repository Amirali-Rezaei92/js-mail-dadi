
//Questo programma controlla se l'email inserita dall'utente 
//è presente nella lista delle email degli invitati. 
//Se l'email viene trovata, l'utente può entrare; 
//altrimenti l'accesso viene negato.

//1. Creo una variabile booleana chiamata trovato e la imposto su false.
let trovato = false;
//2. Creo un array che contiene la lista delle email degli invitati.
let listaDelleMail = ['examplemail1@gmail.com',
    'examplemail2@gmail.com',
    'examplemail3@yahoo.com',
    'examplemail4@hotmail.com',
    'bluefox128@gmail.com',
    'pixelstorm.dev@outlook.com',
    'neonwave77@yahoo.com',
    'silentcoder.pro@protonmail.com',
    'lunar.byte88@gmail.com',
    'orbitdesign.lab@icloud.com',
    'shadowgrid01@outlook.com',
    'quantum.flow23@yahoo.com',
    'nova.spark.dev@gmail.com',
    'cyberleaf.mail@protonmail.com'];
//3. Chiedo all’utente di inserire la sua email tramite prompt.
let mail = prompt("Inserisci l'indirizzo email");

//4. Verifico che la posta in arrivo abbia il formato corretto.
let estensioniValide = [".com", ".it", ".org", ".net", ".io"];
let estensione = mail.slice(-4);
let estensioneLunga = mail.slice(-3); 

let estensioneCorretta = false;

for (let i = 0; i < estensioniValide.length; i++) {
    if (estensione === estensioniValide[i] || estensioneLunga === estensioniValide[i]) {
        estensioneCorretta = true;
    }
}
if(estensioneCorretta===false){
    console.log("❌L'indirizzo email inserito non è corretto❌"); 
} else{


//4. Imposto un ciclo for per controllare se l’email inserita è presente nella lista.
for (i = 0; i < listaDelleMail.length; i++) {
    if (mail === listaDelleMail[i]) {
        trovato = true;
    }
}
//5. Se l’email è presente, imposto trovato = true; altrimenti rimane false e Scrivo una condizione if: se trovato è true, 
// stampo un messaggio che dice all’utente che può entrare; altrimenti stampo che non può entrare.
if (trovato === true) {
    console.log(`✅Utente con Mail ${mail} Sei tra gli invitati✅`);
} else {
    console.log(`⛔️Utente con Mail ${mail} purtroppo non sei invitato⛔️`);
}
}