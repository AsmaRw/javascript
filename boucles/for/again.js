/*### 06 - Encore des boites

A l'aide d'un papier et crayon, devinez ce qu'affiche le code suivant (interdit d'executer le code !)*/


// Box 1 = 0
// Box 2 = 3
// i = 0
// i > -4 ? oui
// i % 2 === 0 ? oui
// j'affiche box1 + i => 0
// box2++ => box 2 = 4
// i-- => i = -1
// i > -4 ? oui
// i % 2 === 0 ? non
// j'affiche box2 + i => 3
// box1-- => box 1 = -1
// i-- => i = -2
// i > -4 ? oui
// i % 2 === 0 ? oui
// j'affiche box1 + i => -3
// box2++ => box 2 = 5
// i-- => i = -3
// i > -4 ? oui
// i % 2 === 0 ? non
// j'affiche box2 + i => 0
// box1-- => box 1 = -2
// i-- => i = -4
// i > 4 ? non
// j'affiche box1: -2
// j'affihce box2:: 5
// j'affiche i: -4


var box1 = 0;
var box2 = 3;
for (var i = 0; i > -4; i--) {
    if (i % 2 === 0) {
        console.log('box1 + i =',box1 + i);
        box2++;
    } else {
        console.log('box2 + i =',box2 + i);
        box1--;
    }
}

console.log('box1',box1);
console.log('box2',box2);
console.log('i',i);