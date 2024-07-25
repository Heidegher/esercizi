const somma = (a, b) => {
  if (a === 50 || b === 10 || a + b === 50) {
    return true;
  } else return false;
};
console.log(somma(25, 25));
console.log(somma(50, 50));
console.log(somma(20, 20));

///es2

const rimuoviCarattere = (stringa, posizione) => {
  let arrayLettere = stringa.split("");
  arrayLettere.splice(posizione, 1);
  return arrayLettere.join("");
};
console.log(rimuoviCarattere("paperino", 1));

///es3

const numeriCompresi = (a, b) => {
  if (
    (a >= 40 && b <= 60 && b >= 40 && a <= 60) ||
    (a >= 70 && b <= 100 && b >= 70 && a <= 100)
  ) {
    return true;
  } else return false;
};

console.log(numeriCompresi(45, 60));
console.log(numeriCompresi(70, 99));

///es4

const controlloCittà = (Città) => {
  return Città.startsWith("los") || Città.startsWith("new");
};
console.log(controlloCittà("Roma"));
console.log(controlloCittà("new york"));
console.log(controlloCittà("los angeles"));

//es5

/*const somma = (arreyNumeri) => {
   let tempo= 0 
   for (
    
   )
}
*/

// es6

const non1o3 = (arrey) => {
  return !arrey.includes(1) && !arrey.includes(3);
};

console.log(non1o3([2, 4, 5]));
console.log(non1o3([1, 3]));

//es7

const angolazione = (angolo) => {
  if (angolo < 90) return "acuto";
  if (angolo > 90 && angolo < 180) return "ottuso";
  if (angolo === 90) return "retto ";
  if (angolo === 180) return "piatto";
};
console.log(angolazione(23));
console.log(angolazione(95));
console.log(angolazione(90));
console.log(angolazione(180));

//es8

function creaAcronimo (frase) {
  const parole = frase.split(" ");
  const acronimo = parole.map(parola => parola.charAt().toUpperCase()).join(".");

  return acronimo;
};

const frase = "associazione sportiva roma ";

console.log(creaAcronimo(frase));

