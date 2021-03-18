// ## 01 - Format

// - Créez une fonction `formatDate` qui reçoit en paramètre une string (au format aaaa-mm-jj)
// - La fonction doit renvoyer la date au format jj/mm/aaaa
// - Appelez la fonction et affichez son résultat dans la console


function formatDate(stringDate){
// var stringDate = "2021-03-18"

var date = new Date (stringDate)

console.log(date)

var year = date.getFullYear()

// console.log(year)

var month = '0' + (date.getMonth() +1)

// console.log(month)

var day = date.getDate()

// console.log(day)

console.log(day + '/' + month + '/' + year)

}

formatDate("2021/03/18")