/*## 03 - Add and Remove

- Créez une variable `objects` qui contiendra un tableau avec les valeurs `"pen"`, `"book"` et `"lamp"`
- Ajoutez `"chair"` au début du tableau puis affichez le résultat
- Enlevez `"lamp"` puis affichez le résultat
- Ajoutez `"laptop"` à la fin du tableau puis affichez le résultat
- Enlevez `"chair"` puis affichez le résultat*/


var objects = ["pen", "book","lamp"]

// ajouter au debut d'un tableau :

objects.unshift("chair")

console.table(objects)

// enlever un element a la fin d'un tableau :

objects.pop("lamp")

console.table(objects)

// ajouter a la fin d'un tableau :

objects.push("laptop") 

console.table(objects)

// enlever un element au debut d'un tableau :

objects.shift()

console.table(objects)