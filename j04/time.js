/*## 06 - Time

- Créez une fonction `format` qui reçoit un paramètre `num` qui représente des secondes
- Faites en sorte que la fonction retourne un format `heures : minutes : secondes`
- Appelez votre fonction avec l'argument `3700` et vérifiez que vous obtenez `1:1:40`*/


function format(num) {

    var days = 0

    var hours = 0

    var minutes = 0

    var seconds = 0


    for (var i = 0; i < num; i++) {

        seconds++

        if (seconds === 60) {

            minutes++

            seconds = 0
        }

        if (minutes === 60) {

            hours++

            minutes = 0
        }

        if (hours === 24) {
            days++

            hours = 0

        }

    }
    console.log(`${hours} : ${minutes} : ${seconds}`)
}

format(3700)

