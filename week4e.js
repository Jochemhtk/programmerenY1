var readlineSync = require('readline-sync');
var nee = "nee";
var Nee = "Nee";

console.clear();
var score = 0;
var answer = readlineSync.question(`Wilt u klikken?\n(enter of nee)\n`);

while (answer === ``){
    console.log(`Score: ${score}\n`);
    var answer = readlineSync.question(`Wil je klikken?\n`);
    score++;
    console.clear();
}
if (answer === nee) {
    console.clear();
    console.log(`Score: ${score}\n`);
}
else if (answer === Nee) {
    console.clear();
    console.log(`Score: ${score}\n`);
}
