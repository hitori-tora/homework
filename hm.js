let cars = [{
        name: 'Audi',
        price: 300000,
        сolor: 'белый',
        year: 2002,
        isAvaiable: true
    },
    {
        name: 'Mazda',
        price: 390000,
        сolor: 'красный',
        year: 2008,
        isAvaiable: true
    },
    {
        name: 'Tesla',
        price: 300000,
        сolor: 'белый',
        year: 2019,
        isAvaiable: false
    },
    {
        name: 'Honda',
        price: 300000,
        сolor: 'белый',
        year: 2009,
        isAvaiable: true
    },
    {
        name: 'DS',
        price: 300000,
        сolor: 'белый',
        year: 2017,
        isAvaiable: false
    }
]
cars = cars.filter((car) => {
    return car.isAvaiable;
});
cars.map((car) => {
    // for (let key in car) {
    //     console.log(`${key}:${car[key]}`)
    // }
    car['isAvaiable'] === car.isAvaiable;
});
// for (let i = 0; i < cars.length; i++) {
//     let car = cars[i];
//     for (let key in car) {
//         console.log(`${key}:${car[key]}`)
//     }
// }
