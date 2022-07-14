// Function type 3
// Decloration, Expression, Arrow
// Decloration -> hoisting boladi, this keyword ishlaydi
// Expression -> hoisting bo'lmaydi, this keyword ishlamaydi
// Arrow -> auto return,{} bu holatda return dan foydalanamiz, hoisting bo'lmaydi, this ishlamaydi
// return -> funksiyani biror qiymatga tenglab beradi

// 1 turi -> function ichida console.log();
// 2 turi -> function ga return yozish, funksiyani chaqirayotgan vaqtimiz konsolega solib ketamiz.

// argument
// property

// Decloration
function hello() {
    return "hello world"
}

console.log(hello())


// Expression
var hello1 = function() {
    return 'hello world 1'
}

console.log(hello1())


// Arrow
var hello2 = () => {
    return 'hello world 2'
}

console.log(hello2())






function round(son) {
    let a = son < Number.parseInt(son) + 0.5 && Number.parseInt(son) 
    let b = son >= Number.parseInt(son) + 0.5 && Number.parseInt(son) + 1
    let result = a || b
    return result
}

console.log(round(3.5));

function floor(son) {
    let a = son < 0 && Number.parseInt(son) - 1
    let b = son >=0 && Number.parseInt(son)
    let result = a || b
    return  result
}

console.log(floor(-3.9))





function ceil(son) {
    let a = son < 0 && Number.parseInt(son)
    let b = son >= 0 && Number.parseInt(son) + 1
    let result = a || b
    return result
}

console.log(ceil(-3.5))



function abs(son) {
    let a = son < 0 && -1 * son
    let b = son >=0 && son
    let result = a || b
    return result
}

console.log(abs(3))
















// regex, match
// match -> regexdan foydalanish uchun, method, array qaytaradi []
// regex -> // front shlash ichiga yozilgan narsalar orqali tekshirib, ishimizni osonlashtirib beradi
// g -> ma'lumotlarni global qilib beradi
// i -> bizda katta harfli va kichik harflilar taqqoshlanyotganda ishdatamiz
// /[A-Z]/g -> katta harflilarni arrayga solib beradi
// /[a-z]/g -> kichik harflilarni arrayga solib beradi
// /[0-9]/g -> raqamlarni arrayga solib beradi
// join() -> array stringga aylantirishda ishlatamiz, qoshtirnoq qoyamiz




// var str = 'WebBrain12 Aca3de4my56';
// // WBA
// // ebrain

// console.log(str.match(/[A-Z]/g).join(''))
// console.log(str.match(/[a-z]/g).join(''))
// console.log(str.match(/[0-9]/g).join(''))
// console.log(typeof ['a'])

// var str = 'html css javascript Html HTML';

// console.log(str.replace(/html/gi, 'react js'))

