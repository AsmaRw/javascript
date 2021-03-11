
var limit = 100;

for (i = 0; i <= limit; i++) {
    if (i % 7 !== 0) {

    }
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