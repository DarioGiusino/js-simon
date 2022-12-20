/*
In pieno tema natalizio sfruttiamo le timing functions per  fare il conto alla rovescia per il Natale!  Ogni secondo il nostro countdown dovrà scalare fino alla mezzanotte del 25 dicembre!
Questo esercizio richiede un po' di ricerca ma anche un po' di domande che accompagnano l'uomo da tempo immemore:
Da quante ore è composto un giorno? 24
Da quanti minuti è composta un'ora? 60
Da quanti secondi è composto un minuto? 60
Da quanti millisecondi è composto un secondo? 1000
Quanti millisecondi mi separano dal Natale?
Esiste un oggetto JS in grado di gestire le date?
Esistono dei metodi per trasformare una data in millisecondi?
*/

// # funzioni
// funzione per trasformare millisecondi in intero
function getRest(a, b, c) {
    const math = Math.floor((a % b) / c);
    return math;
}

function timer() {
    const today = new Date().getTime();

    const msLeftToXmas = xmasDate - today;
    if (msLeftToXmas > 0){
        daysElement.innerText = Math.floor(msLeftToXmas / days);
        hoursElement.innerText = getRest(msLeftToXmas, days, hours);
        minutesElement.innerText = getRest(msLeftToXmas, hours, minutes);
        secondsElement.innerText = getRest(msLeftToXmas, minutes, seconds);
    } else {
        clearInterval(timer);
    }
}

// # prendo elementi dal dom
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

// # fase preliminare
// prendo data ultima, secondi, minuti, ore e giorni in ms
const xmasDate = new Date('25 December 2022').getTime();
const seconds = 1000;
const minutes = 60 * seconds;
const hours = 60 * minutes;
const days = 24 * hours;

// # avvio contatore
setInterval(timer, 1000)


