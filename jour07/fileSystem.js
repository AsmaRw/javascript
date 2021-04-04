/*## 01 - File System
Dans le fichier js, à l'aide du module fs, affichez le contenu de jour07.txt dans la console*/


var fs = require("fs")

fs.readFile("jour07.txt", function (err, data) {
   if (err) {
      console.error(err)

      return
   }

   console.log("jour07.txt " + data.toString())

})
