/* ### 02 - Try again

Créez une variable `dice` valant null et une variable `count` valant 0

Tant que `dice` ne vaut pas 6, assignez le résultat d'un lancé de dé aléatoire à dice et ajoutez 1 à `count`

Affichez `count`, le nombre de fois qu'il vous a fallu lancer le dé pour faire un 6*/

var dice = null;
var count = 0;
var min = 1;
var max = 6;
while (dice !== 6) {
    dice = Math.floor(Math.random() * (max - min + 1) + min); // 1 2 3 4 5 ou 6
    count++;
}

console.log(count);