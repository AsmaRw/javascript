/*## 01 - Object

- Créez une variable `cat` contenant les clés suivantes : `name` de valeur `"Garfield"`, `age` de valeur `3` et `isCute` de valeur `true`
- Affichez `cat` dans la console
- Affichez la valeur de `age` dans la console
- À l'aide d'une condition, affichez "So cute !" si la valeur de `isCute` est `true`*/


var cat = {
    name : "Garfield",
    age : 3,
    isCute : true
}

console.log(cat)
//console.log(cat.age)
//console.log(cat["age"])

if(cat.isCute === true){

    console.log('So cute !')

} else {
    
}
