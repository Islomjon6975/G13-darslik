
let data = [
    {
        id: 1,
        name: 'olma',
        color: 'red'
    },
    {
        id: 2,
        name: 'olma',
        color: 'green'
    },
    {
        id: 3,
        name: 'olcha',
        color: 'red'
    },
];

// add

function add(data) {
    let newMeva = { id: data.length + 1, name: 'orik', color: 'yellow' };
    data = [ ...data, newMeva ]
    return data
}

console.log(add(data))


// search

function search(color) {
    let result = data.filter(value => value.color === color)
    return result
}

console.log(search('red'))



















// flat(Infinity) -> nested arrayni 1ta array qilib beradi
// flatMap() -> ham flat, ham map
// ...spread -> ma'lumotlarni copy qilib beradi
// Destructure -> bir xil nom qaytarmasligi uchun (obj.name -> name (name:n))
// this -> object ichida kelsa parent objectga teng bo'ladi
// call, apply, bind -> bu holatda this objectni location o'zgartirib boshqa objectga tenglab beradi
// call -> automatik
// apply -> argumentlarni [] array ichida solib beradi
// bind -> avtomatik chaqirmaydi, () yoki biror o'zgaruvchiga tenglab chaqirishimiz mumkin
