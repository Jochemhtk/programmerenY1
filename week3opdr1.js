function ShakeFunctie(woordDatGeschudtMoetWorden) {
const characters = woordDatGeschudtMoetWorden.split('');
for (let i = characters.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [characters[i], characters[j]] = [characters[j], characters[i]];
}
const geschudWoord = characters.join('');
return geschudWoord;
}

var woord = ShakeFunctie("Boekenkast");
console.log(woord);

var woord = ShakeFunctie("Bureaulamp");
console.log(woord);

var woord = ShakeFunctie("Dakkapel");
console.log(woord);
