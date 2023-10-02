var readlineSync = require('readline-sync');
var randomNumber = Math.floor(Math.random() * 100) + 1;

var userNumber = readlineSync.question(`Getal?\n`);

console.log(randomNumber)

if (userNumber < randomNumber){
    console.log(`Je geraden getal is lager.`);
}
else if (userNumber > randomNumber) {
    console.log(`Je geraden getal is hoger`);
}
else {
    console.log(`je hebt het goede getal geraden!`);
}