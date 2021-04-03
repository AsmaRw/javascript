/*## ⭐ Bonus

- Créez une boucle qui part de 0 et s'arrête à 100
- À chaque itération :
    - Si `i` est un multiple de 3 ⇒ affichez "fizz"
    - Si `i` est un multiple de 5 ⇒ affichez "buzz"
    - Si `i` est un multiple de 3 et 5 ⇒ affichez "fizzbuzz"
    - Si `i` est un multilple de 7 ⇒ ne l'affichez pas
    - Sinon, affichez la valeur de i */

var limit = 100;

for (i = 0; i <= limit; i++) {

    if (i % 7 !== 0) {

        if (i = i % 3 === 0 && i % 5 === 0) {
            console.log("fizzbuzz", i);
        }
        else if (i % 5 === 0) {
            console.log("buzz", i);
        }
        else if (i % 3 === 0) {
            console.log("fizz", i)
        }
        else {
            console.log("value of i", i)

        }
    }
    console.log("break")
}
