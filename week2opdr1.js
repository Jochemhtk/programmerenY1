
let huidigeTijd = new Date();
console.log(huidigeTijd.getHours());


if(huidigeTijd.getHours() < 16 && huidigeTijd.getHours() > 9){
    console.log(`Ik moet op school zijn`);
}
else    {
    console.log(`Ik hoef niet op school te zijn`);
}