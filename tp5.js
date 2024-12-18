function functionConstante() {
    return 33;
}

console.log(functionConstante());

function bonjourUntel(untel) {
    console.log('Bonjour ' + untel);
}

bonjourUntel('John');

function calcul(a, b) {
    if (!a || !b)
        throw ("Erreur : les deux paramètres doivent être définis");
    if (typeof a !== 'number' || typeof b !== 'number')
        throw ("Erreur : les deux paramètres doivent être des nombres");
    return a * b + a + b
}

const calculNombres = calcul(2, 3);
console.log(calculNombres);

const calculChainesCaracteres = calcul('ab', 'cd');
console.log(calculChainesCaracteres);


function controlTableau(tableau) {
    return tableau.every(element => typeof element === 'number');
}
console.log(controlTableau([1, 2, 3]));
console.log(controlTableau(['a', 'b', 'c']));
console.log(controlTableau([]));

function moyenne(tableau) {
    if (!Array.isArray(tableau))
        throw ("Veuillez ajouter un tableau en paramètre");
    if (!tableau.every(element => typeof element === 'number')) {
        throw ("Le tableau contient un élement qui n'est pas un nombre");
    }
    if (tableau.length === 0) {
        return 0;
    }
    try {
        total = tableau.reduce((a, b) => a + b);
        return total / tableau.length;
    } catch (error) {
        throw ("Erreur lors du calcul de la moyenne");
    }
}

console.log(moyenne([1, 2, 3]));
console.log(moyenne([1, 2, 'a']));
console.log(moyenne([]));

function maj(string) {
    firstLetter = string.charAt(0);
    firstLetter = firstLetter.toUpperCase();
    return firstLetter + string.slice(1);
}

console.log(maj('bonjour'));

function phraseMaj(string) {
    let phrase = string.split(' ');
    for (let i = 0; i < phrase.length; i++) {
        phrase[i] = maj(phrase[i]);
    }
    return phrase.join(' ');
}

console.log(phraseMaj('bonjour le monde'));

function multiply(n, nb) {
    return nb * n;
}

function myltiplyBy2(n) {
    return multiply(n, 2)
}

const result1 = myltiplyBy2(5);
const result2 = myltiplyBy2(2);
console.log(result1);
console.log(result2);

function creerGestionnaire() {
    const taches = [];

    return {
        ajouterTache(description) {
            taches.push({ description: description, termine: false });
        },
        terminerTache(index) {
                taches[index].termine = true;
        },
        afficherTaches() {
            console.log(taches);
        }
    };

}

const gestionnaire = creerGestionnaire();
gestionnaire.ajouterTache('Savoir coder');
gestionnaire.ajouterTache('Être expert');
gestionnaire.terminerTache(0);
gestionnaire.afficherTaches()

console.log(moyenne([1, 2, 3, 4, 5]));
console.log(moyenne([1, 2, 3, 4, "cds"]));
console.log(moyenne(1));



