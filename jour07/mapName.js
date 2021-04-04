/*## 03 - Map Names

- Créez une variable `longNames` contenant la valeur suivante :

[
	{
		firstName: "Jane",
		lastName: "Doe"
	},
	{
		firstName: "John",
		lastName: "Smith"
	}
]

- Créez une variable `shortNames` qui appellera la méthode `.map()` pour contenir une version compacte de `longNames`*/

var longName =
    [
        {
            firstName: "Jane",
            lastName: "Doe"
        },
        {
            firstName: "John",
            lastName: "Smith"
        }
    ]

var shortName = longName.map(function (elem) {
    return {
        name: elem.firstName + " " + elem.lastName
    }
}
)

console.log(shortName)
