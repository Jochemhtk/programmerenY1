function multiplicationTable(number){
    for(let i = 1; i <= 10; i++) {
        const result = i * number;
        console.log(`${number} * ${i} = ${result}`);
    }
}

for(let i = 1; i <= 50; i++) {
    multiplicationTable(i)
}
