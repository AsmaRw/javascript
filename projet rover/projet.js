var grid = [
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
]

console.log(grid.length)

var rover = {
    direction: "N",
    x: 0,
    y: 0
}

console.log(rover)

// Les fonctions turnLeft et turnRight reçoivent en paramètre le rover.
//  Elles modifient la valeur de "direction" dans le rover en fonction de
//   la direction initiale, et de la fonction appelée. Exemple : 
//   turnRight transformera "N" en "E". N'oubliez pas d'ajouter 
// un console log de la nouvelle direction du rover à la fin pour
//  pouvoir vérifier que la fonction a fait son boulot !
grid.forEach(function (item, index, array) {
    console.log(item, index);

    function turnLeft(rover) {
        if (rover.direction == "N") {
            return rover.direction = "W";
        }
        else if (rover.direction == "W") {
            return rover.direction = "S";
        }
        else if (rover.direction == "S") {
            rover.direction = "E";
        } else {
            return 'nothing'
        }
    }

    console.log(rover)
    turnLeft(rover)
    console.log(rover)





    function turnRight(rover) {
        if (rover.direction == "N") {
            rover.direction = "E";
        }
        else if (rover.direction == "E") {
            rover.direction = "S";
        }
        else if (rover.direction == "S") {
            rover.direction = "W";
        } else {

        }
    }

    console.log(rover)
    turnRight(rover);
    console.log(rover)





    function moveForward(rover) {

        if (rover.direction === "E") {
            rover.x = rover.x + 1;
        }
        else if (rover.direction === "W") {
            rover.x = rover.x - 1;
        }
        else if (rover.direction === "N") {
            rover.y = rover.y - 1;
        }
        else if (rover.direction === "S") {
            rover.y = rover.y + 1;
        }
        grid[1][0];

    }
    moveForward(rover);

});