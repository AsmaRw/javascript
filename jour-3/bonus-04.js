var array = [];
var min = 0;
var max = 100;
var numRandom = 0;

for (var i = 0; i <= 20; i++){
    
    numRandom = Math.floor(Math.random() * ( max- min +1));
    
    if ( array.indexOf(numRandom) === -1){
        array.push(numRandom);
    }
    else{
        i--;
    }
}

console.table(array);

var numMax = array [0];

for ( var i = 0; i < array.length; i++){
    var item = array[i];

    if(item > numMax){
        numMax = item;
    }
}

console.log(numMax);