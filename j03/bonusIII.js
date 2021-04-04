/*## ⭐⭐⭐ Bonus III

- Créez un tableau avec le nom de chacun de vos camarades de promo
- Affichez aléatoirement le nom de la personne tiré au sort*/

var students = ['anna', 'yan', 'gab', 'julie', 'sara']

console.table(students)

//console.log(students[3])

var min = 0

var max = students.length -1

var random = Math.random() // entre 0 et 0.99

var indexRandom = Math.floor(random * (max + 1))

console.log('I choose :',students[indexRandom])

