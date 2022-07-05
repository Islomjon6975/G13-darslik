// String
// String type: '', "", ``
// index -> 0dan boshlanadi, str[0] - get letter
// length -> string uzunligini topshi
// string oxirgi harfini olish -> str[str.length - 1]
// `` -> Es6, yangi qatorlardan malumot yoza olamiz, ozgaruvchini nomini ham bera olamiz ${}
// \n -> new line, qator tashash
// \t -> tab, joy tashab berish
// \r -> chap tomondagi sozni ochirib yuborish, korsatmaslik

// toLowerCase() -> kichkina harf qilib beradi
// toUpperCase() -> katta harf qiladi
// trim() -> ikki tomonidagi bosh joylarni olib tashlaydi
// startsWith() -> true false qaytaradi, agar berilgan qiymatimiz bilan boshlansa true qaytaradi
// endsWith() -> true false qaytaradi, agar berilgan qiymatimiz bilan boshlansa true 
// padStart() -> 2 ta qiymat oladi, number, qoshilayotgan harf
// padEnd() -> 2 ta qiymat oladi, number, qoshilayotgan harf
// replace() -> 2 ta qiymat oladi, 1-qaysi sozligi, 2-qaysi so'zga o'zgartirmoqchiligimiz
// repeat() -> 1 ta qimat oladi, sozni necha marotaba takrorlanishi
// concat() -> bir biriga qoshish
// indexOf() -> 2 ta qiymat, 1-harf, 2-position, harf kirgizsak ushaning indexini chiqarib beradi
// lastIndexOf() ->2 ta qiymat, 1-harf, 2-position, harf kirgizsak ushaning indexini chiqarib beradi
// search() -> berilgan qiymat orqali indexini chiqarib beradi
// includes() -> bor yoqligini tekshirib beradi, boolean qiymat qaytaradi, 1 ta qiymat oladi,
// slice() -> 2 ta qiymat oladi. 1-boshlangich index, 2-qaysi indexgachaligi, stringlarni qirqib berishda ishlatiladi
// substring() -> 2 ta qiymat oladi. 1-boshlangich index, 2-qaysi indexgachaligi, stringlarni qirqib berishda ishlatiladi
// substr() -> 2ta qiymat, 1-index, 2-nechta harf, stringlarni qirqib berishda ishlatiladi





// var str = 'FoziL';

// console.log(str.toLowerCase().endsWith('l'));
// console.log(str[str.length - 1].toLowerCase().includes('l'));



// var str1 = 'Web';
// var str2 = 'Brain';

// var newStr = str1;
// str1 = str2;
// str2 = newStr;

// console.log(str1);
// console.log(str2);


// var year = 2022;

// year % 4 == 0 && year != 0 && console.log('kabisa yili');
// year % 4 != 0 && console.log('kabisa yili emas');


var str = 'helol'

console.log(str.indexOf('l', ));

 