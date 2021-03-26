// Vous connaissez le jeu du **Pendu** ? Aujourd'hui on va le coder en utilisant le module npm prompt !

// Petit rappel des règles :

// - Un mot mystère est proposé, chaque lettre est indiquée par un tiret bas `_`
// - Le joueur a dix tentatives pour deviner le mot mystère, et pour chaque tentative il propose une lettre :
//     - Si la lettre est dans le mot mystère, chaque lettre correspondante est affichée
//     - Si la lettre n'est pas dans le mot, le message suivant s'affiche : "oups... plus que x chances !"
// (x sera remplacé par le nombre de tentatives restantes)

// ⇒ Afficher un message en cas de victoire ou défaite

var prompt = require("prompt")

prompt.start()

