// - Créez une fonction `launchDice` qui reçoit un paramètre `numberOfDice`
// - La fonction va lancer aléatoirement des dés, une quantité de fois égale à la valeur de `numberOfDice` et retourner leur somme
// - Appelez la fonction deux fois avec pour argument 5, une fois pour un `joueur1` et l'autre pour le `joueur2`.
// - Comparez les valeurs des deux joueurs et Affichez le joueur gagnant (celui ayant le plus grand score)

function launchDice(numberOfDice){
    var total = 0
    for(var i= 1; i<= numberOfDice; i++){
    result = Math.floor(Math.random() *6) +1
    console.log("valeur ajouter ="+ result)
    total = total+ result
    }
    return(total)
}

console.log(launchDice(5))

var player1 = launchDice(5)
var player2 = launchDice(5)
console.log(player1)
console.log(player1)
if (player1 < player2){
    console.log("player2 win")
} else if(player1 > player2){
    console.log("player1 win")
}else{
    console.log("draw")
}

