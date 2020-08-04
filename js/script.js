// 1. chiedo all'utente quanti km vuole percorrere
var km = parseInt(prompt("Buongiorno, quanti km vuoi percorrere?"));
document.getElementById("km").innerHTML = km;

// 2.chiedo all'utente la sua età
var eta = parseInt(prompt("Quanti anni hai?"));
document.getElementById("eta").innerHTML = eta;

// 3. calcolo prezzo totale secondo prezzo fisso per km
var prezzo = 0.21;
var prezzoTot = prezzo * km;

// 4. impostazione dei vari sconti in base all'età
var scontoUnder18 = prezzoTot * 0.20;
var scontoOver65 = prezzoTot * 0.40;

var prezzoTotUnder18 = prezzoTot - scontoUnder18;
var prezzoTotOver65 = prezzoTot - scontoOver65;

// 5. arrotondamento a due decimali dei risultati
var prezzoTotUnder18 = Math.round(prezzoTotUnder18 * 100) / 100;
var prezzoTotOver65 = Math.round(prezzoTotOver65 * 100) / 100;
var prezzoTot = Math.round(prezzoTot * 100) / 100;

// 6. calcolo vari sconti in base all'età. Minorenni sconto 20%, over 65 sconto 40%
// infine stampo il risultato
if (isNaN(km) || isNaN(eta)) {
  alert("Attenzione! Inserire solo valori numerici! Aggiornare la pagina e riprovare.");
} else if (eta < 18) {
  document.getElementById("prezzo").innerHTML = prezzoTotUnder18;
} else if (eta >= 65) {
  document.getElementById("prezzo").innerHTML = prezzoTotOver65;
} else {
  document.getElementById("prezzo").innerHTML = prezzoTot;
}
