// Défi 2 // Somme des nombres positifs

// Description

// Vous obtenez un tableau de nombres et retournez la somme de tous les nombres positifs.

let tableau = [1, -5, 18, 10, -8, 5];

// Méthode 1

function somme_des_positifs(tableau) {

    const resultat = tableau.reduce((valeurInitiale, element) => {
        return element > 0 ? valeurInitiale + element : valeurInitiale;
    }, 0);

    return resultat;

}

console.log(somme_des_positifs(tableau));


// Méthode 2 
let resultat = 0;
function sommeDesPositifs(tableau) {

    for (let i = 0; tableau.length > i; i++) {

        if (tableau[i] > 0) {
            resultat += tableau[i];
        }
    }

    return resultat;

}

console.log(sommeDesPositifs([1, -5, 18, 10, -8, -5, 25]));


// Méthode 3
function sommeDesPositifs3(tableau) {

    const resultat = tableau.filter(element => element > 0)
        .reduce((valeurInitiale, element) => valeurInitiale + element, 0);
    return resultat;

}

console.log(sommeDesPositifs3(tableau));
