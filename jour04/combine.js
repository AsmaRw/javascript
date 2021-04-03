/*## 02 - Combine

- Créez une variable `cat2` qui reprend la structure de cat : mettez d'autres valeurs pour chaque clé
- Créez une variable `cats` qui contient un tableau contenant les variables `cat` et `cat2`
- Affichez la valeur de `age` de `cat` (il y a deux façons de le faire) dans la console
- Affichez la valeur de `isCute` de `cat2` (il y a deux façons de le faire) dans la console*/


var cat = {
    name: "Garfield",
    age: 3,
    isCute: true
}
var cat2 = {
    name: "Sophie",
    age: 45,
    isCute: false
}


var cats = [cat, cat2]


console.log("Age of cat :", cat.age)
console.log("Age of cat 2 :", cats[0].age)


console.log("cat2 isCute? :", cat2.isCute);
// console.log("cat2 isCute? :", cat2["isCute"])
// console.log("cat2 isCute? :", cats[1].isCute)
// console.log("cat2 isCute? :", cats[1]["isCute"])
