// ## 03 - Palindrome

// - Créez une fonction `checkPal` qui reçoit une string en paramètre
// - La fonction retourne "Palindrome !" si le mot se lit dans les deux sens, sinon elle retourne "Nope"
// - Vérifiez que vous obtenez un positif avec l'argument "racecar" mais pas avec "laptop"
// function checkPal(string){
//     var tab = string.split(" ")
//     console.log(tab)
//     tab.reverse();
// }

function checkPal(word){
    var sentenceReverse = word.split("").reverse().join('')
    console.log(sentenceReverse)

    if(word == sentenceReverse){
        console.log("true")
    }else {
        console.log("false")
    }
}

checkPal("racecar")

// je veux un mot 
// puis declarer le meme mot inverser 
// puis les comparer 

// je creer une fonction 
// je recois un string comme parametre dans ma faction 
// dans une nouvelle variable je transforme le string en array et je l'inverse avec reverse
// je comparre cette nouvelle variable avec le string que j'avais au debut
// j'affiche palindrome si ils sont egeaux et nope si ils ne sont pas 
// appel la fonction
