// - Le joueur démarre avec un score de 0
//     - La banque démarre avec un score aléatoire entre 16 et 21, qui restera
// caché jusqu'à la fin de la partie
//     - À chaque tour, on propose au joueur de tirer une carte et il peut:
// - Tirer une carte de valeur aléatoire entre 1 et 10 :
// cette valeur est ajoutée à son score.Si son score est supérieur à 21,
//     la partie se termine automatiquement, sinon on passe au tour suivant
//         (option "draw")
//         - Passer son tour uniquement si son score est supérieur à 16
// ce qui met fin à la partie(option "pass")
//     - À la fin de la partie, on annonce le score du joueur
// et de la banque ainsi que le résultat:
// - Le score du joueur est supérieur à 21 ⇒ il perd
//     - Le score du joueur est 21 ⇒ il fait un "Black Jack" et gagne
//         - Le score du joueur est supérieur au score de la banque ⇒ il gagne
//             - Le score est inférieur ou égal au score de la banque ⇒ il perd