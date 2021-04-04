/*## 03 - Pokemon
À l'aide de la superbe [PokeAPI](https://pokeapi.co/) (bien lire la documentation) :

- Créez une fonction asynchrone `catchPokemon` qui recevra un nombre en paramètre (il correspondra à l'id d'un pokemon) et qui récupèrera le pokemon correspondant à cet id. Elle affichera ensuite dans la console :*/


var request = require("request")

function catchPokemon(id) {
    var url = "https://pokeapi.co/api/v2/pokemon/" + id

    request.get(url, function (err, res, body) {

        var pokemon = JSON.parse(body)

        console.log("id:", id)

        console.log("name:", pokemon.name)

    })
}

catchPokemon(25) //Pikachu