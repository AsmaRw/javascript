/* ### 04 - Des boites

A l'aide d'un papier et crayon, devinez ce qu'affiche le code suivant (interdit d'executer le code !)*/



// box1 = 12
// box2 = 5
// box1 > 0 ? oui
// j'affiche box2: 5
// box1 -= 10 => box1 = 2
// j'affiche box1: 2
// box1 > 0 ? oui
// j'affiche box2: 5
// box1 -= 10 => box1 = -8
// j'affiche box1: -8
// box1 > 0 ? non


var box1 = 12;
var box2 = 5;
while (box1 > 0) {
    console.log(box2);
    box1 -= 10;
    console.log(box1);
}