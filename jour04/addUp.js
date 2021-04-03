/*## 05 - Add Up

- Créez une fonction `addUp` qui reçoit un paramètre `num`
- À l'aide d'une boucle, ajouter les chiffres de 1 à `num`
- Appelez votre fonction avec le chiffre 12 et vérifiez que vous obtenez 78*/


function addUp(num) {
    var total = 0;

    for (var i = 1; i <= num; i++) {
        total += i
    }
        return total
}

var result = addUp(12)
console.log(result)
addUp(12)