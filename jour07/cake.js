/*## 06 - Cakes

- Créez une variable `cakes` contenant la valeur suivante,
- À l'aide des méthodes `.filter()` et `.map()`, vous donnerez le statut "sold out !" aux gâteaux au chocolat
- Ces deux gâteaux doivent être stockés dans une nouvelle variable, affichez-la dans la console*/

var cakes =
    [
        {
            name: "cake",
            flavor: "vanilla",
            status: "available"
        },
        {
            name: "brownie",
            flavor: "chocolate",
            status: "available"
        },
        {
            name: "pie",
            flavor: "strawberry",
            status: "available"
        },
        {
            name: "muffin",
            flavor: "pistachio",
            status: "available"
        },
        {
            name: "donut",
            flavor: "chocolate",
            status: "available"
        },
    ]

var chocolateCakes = cakes.filter(

    function (element) 
    {

        var isCakeChocolate = element.flavor === "chocolate"

        return isCakeChocolate //true or false
    }

).map(

    function (element) 
    {

        element.status = "sold out!"

        return element
    }

)

console.log("Just chocolate and sold out", chocolateCakes)





