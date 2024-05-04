// Défi 4 : Convertir un nombre en un tableau inversé de chiffres

// Description

// Étant donné un nombre aléatoire non négatif, vous devez renvoyer les chiffres de ce nombre dans un tableau dans l'ordre inverse

function Convert_number_to_reversed(randomNumber) {

    let string = randomNumber.toString();
    let tableau = string.split("").map(Number);
    tableau = tableau.reverse();

    return tableau;
}

console.log(Convert_number_to_reversed(68749231));
console.log(Convert_number_to_reversed(12345678));
