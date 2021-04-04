/*## ⭐ Bonus

- A l'aide du package npm `moment` et en regardant sa [documentation](https://momentjs.com/) sur internet, refaites les exos 1 & 2.*/


var moment = require("moment")

function formatDate(dateString) 
{
    console.log(moment(dateString).format("DD/MM/YYYY"))
}

formatDate("2020-02-27")

function calculateAge(dateString) {

    console.log(moment(dateString).fromNow())

}

calculateAge("1985-09-06")