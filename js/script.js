let nome = prompt('Inserisci il tuo nome') ;
let cognome = prompt('Inserisci il tuo conome') ;
let colore = prompt('Inserisci il tuo colore preferito') ;

const numPw = 21 ;

document.getElementById('pw-container').innerHTML = nome + cognome + colore + numPw ;
