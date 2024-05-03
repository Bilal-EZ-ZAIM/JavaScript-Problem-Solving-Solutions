// Défi 1 // Pair ou impair

// Description

// Créez une fonction prenant un entier en argument et renvoyant "Pair" pour les nombres pairs et "Impair" pour les nombres impairs.

function pair_ou_impair(nombre) {
    return nombre % 2 === 0 ?
        `le nombre ${nombre} est Pair` :
        `le nombre ${nombre} est Impair`;
}

console.log(pair_ou_impair(2));
console.log(pair_ou_impair(21));
console.log(pair_ou_impair(4));
console.log(pair_ou_impair(3));
console.log(pair_ou_impair(25));
console.log(pair_ou_impair(29));
console.log(pair_ou_impair(28));
console.log(pair_ou_impair(32));
