// - Créez une variable `sentence` valant "Hello Konexio !"
// - A l'aide d'une boucle for et sans utilisez la fonction .reverse(), 
// faites en sorte d'afficher l'inverse de votre variable `sentence` ("! oixenoK olleH")

var sentence = "Hello Konexio !"
var tab = []
console.log(sentence.length)

for (var i= sentence.length - 1; i>= 0; i--){
   tab.push(sentence[i])
}

console.log(tab.join(''));