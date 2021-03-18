// ## 03 - Palindrome

// - Créez une fonction `checkPal` qui reçoit une string en paramètre
// - La fonction retourne "Palindrome !" si le mot se lit dans les deux sens, sinon elle retourne "Nope"
// - Vérifiez que vous obtenez un positif avec l'argument "racecar" mais pas avec "laptop"

function checkPal(word){
    var sentence = word.split("").reverse().join("").toLowerCase()
    console.log(sentence)
    console.log(word)

    if(word.toLowerCase() == sentence){
        console.log("Palindrome !")
    }else{
        console.log("Nope")
    }
    console.log(word)
}

checkPal("Kayak")