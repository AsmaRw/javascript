// - Créez une variable `numbers` qui contiendra un tableau avec les valeurs `4`, `10`, `8`, `12` et `6`
// - Inversez l'ordre des éléments de `numbers` puis affichez le résultat
// - Rangez les éléments de `numbers` dans l'ordre croissant puis affichez le résultat

var numbers = [4, 10, 8, 12, 6];
console.log(numbers)
console.log(numbers.length)

numbers.reverse();
console.log(numbers)

numbers.sort((a,b) => a - b);
console.log(numbers)