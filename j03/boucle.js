/*## 05 - Boucle

- Créez une variable `total` de valeur `0` et une variable `limit` de valeur `10`
- À l'aide d'une boucle for allant de`0` à `limit`, augmentez la valeur de `total` en lui ajoutant la valeur de `i` (i est l'index de votre boucle)
- Affichez la valeur de `total` */


var total = 0 

var limit = 10

for (var i = 0; i <= limit ; i++){
    
    total += i

    console.log("total =", total)


}
console.log(total)

