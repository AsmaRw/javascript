/*### 05 - Des setiob

A l'aide d'un papier et crayon, devinez ce qu'affiche le code suivant (interdit d'executer le code !)*/


// i !== 0 ? oui
// j'affiche 12
// i ! == 0 ? oui
// j'affiche 24
// i ! == 0 ? oui
// j'affiche 33
// i !== 0 ? oui
// j'affiche 39
// i ! == 0 ? non
// j'affiche 42
// j'affiche 0

var box1 = 12;
for (var i = 12; i !== 0; i = i - 3) {
    console.log('box1 =',box1);
    box1 = box1 + i;
}
console.log('box1 =',box1);
console.log('i', i);