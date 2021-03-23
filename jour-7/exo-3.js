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
        name : elem.firstName + " " + elem.lastName
    }
}
)

console.log(shortName)



    // [
    //     {
    //         name: "Jane Doe"
    //     },
    //     {
    //         name: "John Smith"
    //     }
    // ]