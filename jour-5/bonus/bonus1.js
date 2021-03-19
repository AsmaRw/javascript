// Vous vous souvenez de **Motus** ? Aujourd'hui on va le coder ! Petit rappel des règles :

// - Un mot mystère (ici de 5 lettres) est proposé, on ne connaît que la première lettre
// - Le joueur a six tentatives pour deviner le mot mystère, et pour chaque tentative :
//     - Les lettres qui sont à la bonne place sont en rouge
//     - Les lettres qui sont à la mauvaise place sont en jaune
//     - Les lettres qui n'existent pas dans le mot mystère restent neutres

// ⇒ Si le joueur propose un mot qui n'a pas le bon nombre de lettres (ici 5) alors il a perdu

// ⇒ Si le joueur propose "BOTTE" et que le mot mystère est "BRUTE" attention : un des "T" proposés doit rester neutre !

// var mysteryWord = Math.floor(Math.random() * 26)

var prompt = require("prompt")

prompt.start()

function displayPrompt(){

    prompt.get({name : "letters", description : "Quel est le mots myestere ? il est composer de 5 lettres", //validator:,
    warning: "Choisissez"}, function play(err, res){

        if(err == letters >=6 ){

            return onErr(err)

        } 
    })
}


displayPrompt();
