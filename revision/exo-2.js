// ## 02 - XOXO

// - Créez une fonction `countEach` qui reçoit une string contenant des x et des o en paramètre
// - La fonction retourne true si il y a autant de x que de o, sinon elle retourne false
// - Vérifiez que l'argument "xxxoooox" déclenche un true, et que "xox" déclenche un false

function countEach(str) {

    var valX = 0;
    var valO = 0;

    for (var i = 0; i < str.length; i++) {
        // console.log(str.charAt[i]);

        if (str.charAt(i) === "x") {

            valX = valX + 1;
            console.log("valX = ", valX);
        } else {
            valO = valO + 1;
            console.log("valO = ", valO);

        }
    }

    console.log(valX);
    console.log(valO);


    if (valX === valO) {
        console.log(true);
    } else {
        console.log(false);
    }

}

// countEach("xoox");
// countEach("xox");
countEach("xoooxx");


