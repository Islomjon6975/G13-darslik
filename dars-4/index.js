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

// Math.pow()
function pow(num1, num2) {
    return num1 ** num2
}

console.log(pow(2, 5))
console.log(pow(4, 3))
console.log(pow(5, 3))


// Math.sqrt()
function sqrt(num1) {
    return num1 ** (1/2)
}

console.log(sqrt(4))
console.log(sqrt(16))
console.log(sqrt(64))
console.log(sqrt(81))






































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

