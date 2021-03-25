



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
];

 console.log(grid)
// console.log(gird.length)


var rover = {
    direction: 'N',
    x: 0,
    y: 0
}

console.log(rover)


function turnRight(rover) {

    if ("N") {
        return "E";
    }
    else if ("E") {
        return  "S";
    }
    else if ("S") {
        return "W";
    } else {
        return "N"
    }
    
}

turnRight(rover)
console.log(rover)

function turnLeft(rover) {
    if ("N") {
        return "W";
    }
    else if ("W") {
        return "S";
    }
    else if ("S") {
        return "E";
    } else {
        return 'N'
    }
}


turnLeft(rover)
console.log(rover)





// Object.values(cat)


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
    grid[1][1];

}
moveForward(rover);