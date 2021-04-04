/* 01 - Comptons
A l'aide d'une boucle while, affichez les nombres paires entre 50 et 200*/


var i = 50;
while (i <= 200) {
    console.log(i);
    i = i + 2;
}

var i = 50;
while (i <= 200) {
    if (i % 2 === 0) {
        console.log(i);
    }
    i++;
}