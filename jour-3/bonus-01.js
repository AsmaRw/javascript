// - Créez une boucle qui part de 0 et s'arrête à 100
// - À chaque itération :
//     - Si `i` est un multiple de 3 ⇒ affichez "fizz"
//     - Si `i` est un multiple de 5 ⇒ affichez "buzz"
//     - Si `i` est un multiple de 3 et 5 ⇒ affichez "fizzbuzz"
//     - Si `i` est un multilple de 7 ⇒ ne l'affichez pas
//     - Sinon, affichez la valeur de i



for (i=0; i<=100; i++) {
    if(i = i % 3){
        console.log("frizz");
        break;
    }
    else if(i = i % 5){
        console.log("buzz");
        break;
    }
    else if(i = i % 3 && i % 5 ){
        console.log("fizzbuzz");
        break;
    }
    else if(i % 7){
        console.log("..");
        break;
    }
    else{
        console.log(i)
        break;
    }
}