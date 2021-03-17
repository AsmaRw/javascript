// ## 03 - Separate Table

// - Créez un fichier `table-utils.js`
// - Mettez votre fonction `multiply` dans ce fichier,
//  et ajouter en une deuxieme `addition` qui reprend
//   le même principe mais avec une addition au lieu 
//   d'une multiplication
// - Exportez les deux fonctions graces aux modules,
//  et importez les dans votre fichier précedant 
//  pour refaire marcher votre code
// - Affichez la table d'addition

// console.log(process.argv)
// var val = require("../exo2/multiply")



// console.log(val)


// console.log(val.multiply())


var { multiply, addition} = require("../exo2/multiply.js")
multiply(process.argv[2])
addition(process.argv[3])

