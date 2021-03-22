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

var shortName = longName.map(function (Element) {
    return "name :" + " " + Element.firstName + " " + Element.lastName;
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