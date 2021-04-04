/*## 01 - Format

- Créez une fonction `formatDate` qui reçoit en paramètre une string (au format aaaa-mm-jj)
- La fonction doit renvoyer la date au format jj/mm/aaaa
- Appelez la fonction et affichez son résultat dans la console*/


function formatDate(stringDate) {

    var date = new Date(stringDate)

    var year = date.getFullYear()

    var month = date.getMonth() + 1

    if (month < 10) {

        month = "0" + month
    }

    var day = date.getDate()

    if (day < 10) {

        day = "0" + day
    }

    console.log(day + '/' + month + '/' + year)

}

formatDate("2021/12/05")