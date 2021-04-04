/*## ⭐ Bonus

- Créez une fonction `generatePassword` qui reçoit un paramètre `num`
- La fonction génère un mot de passe aléatoire, avec autant de lettres que la valeur de `num`
- Le mot de passe contiendra uniquement des lettres majuscules
- Si `num` est plus petit que 6 ou plus grand que 15, la fonction retourne "error"*/


var lettres = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

function generatePassword(num) {

    var password = []

    if (num < 6 || num > 15) {

        return 'error'

    }
    else {

        for (var i = 0; i <= num; i++) {

            var max = lettres.length - 1
            var b = Math.floor(Math.random() * (max + 1))

            password.push(lettres[b])
        }

        return password.join("")

    }
}
var final = generatePassword(12)
// var final= generatePassword(5)
// var final= generatePassword(16)

console.log(final)

