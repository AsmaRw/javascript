/*## ⭐⭐⭐ Bonus III

- Créez une variable `roundedNumber` de valeur `3.6`
- En utilisant uniquement `Math.floor()`, `Math.ceil()`, 
-des opérations mathématiques et un `if () {} else {}` reproduisez le comportement de `Math.round()`
- Changez la valeur de `roundedNumber` 
-pour tester l'algorithme que vous avez créé avec les valuers `3.3`, `3.8` et `12.4` 
-vérifier que ça marche bien dans tous les cas.*/


var roundedNumber = 3.6
// var roundedNumber = 3.3
// var roundedNumber = 3.8
// var roundedNumber = 12.4

var decimal = roundedNumber - Math.floor(roundedNumber)

console.log("My decimal part :", decimal)

var result = 0;

if (decimal >= 0.5) {
    result = Math.ceil(roundedNumber)
} else {
    result = Math.floor(roundedNumber)
}

console.log('My result :', result)


/*- Une fois fini, rajoutez un autre algorithme pour obtenir le même resultat
-mais en convertissant `roundedNumber` en string et en utilissant `substring`*/



var strNum = roundedNumber.toString()

console.log("strNum.indexOf :", strNum.indexOf("."))

var position = strNum.indexOf(".")

console.log("strNum substring :", strNum.substring(position))

var strDecimal = "0" + strNum.substring(position)

var strDecimal = "0" + strNum.substring(position)

var result = 0
if (strDecimal >= 0.5) {
	result = Math.ceil(roundedNumber)
}
else {
	result = Math.floor(roundedNumber)
}

console.log(result)
