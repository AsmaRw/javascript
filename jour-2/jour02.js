var integer = 102;
var float = 13.9;
console.log(integer, float);

var basic = 34;
var stringified = basic;
stringified = basic.toString();
console.log(stringified);

var num = 1.5
var rounded = Math.round(1.5);
console.log(rounded);

var test = 12;
var bis = 5;
console.log(test + bis);
console.log(test - bis);
console.log(test * bis);
console.log(test / bis);
console.log(test ** bis);
console.log(test % bis);

var test = 143;
var bis = 319;
console.log(test > bis);
console.log(test < bis);
console.log(test >= bis);
console.log(test <= bis);
console.log(test == bis);
console.log(test === bis);
console.log(test != bis);
console.log(test !== bis);

var limit = 50;
var score = 64;
if (score >= limit){
    console.log("OK good !");
}
else {
    console.log("Oh noooo...");
}

var password = "azerty";
console.log(password.length);
if (password.length > 5){
    console.log("The password is secure");
}

var limit = 50;
var score = 64;
var password = "azerty";
console.log(password.length);

if (score >= limit && password.length > 5){
    console.log("Everything is good");
}

else if(score >= limit || password.length > 5){ 
    console.log("Something is good");
}

else{
    console.log("Nothing is good");
}

// bonus - Créez une variable `random` qui contient une valeur aléatoire entre 1 et 6 (nombres entiers seulement)
// affichez "Yes I win !" si `random` est égal à 6, et "So close..." dans les autres cas

var random = Math.random();
var min = 1;
var max = 6;
Math.floor(Math.random() * (max - min + 1)+ min);

if (Math.random = 6){
    console.log("Yes I win !")
}
else {
    console.log("So close !")
}