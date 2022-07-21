
// let str = 'WebBrain Academy'

// // W  W
// // e  E
// // b  B
// // B  B
// // a  A

// let str2 = ''
// for(let i = 0; i < str.length; i++) {
//     if(str[i] === str[i].toUpperCase()) {
//         str2 += str[i]
//     }
// }

// console.log(str2)

// console.log()


// WBA










// i++ -> i = i + 2

// console.log(str[0]) -> W
// console.log(str[1]) -> e
// console.log(str[2]) -> b
// console.log(str[3]) -> b
// console.log(str[4]) -> r
// console.log(str[5]) -> a
// console.log(str[6]) -> i
// console.log(str[7]) -> n


// for loop -> tskil aylantirish uchun
// for() -> 3ta qiymat, 1 - let o'zgaruvchi ochish,
// 2 - shart yozish, 3 - ozgaruvchining qiymatini ochirib qoyamiz


// Masala
// let str = 'html'

// let str2 = ''
// for(let i = str.length - 1; i >= 0 ; i--) {
//     str2 += str[i]
// }

// console.log(str2);


// let str = 'I'

// console.log(str.repeat(5));


// function str(son, text) {
//     for() {

//     }
// }

// str(5, 'I')
// str(6, 'Hello')



// for(let i = 1; i <= 10; i+=2) {
//     console.log(i);
// };



// while, do while

// for(let i = 0; i<10; i++) {

// }


// let i = 0;
// while(i < 0) {
//     console.log("hello world", i);
//     i++;
// }


// let k = 0;
// do{
//     console.log('hello', k)
//     k++
// }while(k < 0);


// while -> for bilan bir xil vazifani bajaradi
// do while -> eng kamida bir marta amal bajaradi


// let str = '123456';
// if(str.length % 2 === 0) {
//     console.log((+str[str.length/2 - 1] + +str[str.length/2]) / 2)
// } else if(str.length % 2 !== 0) {
//     console.log(str[Math.floor(str.length/2)])
// }


// function orttirish(n, s) {
//     let str = '';
//     for(let i = 1; i <= n; i++){
//         str+=s
//     }
//     return str;
// }

// console.log(orttirish(2, 'hello'))


let str = '35821';
let max = null;
let min = null;
let initial;
for(let i = 0; i < str.length; i++) {
    if(str[i] < str[i+1]){
        max = str[i+1]
    }
}