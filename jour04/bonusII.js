/*## ⭐⭐ Bonus II

- Créez une fonction `launchDice` qui reçoit un paramètre `numberOfDice`
- La fonction va lancer aléatoirement des dés, une quantité de fois égale à la valeur de `numberOfDice` et retourner leur somme
- Appelez la fonction deux fois avec pour argument 5, une fois pour un `joueur1` et l'autre pour le `joueur2`.
- Comparez les valeurs des deux joueurs et Affichez le joueur gagnant (celui ayant le plus grand score)*/


function launchDice(numberOfDice) {

    var min = 1

    var max = 6

    var total = 0

    for (var i = 0; i < numberOfDice; i++) {

        var dice = Math.floor(Math.random() * (max - min + 1) + min)

        total += dice;
    }

    return total
}

var joueur1 = launchDice(5)

var joueur2 = launchDice(5)

if (joueur1 > joueur2) {

    console.log("Joueur 1 a gagné")

} else if (joueur1 < joueur2) {

    console.log("Joueur 2 a gagné")

} else {

    console.log("Egalité")

}

