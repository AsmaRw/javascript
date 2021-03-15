// ## 01 - Alphabet

// - Créer une fonction `sortLetters` qui reçoit une string en paramètre
// - La fonction retourne une string avec les mêmes lettres, dans l'ordre alphabétique
// - Appelez votre fonction avec "konexio" comme argument et vérifiez que vous obtenez "eiknoox"


function sortLetters(str){
    var tab = str.split("")
    tab.sort()
    return tab.join("")
}

console.log(sortLetters("konexio"))