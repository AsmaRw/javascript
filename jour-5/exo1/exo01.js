// ## 01 - Calculator

// - Créez une fonction `calculate` qui recevra trois paramètres 
// (deux nombres entiers et un opérateur `+`, `-`, `x`, `/` ou `%`)
// - Créez une condition (méthode au choix) pour chaque valeur possible 
// de l'opérateur qui retournera le résultat du calcul
// - Affichez le résultat dans la console 
// (vérifiez que pour les arguments `5`, `x` et `4` vous obtenez bien `20`)
// - Vous devrez donner les arguments dans le terminal en appelant 
// le programme alors attention aux paramètres !

//     ⇒ Si vous ne donnez pas trois arguments, le programme doit afficher "error" dans la console
function calculate(num1,num2, operators){
    var firstInput = parseInt(num1)
    var secondInput  = parseInt(num2)
    // var thirdInput 
    // console.log(firstInput, secondInput)

    if(Number.isInteger(firstInput) == false || Number.isInteger(secondInput) == false ){
        console.log("it's not a number")
    }
    else if(operators === '*'|| operators === 'x'){
        console.log(firstInput * secondInput)
    }else if(operators === '+'){
        console.log(firstInput + secondInput)
    } else if(operators === '-'){
        console.log(firstInput - secondInput)
    } else if(operators === '%'){
        console.log(firstInput % secondInput)
    }else if(operators === '/'){
        console.log(firstInput / secondInput)
    }else{
        console.log("error")
    }
}


calculate(process.argv[2], process.argv[4], process.argv[3])













