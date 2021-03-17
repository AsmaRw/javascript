// ## 04 - Guess

// - Installez et importez le package `prompt` (n'oubliez pas d'initialiser !) et lancez les méthodes de `prompt`
// - Créez une variable `mysteryNum` contenant une valeur aléatoire (un nombre entier entre 1 et 100)
// - Créez une fonction `play` qui demande au joueur "Quel est le nombre mystère ?" puis :
//     - si le joueur donne une valeur incorrecte (pas un nombre) on affiche "error" et on relance la fonction `play`
//     - si le joueur donne un chiffre trop petit, on affiche "C'est plus !" et on relance la fonction `play`
//     - si le joueur donne un chiffre trop grand, on affiche "C'est moins !" et on relance la fonction `play`
//     - si le joueur donne le bon nombre, on affiche "Bravo !!"
// - Appelez la fonction
// - Testez le jeu

var mysteryNum = Math.floor(Math.random() * (100 - 1 + 1)+ 1)

var prompt = require("prompt")

prompt.start()

function play(){

    prompt.get({name : "number", description : "Quel est le nombre mystère ?"}), function (err, res){

        if(res.number !== mysteryNum){

            return onErr(err)

            // play();

        } else if(res.number < mysteryNum){

            console.log("C'est plus !")

            play();

        }else if(res.number > mysteryNum){

            console.log("C'est moins !")

            play();

        }else if(res.number === mysteryNum){

            console.log("Bravo !!")
        }
    }
}


play();

  
