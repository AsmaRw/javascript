// - Créez une fonction `launchDice` qui reçoit un paramètre `numberOfDice`
// - La fonction va lancer aléatoirement des dés, une quantité de fois égale à la valeur de `numberOfDice` et retourner leur somme
// - Appelez la fonction deux fois avec pour argument 5, une fois pour un `joueur1` et l'autre pour le `joueur2`.
// - Comparez les valeurs des deux joueurs et Affichez le joueur gagnant (celui ayant le plus grand score)

function launchDice(numberOfDice){
    var joueur1
    var joueur2
    var min = 1;
    var max = 6;
    for( i= 0; i<= numberOfDice; i++){
    var random = Math.random() * (max - min) + min
    joueur1 = random + numberOfDice
    joueur2 = random + numberOfDice
    }
    if(joueur1 < joueur2){
        console.log ("1 is better")
    }
    else if (joueur1 > joueur2){
        console.log ("2 is better")
    }
    console.log(joueur1, joueur2)
}

launchDice()

