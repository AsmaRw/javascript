function addition(number) {

    var firstInput = parseFloat(number)
    
    if (Number.isInteger(firstInput) == false) {
    
        console.log("it's not a number integer")
    
    } else {

        for (var i = 1; i <= 10; i++) {
            
            console.log(firstInput, "+", i, '=', firstInput + i)

        }

    }
}


addition(process.argv[2])