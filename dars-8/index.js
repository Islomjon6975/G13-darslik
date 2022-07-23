// Array -> some, every
// every -> array ichidagi har bir elementni tekshiradi, agar hammasi shartni qanoatlantirsa true qaytaradi aks holda false
// some -> elementlari ichida bazilari shart qanoatlantirsa true, hech qaysi biri qanoatlantirmasa false

// Object -> nonprimitive (callstack - id, heap - value)
// Object - key: value
// update, add, delete
// Object.freeze() -> not delete, update, add
// Object.seal() -> update, not delete, add
// Object.entries() -> objectni arrayga o'tkazib beradi
// Object.fromEntries() -> arraydan objectga olib beradi
// [ [ 'id', 1, ], [ 'name', 'Tom' ], [ 'age', 20 ], ['status', 'student'] ]
// Object.key(obj) -> obj ni keylarini arrayga solib beradi
// Object.value(obj) -> obj ni valuelarini arrayga solib beradi
// Destructure 


// let data = [
//     {
//         id: 1,
//         name: 'Islom',
//         address: {
//             city: 'Tashkent',
//             country: 'Uzbekistan',
//             street: ['20', 'main street', 'mahalla']
//         },
//         jobs: ['programming', 'teaching'],

//     },
//     {
//         id: 2,
//         name: 'Jacck',
//         address: {
//             city: 'New York',
//             country: 'America',
//             street: ['20', 'main street', 'mahalla']
//         },
//         jobs: ['programming', 'teaching'],

//     },
//     {
//         id: 3,
//         name: 'John',
//         address: {
//             city: 'Tashkent',
//             country: 'Uzbekistan',
//             street: ['20', 'main street', 'mahalla']
//         },
//         jobs: ['programming', 'teaching'],

//     },
// ]

// uy -> id, nomi, manzili, nimalari bor, rooms, beds, bathroom, garage, necha metr kvadrat


// data.map(value => {
//     console.log(`id: ${value.id} \nname: ${value.name} \n${value.address.city} - ${value.address.country} - ${value.address.street.join(', ')} \n${value.jobs.join(", ")}`)
//     console.log('----------------------------------------');
// });



let obj = [
    {
        id: 1,
        name: 'olma',
        color: 'red',
    },
    {
        id: 3,
        name: 'olma',
        
    },
    {
        id: 1,
        name: 'olma',
        color: 'red',
    },
]

obj.map(value => (
    console.log(`${value?.id} - ${value.name} - ${value?.color}`)
))

let str;

console.log(typeof str === 'undefined' ? '' : str)