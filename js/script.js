/* # Griglia Campo Minato

L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

# MILESTONE 1
Prepariamo l'HTML ed il CSS per ottenere il risultato grafico che vediamo nell'immagine allegata.
#MILESTONE 2
Rimuoviamo le celle che abbiamo inserito nell'HTML in modo da generarle tramite JS. Al click del bottone play, vengono generate 100 celle in 10 righe da 10 celle ciascuna.
#MILESTONE 3
In ogni cella, deve comparire il numero corrispondente, in ordine da 1 a 100;
#MILESTONE 4
Al click sulla cella, stampiamo il numero della cella cliccata in console, poi coloriamo la cella d'azzurro!
*/

// #0 Struttura HTML: Mi prepraro la sruttura del HTML + CSS.
// #1 Svuotamento del HTML Elimino dalla pagina gli elementi che saranno "generati" tramite JS.
// #2 Recupero dal DOM gli elementi dalla pagina tramite "getElement" con [id, class o tag].
// #3  Setto delle variabili di comodo per gli elementi che dovrò manipolare e creo i SQUARE.
// #3bis  Posso crearmi o utilizzare anche delle funzioni?
// #4 applico al Bottone [Crea] il compito di generare tramite un ciclo [credo un "for"] le 100 caselle.
// #5 Creo tramite un "event" lo script che ascolta il [click] del bottone. All' event applico la classe [background-color] al bottone e stampo in console la variabile [i] (contatore che mi ha generato le celle).
// FINE
// #6bis Tramite il CSS si potrebbe cambire al width e la height [penso tramite l'assegnazione di una classe diversa in JS] e una [select] - [difficoltà] che cambi le variabili da passare al ciclo [for] per generare i quadrati. [ipotesi]
// #7bis un tasto [aggiorna] potrebbe far ripartie il ciclo [crea celle] oppure un altro modo e settare sulle [class] la classe [d-none] o soluzione ancora più semplice "svuotare il DIV" che contiene le celle sovrascivendo il contenuto con [''] [ipotesi]


console.log ('JS OK');

// FUNZIONI (#3bis)
const createSquare = () => {
 const square = document.createElement('div');
 square.className = 'square';

 return square;
}

// #0 Mi prepraro la sruttura del HTML + CSS.

// #1 Svuotamento 

// OPERAZIONI INIZIALI

// #2 Recupero dal DOM gli elementi dalla pagina
const grid = document.getElementById('grid');
const playGame = document.getElementById('playGame');


// #3 Setto delle variabili di comodo e mi creo le SQUARE

const rows = 10;
const cols = 10;
const totalCells = rows * cols;

// #4 applico al Bottone [Crea] il compito di generare i square.

   playGame.addEventListener('click', function (){
    // cambio in ricomincia
    playGame.innerText = 'Ricomincia';
    grid.innerText = '';

    for (let i = 0; i < totalCells; i++) {
    const square = createSquare();
    square.innerText = i + 1;

    square.addEventListener('click', function () {
        square.classList.add('hover');
        console.log(i);
    });
    grid.appendChild(square);
    };

});



    



    








// #5 Ascolto il Bottone [Crea]