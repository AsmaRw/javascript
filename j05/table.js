/*## 02 - Table

- Créez une fonction `multiply` qui recevra un paramètre (un nombre entier)
- Faites en sorte que la fonction affiche la table de multiplication de ce nombre dans la console (de 1 à 10) ligne par ligne
- Vous devrez donner l'argument dans le terminal en appelant le programme

    ⇒ Si vous ne donnez pas d'argument, le programme doit afficher "error" dans la console*/

function multiply(num) {

    var firstInput = parseFloat(num)

    if (Number.isInteger(firstInput) == false) {

        console.log("it's not a number integer")

    } else {

        for (var i = 1; i <= 10; i++) {

            console.log(firstInput, "x", i, '=', firstInput * i)

        }

    }
}

//multiply(num)



//table.utils


var tableUtils = require("./table-utils")
// console.log(tableUtils)

var multiplyFunc = tableUtils.multiply

var addtionFunc = tableUtils.addition

if (process.argv.length === 3) {

    var num = parseInt(process.argv[2]);

    //multiplyFunc(num)

    addtionFunc(num)

} else {
    console.log("Error")
}
