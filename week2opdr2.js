var readlineSync = require("readline-sync");

var leeftijd = readlineSync.question(`Goedenavond hoe oud bent u?\n`);
if (leeftijd > 18) {
    var answer = readlineSync.question(`Mag ik uw ID zien?\n`);
}
else {
    console.log(`Dan mag je niet naar binnen\n`);
    return;
}

if (answer === `ja`) {
    console.log(`Kom binnen!\n`);
}
else {
    console.log(`Dan mag je niet naar binnen\n`);
}
