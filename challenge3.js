// Défi 3 : Somme des nombres positifs

// description 

// Somme des nombres positifs" semble consister à trouver la somme des nombres positifs dans un tableau donné, tout en excluant le plus petit et le plus grand nombre de ce tableau.

// Définition du tableau
let tableau = [10, 15, 18, 1, 8, 5];


function sommeTablue(tableau) {

    let min = Math.min(...tableau);
    let max = Math.max(...tableau);

    console.log(min, max);

    const resultat = tableau.reduce((valeurInitiale, element) => {
        return element != min && element != max ? valeurInitiale + element : valeurInitiale;
    }, 0);

    return resultat;
}

console.log(sommeTablue(tableau)); // Résultat attendu : 38
console.log(sommeTablue([6, 2, 1, 1, 10, 8])); // Résultat attendu : 16
