
// let fruit = 'uzum'

// if(fruit === 'olma') {
//     console.log('10 000')
// }else if(fruit === 'behi') {
//     console.log('12 000')
// }else if(fruit === 'banan') {
//     console.log('15 000')
// }else{
//     console.log('bunday meva yoq')
// }


// let sum = 10000;

// if(sum > 8000 && sum < 12000) {
//     console.log('Cobalt');
//     if(sum === 10000) {
//         console.log('minilgan gentra')
//     } else if(sum === 11000) {
//         console.log('minilgan yoki urilgan Captiva')
//     }
// } else if(sum > 6000 && sum < 8000) {
//     console.log('Nexia')
// } else if (sum > 12000 && sum < 16000) {
//     console.log('Gentra')
// } else if (sum > 16000) {
//     console.log('xohlagan mashinangizni olishingiz mumkin')
// }else {
//     console.log('Sizning pulingizga yetarli emas')
// }




// switch
// let sum = 10000

// switch(sum) {
//     case 6000: console.log('nexia') 
//                 break;
//     case 10000: console.log('cobalt')
//                 break;
//     case 13000: console.log('gentra')
//                 break;
// }

// let fruit = 'nok'

// switch(fruit) {
//     case 'behi': console.log('5000')
//                     break;
//     case 'olma': console.log('7000')
//                     break;
//     case 'uzum': console.log('10000')
//                     break;
//     default :
//         console.log('bunday meva yoq')
// }



// ternery
// let fruit = 'nok'

// console.log(fruit === 'olma' ? '5000' : fruit === 'nok' ? '7000' : fruit === 'uzum' ? '1000' : 'bunday meva yoq' )


function plus(num1, num2) {
    return num1 + num2;
}

function minus(num1, num2) {
    return num1 - num2;
}

function multiplication(num1, num2) {
    return num1 * num2;
}

function division(num1, num2) {
    return num1 / num2;
}

let amal = '%'
let n1 = 5;
let n2 = 7;

switch(amal) {
    case '+' : console.log(plus(n1,n2))
    break;
    case '-' : console.log(minus(n1,n2))
    break;
    case '*' : console.log(multiplication(n1,n2))
                break;
    case ':' : console.log(division(n1,n2))
                break;
    default : console.log('error')
}


// if(amal === '+') {
//     console.log(plus(n1, n2))
// } else if(amal === '-') {
//     console.log(minus(n1, n2))
// } else if(amal === '*') {
//     console.log(multiplication(n1, n2))
// } else if(amal === ':') {
//     console.log(division(n1, n2))
// }

// console.log(amal === '+' ? plus(n1, b2) : amal === '-' ? minus(n1,n2) : amal === '*' ? multiplication(n1, n2) : amal === ':' ? division(n1, n2) : 'error')







// Conditionals
// if else, switch, ternery
// if else -> bir nechta shartlarni tekshirib ketishimiz mumkin,
// hech qaysi bir shart togri kelmasa else ishlaydi
// switch -> aniq qiymatlar bilan ishlaydi,
// bitta shart kiritamiz, shuni case lar bilan solishtirib chiqamiz
// break qoyishimiz shart, hech qaysi shartimiz qanoatlantirilmasa default ishlaydi
// ternery -> 2ta yoki undan kop holatni ko'rib ketishimiz uchun, 
// shart true qiymat qaytarsa ? dan keyingi qiymatni chiqazib beradi,
// false qaytarse : dan keyingi qiymatga o'tadi.
// agar : dan keyin yana ? bilan shart berilgan bo'lsa ularni ham shu holatda tekshirib ketadi.
