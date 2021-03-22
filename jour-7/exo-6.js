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

    var cookie = cakes.map(function (elem){
        if (elem.flavor === 'chocolate'){
            elem.status = 'sold out'
        }
        return elem
    })
    console.log(cookie)

    var cookie2 = cakes.filter(function (elem){
        return (elem.status === 'sold out')
    })

    console.log(cookie2)

    
	


