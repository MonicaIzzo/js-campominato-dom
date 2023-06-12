/* # Griglia Campo Minato DOM

# Campo Minato

Il computer deve generare 16 numeri casuali nello stesso range della difficltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell'array delle bombe non potranno esserci due numeri uguali
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati abbiamo calpestato una bomba. La cella si colora di rosso e la partita termina. Altrimenti, la cella cliccata si colora di azzurro e l'utente può continuare  a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunger il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita, il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha cliccato su una cella che non era una bomba
# MILESTONE 1
Prepariamo "Qualcosa" per tenere il punteggio dell'utente.
Quando l'utente clicca su una cella, incrementiamo il punteggio.
Se riusciamo, facciamo anche in modo da non poter più cliccare sulla stessa cella
# MILESTONE 2
Facciamo in modo di generare 16 numeri casuali (tutti diversi) compresi tra 1 e il massimo di caselle disponibili.
Generiamoli e stampiamo in console per essere certi che siano corretti
# MILESTONE 3
Quando l'utente clicca su una cella, verrifichiamo se ha calpestato una bomba, controllando se il numero di cella è presente nell'array di bombe.
Se si, la cella diventa rossa (raccogliamo il punteggio e scriviamo in console che la partita termina) altrimenti diventa azzurra e dobbiamo incrementare il punteggio.
# MILESTONE 4
Quando l'utente clicca su una cella, e questa non è una bomba, dobbiamo controllare se il punteggio incrementato ha raggiunto l punteggio massimo, perchè in quel caso la partita termina. Raccogliamo quindi il messaggio e scriviamo un messaggio appropriato.
# MILESTONE 5
Quando la partita termina dobbiamo capire se è terminata perchè è stata cliccata una bomba o seperchè l'utente ha raggiunto il punteggio massimo(ossia ha vinto). Dobbiamo poi in ogni caso stampare lin pagina il punteggio raggiunto ed il messaggio adeguato in caso di vittoria o sconfitta.
**FINE** 
*/


// #0 Struttura HTML: Mi prepraro la sruttura del HTML + CSS.
// #1 Svuotamento del HTML Elimino dalla pagina gli elementi che saranno "generati" tramite JS.
// #2 Recupero dal DOM gli elementi dalla pagina tramite "getElement" con [id, class o tag].
// #3  Setto delle variabili di comodo per gli elementi che dovrò manipolare e creo i SQUARE.
// #4 Il computer deve generare 16 numeri casuali nello stesso range della difficltà prescelta.[stampiamo in console]
// #5 l'utente clicca su una cella. [variabile per tenere il punteggio in modo incrementale. Una cella cliccata il punteggio non può essere incrementato] [stampiamo in console].
    // #5a se il numero è presente nella lista dei numeri generati abbiamo calpestato una bomba. La cella si colora di rosso e la partita termina. [stampiamo in console].
    // #5b se no, la cella cliccata si colora di azzurro e l'utente può continuare  a cliccare sulle altre celle.
// #6 La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
// #7 la partita termina se: è stata cliccata una bomba [ha perso] [o] seperchè l'utente ha raggiunto il punteggio massimo [ha perso].
// #8 Al termine della partita, il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha cliccato su una cella che non era una bomba. [e il messaggio adeguato in caso di vittoria o sconfitta].
// FINE



console.log ('JS OK');

// FUNZIONI

function generateBombs (numerOfBombs, maxNumber, blacklist) {
let bombs = [];
while (bombs.length < numerOfBombs) {
    let randomNumber;
    do {
        randomNumber = Math.floor(Math.random() * maxNumber) + 1;
    } while (bombs.includes(randomNumber));
    bombs.push(randomNumber);
}

return bombs;
}

function startGame () {
// cambio in ricomincia
    playGame.innerText =
     'Ricomincia';
    grid.innerHTML = '';
    
    const level =levelSelect.value;

    let rows;
    let cols;

    switch(level) {
        case 'hard' :
        rows = 7;
        cols = 7;
        break;
        case 'normal' :
        rows = 9;
        cols = 9;
        break;
        case 'easy' :
        default:
        rows = 10;
        cols = 10; 
    }

    let totalCells = rows * cols;

    let maxPoint = 0;
    let bombs =  0;

    const totalBombs = 16;
    maxPoint = totalBombs - totalBombs; 
    bombs = [];  

    for (let i = 0; i < totalCells; i++) {
    const square = createSquare();
    square.innerText = i + 1;
    square.classList.add(level);
    console.log(level);

    square.addEventListener('click', function () {
        square.classList.add('hover');
        console.log(++i);

        // controllo se è una bomba
        const hasHitBomb = bombs.includes(i);

        if (hasHitBomb) {
            square.classList.add ('bomb');
        } else {
            scorePlaceholder.innerText = ++score;
            console.log('il punteggio è '+ score);

            if (score =maxPoint) {
                console.log ('Hai VINTO')
            }
        }

        
        



        



    });
    grid.appendChild(square);
    };
}

const createSquare = () => {
const square = document.createElement('div');
square.classList.add('square');

 return square;
}

// #0 Mi prepraro la sruttura del HTML + CSS.

// #1 Svuotamento 

// OPERAZIONI INIZIALI

// #2 Recupero dal DOM gli elementi dalla pagina
const grid = document.getElementById('grid');
const playGame = document.getElementById('playGame');
const levelSelect = document.getElementById('livello');
console.log(levelSelect);
const scorePlaceholder = document.getElementById('score');


// Setto delle variabili di comodo.

let rows;
let cols;

let level;

if (level = 'easy') {
    rows = 10;
    cols = 10;
} else if (level = 'normal') {
    rows = 9;
    cols = 9;
} else {
    rows = 7;
    cols = 7;
}

totalCells = rows * cols;
console.log(totalCells);

let score = 0;
let bombs;





// # Applico al Bottone [Crea] il compito di generare i square.
   playGame.addEventListener('click', startGame);