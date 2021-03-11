var roundedNumber = 12.4;

var result = 0;

if (roundedNumber >= 0.5) {
    result = Math.ceil(roundedNumber);
} else {
    result = Math.floor(roundedNumber);
}

console.log(result);

var strNum = roundedNumber.toString();

console.log("strNum.indexOf", strNum.indexOf("."));

var position = strNum.indexOf(".");

console.log("strNum substring", strNum.substring(position));
var strDecimal = "0" + strNum.substring(position);

var strDecimal = "0" + strNum.substring(position);

var result = 0;
if (strDecimal >= 0.5) {
	result = Math.ceil(roundedNumber);
}
else {
	result = Math.floor(roundedNumber);
}

console.log(result)
