// opgave 1

function berekenInhoud(hoogte, breedte, diepte) {
    let kubus = hoogte * breedte * diepte;
    return kubus
}

let kubusInhoud = berekenInhoud(10, 5, 10);
console.log(kubusInhoud);

// opgave 2

function berekenCylinder(radius, hoogte) {
    let cylinder = radius * radius * Math.PI * hoogte;
    return cylinder
}

let cylinderInhoud = berekenCylinder(10, 15);
console.log(cylinderInhoud)

// opgave 3

function phytagoras(A, B) {
    let c = Math.sqrt(A * A + B * B)
    return c
}

let phytResultaat = phytagoras(15, 10);
console.log(phytResultaat);

// opgave 4

function average(a, b, c, d, e, f, g) {
    let z = a * b * c * d * e * f * g / 7;
    return z
}

let averageResultaat = average(1, 3, 6, 12, 54 ,32, 9)
console.log(averageResultaat);