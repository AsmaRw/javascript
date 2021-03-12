// - Créez une fonction `generatePassword` qui reçoit un paramètre `num`
// - La fonction génère un mot de passe aléatoire, avec autant de lettres que la valeur de `num`
// - Le mot de passe contiendra uniquement des lettres majuscules
// - Si `num` est plus petit que 6 et plus grand que 15, la fonction retourne "error"

function generatePassword(num){
    var password = ""
    if ( num < 6 || num > 15){
        console.log("ok")
    }
    else {
        for(i=1; i<=num; i++)
        var roundedNumber = Math.floor(Math.random() * (90+ 65 + 1) + 65);
        var roundedLetter = String.fromCharCode(roundedNumber);
        password = roundedLetter + password;
        console.log("error");
    }

    console.log(password)

    generatePassword(15)

}