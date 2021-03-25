var request = require("request")

function catchPokemon(id){
    request.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=898", function (err, res, body){

    var pokemon = JSON.parse(body)

    console.log('id =', id)
    console.log('name =', pokemon.results[id -1].name)



    })
}

catchPokemon(898)