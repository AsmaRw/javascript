/*## 08 - Condition III

- Combinez les deux conditions précedents (exercices 6 et 7)
- Afficher "Everything is good" si les deux conditions sont vraies
- Afficher "Something is good" si une des deux conditions est vraie
- Afficher "Nothing is good" si aucune des deux conditions n'est vraie*/

var limit = 50
var score = 64
var password = "azerty"

if (score >= limit && password.length > 5){
    console.log("Everything is good")
}

else if(score >= limit || password.length > 5){ 
    console.log("Something is good")
}

else{
    console.log("Nothing is good")
}