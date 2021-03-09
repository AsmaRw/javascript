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
Math.floor(random * (max - min + 1)+ min);

if (random === max){
    console.log("Yes I win !")
}
else {
    console.log("So close !")
}

var month = "marchr";

switch (month) {
	case "january": 
		console.log(" winter!");
		break;
	case "february": 
		console.log("winter!");
		break;
	case "march": 
		console.log("spring!");
		break;
	case "april": 
		console.log("spring!");
		break;
    case "mai": 
		console.log("spring!");
		break;
	case "june": 
		console.log("summer!");
		break;
	case "jully": 
		console.log("summer!");
		break;
	case "august": 
		console.log("summer!");
		break;
    case "september": 
		console.log("automn!");
		break;
	case "october": 
		console.log("automn!");
		break;
	case "november": 
		console.log("automn!");
		break;
	case "december": 
		console.log("winter!");
		break;
	default: 
		console.log("That's not a month...");
}

var roundedNumber = 6.6;

var number = Math.floor(roundedNumber); 

var results = roundedNumber - number;

console.log(results);

if (results <= 0.5)
{
    console.log(Math.floor(roundedNumber));
}
else {
    console.log(Math.ceil(roundedNumber));
}
