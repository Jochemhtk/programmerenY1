var readlineSync = require('readline-sync');
var geboorteJaar = readlineSync.question(`In welk jaar ben je geboren?\n`);
var geboorteMaand = readlineSync.question(`In welke maand ben je geboren?\n`);
var geboorteDag = readlineSync.question(`Op welke dag ben je geboren?\n`);

let now = new Date();
let birth = new Date(geboorteJaar, geboorteMaand, geboorteMaand); 
let miliseconds = now-birth;

console.log(`Je bent al ${miliseconds} miliseconden in leven!`);