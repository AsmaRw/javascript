/*## 04 - Compare

- Créez une fonction `compare` qui reçoit deux paramètres `num1` et `num2`
- Dans la fonction, à l'aide d'une condition, affichez selon les cas :
    - "`num1` is bigger" si `num1` est plus grand
    - "`num2` is bigger" si `num2` est plus grand
    - "both are the same" si ils sont égaux
- Appelez votre fonction plusieurs fois avec des chiffres différents pour vérifier les résultats*/

function compare(num1, num2) {

    if (num1 > num2) {

        console.log(num1, 'is bigger')

    } else if (num2 > num1) {

        console.log(num2, 'is bigger')

    } else if (num1 === num2) {

        console.log(num1, 'and', num2, "are same")
    }
}

compare(99,99)
//compare(87, 86)
//compare(78, 837)