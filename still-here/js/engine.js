
// engine.js — funzioni comuni per Still Here

// Blocca la giornata se è già stata vissuta
function bloccoSeGiaScelto(chiave) {
    if (localStorage.getItem(chiave)) {
        return true;
    }
    return false;
}

// Salva la scelta effettuata per un determinato giorno
function salvaScelta(chiave, valore) {
    localStorage.setItem(chiave, valore);
}

// Recupera una scelta salvata (se ti serve in un giorno successivo)
function recuperaScelta(chiave) {
    return localStorage.getItem(chiave);
}

function ricominciaGioco() {
    localStorage.clear();
    console.log("Gioco resettato");
    window.location.href = "../still-here/giorno1.html";
}