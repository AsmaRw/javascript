

function generatePassword(num){
    var password = ""
    if ( num < 6 || num > 15){
        console.log("ok")
    }
    else {
        for(i=1; i<=num; i++)
        var roundedNumber = Math.floor(Math.random() * (90+ 65 + 1) + 65);
        var roundedLetter = String.fromCharCode(roundedNumber);
        password = roundedLetter + password;
        console.log("error")
    }

    console.log(password)
}



    generatePassword(5)