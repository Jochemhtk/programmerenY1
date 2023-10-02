var A = 0;
var B = 1;

while (A < 10000001) {
    
    console.log(`${A}\n${B}`)
    A+=B;
    B+=A;
};