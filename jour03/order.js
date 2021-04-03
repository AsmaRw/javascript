/*## 04 - Order

- Créez une variable `numbers` qui contiendra un tableau avec les valeurs `4`, `10`, `8`, `12` et `6`
- Inversez l'ordre des éléments de `numbers` puis affichez le résultat
- Rangez les éléments de `numbers` dans l'ordre croissant puis affichez le résultat*/



var numbers = [4, 10, 8, 12, 6]

console.table(numbers)

console.log(numbers.length)

// renverser les nombre :

numbers.reverse()

console.table(numbers)

// dans l'ordre croissant :

numbers.sort((a,b) => a - b)

console.table(numbers)