// ## 02 - Combine

// - Créez une variable `cat2` qui reprend la structure de cat : mettez d'autres valeurs pour chaque clé

// - Créez une variable `cats` qui contient un tableau contenant les variables `cat` et `cat2`
// - Affichez la valeur de `age` de `cat` dans la console
// - Affichez la valeur de `isCute` de `cat2` dans la console

var cat2 = {
    name: "Sophie",
    age: 45,
    isCute: false
}
var cat = {
    name: "Garfield",
    age: 3,
    isCute: true
};



// var cats= [ "Garfield", "Sophie", 3, 45, false, true];

// var cats = [{
//     name: "Sophie",
//     age: 45,
//     isCute: false
// }, {
//     name: "Garfield",
//     age: 3,
//     isCute: true
// }];

var cats= [ cat, cat2 ]; 

console.log(cat.age);

console.log(cat2.isCute);