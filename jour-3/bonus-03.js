var students = ["amir", "asma", "sabrina", "fasulu", "ikram", "karim"];

var min = 0;
var max = students.length -1;

var random = Math.random();

var indexRandom = MathFloor(random*(max + 1));

console.log(students[indexRandom])
