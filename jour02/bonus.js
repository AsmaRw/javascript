/*## ⭐ Bonus

- Créez une variable `random` qui contient une valeur aléatoire entre 1 et 6 (nombres entiers seulement)
- À l'aide d'une condition
-affichez "Yes I win !" si `random` est égal à 6, et "So close..." dans les autres cas*/

var random = Math.random()
var min = 1;
var max = 6;
Math.floor(random * (max - min + 1)+ min);

if (random === max){
    console.log("Yes I win !")
}
else {
    console.log("So close !")
}