/*## 03 - Validator

- À l'aide du package `prompt`, créez une fonction `checkProfile` qui demande à l'utilisateur un email, un username et un mot de passe
- La fonction vérifiera que l'utilisateur a saisi des informations valides (regardez la doc, et plus precisement les `pattern`) :
    - l'email doit être au bon format
    - le username ne doit comporter que des lettres, chiffres et tirets (les petits)
    - le mot de passe doit contenir au moins 6 caractères, au moins une lettre et au moins un chiffre, et peut contenir des tirets
- Si tout est bon, elle retourne "All good !", sinon elle retourne "error"*/


var prompt = require("prompt")

var schema = {

    properties:
    {
        email:
        {
            pattern: /^\S+@\S+\.\S+$/, required: true, message: "Email non valide, format incorrect."
        },

        username:
        {
            pattern: /^[a-zA-Z-]+$/, required: true, message: "Username non valide, utiliser seulement des lettres Maj ou Min."
        },

        password:
        {
            required: true, message: "Password non valide", conform: function (value) {
                if (value.search(/.{6,}/) === -1) {
                    return false
                }

                if (value.search(/[a-zA-Z]/) === -1) {
                    return false
                }

                if (value.search(/[0-9]/) === -1) {
                    return false
                }

                if (value.search(/[^a-zA-Z0-9-]/) > -1) {
                    return false
                }

                return true
            }
        }
    },
}

prompt.start()

prompt.get(schema, (err, res) => { console.log(res) })