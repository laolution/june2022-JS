// 1
// Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// let a = ['blackburn', 'darkside', 'nual', 'fumari', 'tangiers', 4.20];
// console.log(a[0]);
// console.log(a[5]);

// ------------------------------------------------------------------------------------------------------

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// let b1 = {
//     name: black,
//     genre: tres,
//     page: 525,
// }
// let b1 = {
//     name: dog,
//     genre: web,
//     page: 441,
// }
// let b1 = {
//     name: atlas,
//     genre: por,
//     page: 9898,
// }

// -----------------------------------------------------------------------------------------------------------

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age
// let b1 = {
//     title:'take',
//     genre:'siake',
//     count:45,
//     authors: [
//         {
//             name: 'taras',
//             age: 56,
//             status: false
//         },
//         {
//             name: 'don',
//             age: 18,
//             status: false
//         }
//     ]
// }
// let b2 = {
//     title:'tuda',
//     genre:'siuda',
//     count:96,
//     authors: [{name:'petro'},{age:98},{status:true}]
// }
// let b3 = {
//     title:'tudym',
//     genre:'siudym',
//     count:12,
//     authors: [{name:'ivan'},{age:546},{status:false}]
// }
// console.log(b1.authors[1]);
// console.log(b3.authors[2]['status']);
// //---------------------------------------------------------------------------------------------------------

// let v1 = 4;
// let v2 = 7;
// let v3 = 6;
// let enginesVol = [v1, 7, v3];
// console.log(enginesVol);
//
// enginesVol[3] = 45;
// console.log(enginesVol);//додали елемент
//
// enginesVol[0] = 1488;
// console.log(enginesVol);
//
// enginesVol[100] = 'ererr';
// console.log(enginesVol);
// console.log(enginesVol.length/2);
//
// let res = Math.round(enginesVol.length / 2);//округлення
// console.log(res);
// let rese = Math.floor(enginesVol.length / 2);//приведення до цілого нижнього значення
// console.log(rese);

//__________________________________________________________________________________________________________

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// let time = 156;
// if (time > 0 && time <= 15) {
//     console.log('first');
// } else if (time > 15 && time <= 30) {
//     console.log('second');
// } else if (time > 30 && time <= 45) {
//     console.log('third');
// } else if (time > 45 && time <= 60) {
//     console.log('fourth');
// } else {
//     console.log('wrong');
// }

// -----------------------------------------------------------------------------------------------------------

// Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
// let day = prompt('what day?');
// switch (day) {
//     case'1':
//         console.log('sunday');
//         break;
//     case'2':
//         console.log('monday');
//         break;
//     case'3':
//         console.log('tuesday');
//         break;
//     case'4':
//         console.log('wednesday');
//         break;
//     case'5':
//         console.log('thursday');
//         break;
//     case'6':
//         console.log('friday');
//         break;
//     case'7':
//         console.log('saturday');
//         break;
//     default:
//         console.log('WTF???');
//
// }

// ----------------------------------------------------------------------------------------------------

// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.
// let x = 7;
// let y = 7;
// if (x > y) {
//     console.log(x);
// } else if (y > x) {
//     console.log(y);
// }
// else if(x===y){
//     console.log('pareto');}

// ---------------------------------------------------------------------------------------------------------

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)
// let x = NaN || 'default';
// console.log(x);

// -----------------------------------------------------------------------------------

// - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
// кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
//     Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.
// let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
// console.log(friends.length);
// if (friends.length>=3){
//     console.log('too big');}
// else if (friends.length<3){
//     console.log('too small');
// }

// --------------------------------------------------------------------------------------

// - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
//     Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.
// let a = 4;
// let b = 23;
// let c = 23;
// if (a>b && a < c) {
//     console.log(a);
// } else if (a < b && a>c) {
//     console.log(a);
// } else if (b>a && b < c) {
//     console.log(b);
// } else if (a > b && b > c) {
//     console.log(b);
// } else if (b<c && c<a) {
//     console.log(c);
// } else if (b>c&& c>a) {
//     console.log(b);
// }
//  else {
//     console.log('equal');
// }

// ---------------------------------------------------------------------------------------------------

// - Перепишіть конструкцію if з використанням умовного оператора '?':
// let a=+prompt('num')
// let b=+prompt('num2')
//
// // if ((a + b) <= 4) {
// //     console.log('Мало');
// // } else {
// //     console.log('Багато');
// // }
//
// let result = (a + b) < 4 ? 'мало' : 'багато';
// console.log(result);

// ---------------------------------------------------------------------------------------------------

// - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором
// let n = +prompt('Number');
// let result = (n < 0&&n>=-100) ? 'minus' : (n === 0) ? 'zero' : (n > 0&&n<=100) ? 'plus' : 'mistake';
// console.log(result);

// ------------------------------------------------------------------------------------------------------

// Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
// let ans=prompt('Яка «офіційна» назва JavaScript?')
// if (ans==='ECMAScript'){
//     console.log('Правильно!');
// }
// else{
//     console.log('Не знаєте? ECMAScript!');
// }

// ----------------------------------------------------------------------------------------------------------------

// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН
//
// let temp = +prompt('Яка температура?');
// if (temp>=10&&temp<=22){
//     document.write('Ми Йдемо вчитися!');
// }
// else {
//     document.write('сидимо вдома!')
// }

// -----------------------------------------------------------------------------------------------------------------

// За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .
// let x = +prompt('введіть число');
// switch (x) {
//     case 1:
//         document.write('Авто');
//         break;
//     case 2:
//         document.write('Moto');
//         break;
//     case 3:
//         document.write('telephone');
//         break;
//     case 4:
//         document.write('sumka');
//         break;
//     case 5:
//         document.write('chohol');
//         break;
//     default:
//         document.write('Число не вірне');
// }

// ---------------------------------------------------------------------------------------------------------------

// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'tania', age: 31, status: false},
//     {name: 'igor', age: 31, status: true}
// ];
//
// for (let user of users) {
//     console.log(user);
// }

//For of
// for (const user of users) {
//     console.log(user);
// }

// for (const user of users) {
//     if (user.status){
//         console.log(user);
//     }
// }

// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
//     {
//         title: 'cola',
//         price: 35,
//         image: 'https://okwine.ua/files/product/1968974878446978521/cd18e450-11dc-11eb-abc0-791296eec59d.jpg.jpg'
//     }
// ];

// for (const product of products) {
//     document.write(`<div>
// <h2>${product.title}-${product.price}</h2>
// <img src="${product.image}" alt="image">
// </div>`)
// }

///попробував іф вручну
// for (const product of products) {
//     if (product.price > 25) {
//         document.write(`<div>
//             <h2>${product.title}-${product.price}</h2>
//             <img src="${product.image}" alt="image">
//             </div>`)
//     }
// }


//іф за допоомгою ктрл альт т
// for (const product of products) {
//     if (product.price===35) {
//         document.write(`<div>
//     <h2>${product.title}-${product.price}</h2>
//     <img src="${product.image}" alt="image">
//     </div>`)
//     }
// }

// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'tania', age: 31, status: false},
//     {name: 'igor', age: 31, status: true}
// ];

//ITAR!!!!
//вибір діапазону який ітерується (for)
// for (let i = 2; i < 8; i = i + 1) {
//     console.log(users[i]);
// }

//зворотній порядок
// for (let i = users.length - 1; i >= 0; i--) {
//     let user = users[i];
//     console.log(user);
// }

// // RITAR
// for (let i = users.length - 1; i >= 0; i--) {
//     const user = users[i];
//     console.log(user);
// }

//WHILE
// let i = 0;
// while (i<users.length){
//     let user = users[i];
//     console.log(user);
//     i++;
// }

//IT IN
// let obj = {name: 'vasya', age: 31, status: false};
// for (const key in obj) {
//     console.log(key,obj[key]);
// }

//ітерація обєкта в масиві / цикл в циклі
// for (const user of users) {
//     for (const key in user) {
//         console.log(key, user[key]);
//     }
//     console.log('*********************')
// }
// -------------------------------------------------------------------------------------------------------------------

// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18]
// console.log(arr);

// while (вивели в консоль за допомогою вайл)
// let i=0
// while (i<arr.length){
//     console.log(arr[i]);
//     i++;
// }

// ( Вивели в консоль за допомогою for of)
// for (const number of arr) {
//     console.log(number);
// }
//

//(вивели в коесоль непарні значення індексів з масиву за допомогою вайл)
// let i = 0
// while (i < arr.length) {
//     if ([i]%2!==0){
//     console.log(arr[i]);
//     }
//     i++;
// }

//(Вивели парні значення індексів масиву while)
// let i = 0;
// while (i < arr.length) {
//     if ([i] % 2 === 0) {
//         console.log(arr[i]);
//     }
//     i++;
// }

//(через ітар)вивели парні значення
// for (let i = 0; i < arr.length; i++) {
//    if (arr[i]%2===0){
//        const arrElement = arr[i];
//        console.log(arrElement);
//    }
// }

// //через фор непарні значення ??????[num]??? чому саме так хз
// for (const num of arr) {
//     if ([num]%2!==0){
//         console.log(num);
//     }
// }


// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// замінити кожне число кратне 3 на слово "okten"
// for (let i = 0; i < arr.length; i++) {
//    if (arr[i]%3===0) {
//        arr[i] = 'okten';
//    }
//        const arrElement = arr[i];
//        console.log(arrElement);
// }

// вивести масив в зворотньому порядку.
// for (let i = arr.length - 1; i >= 0; i--) {
//     let ass = arr[i];
//     console.log(ass);
// }
// // RITAR
// for (let i = arr.length - 1; i >= 0; i--) {
//     const arrElement = arr[i];
//     console.log(arrElement);
// }
// --------------------------------
// всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//(вивели цикло задом нпареред за допомогою вайл)
// let i=arr.length-1
// while (i >= 0) {
//     let ass = arr[i];
//     console.log(ass);
//     i--;
// }
//непарні задом наперед з вайл індекси
// let i = arr.length - 1;
// while (i >= 0) {
//     if ([i] % 2 !== 0) {
//         console.log(arr[i]);
//     }
//     i--;
// }
//непарні зад наперед за допомогою ritar індекси
// for (let i = arr.length - 1; i >= 0; i--) {
//     const arrElement = arr[i];
//     if ([i] % 2 !== 0) {
//         console.log(arrElement);
//     }
// }
//парні за доп вайл значення зад на пер
// let i = arr.length - 1;
// while (i >= 0) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i]);
//     }
//     i--;
// }
//парні за доп ritar значеня зад на пер
// for (let i = arr.length - 1; i >= 0; i--) {
//     const arrElement = arr[i];
//     if (arr[i] % 2 === 0) {
//         console.log(arrElement);
//     }
// }
//кратні 3 зад на пер
// for (let i = arr.length - 1; i >= 0; i--) {
//     if (arr[i] % 3 === 0) {
//         arr[i]='okten'
//     }
//     const arrElement = arr[i];
//     console.log(arrElement);
// }

// let x = [10, 45, 456, 48, 884, 65, 21, 32, 48, 1];
// for (let r of x) {
//     console.log(r);
// }
// let c= ['lk','po','iasdfn','dfvd','drxvd','sds','gtr','sew']
// for (const string of c) {
//     console.log(string);
// }
// let x = [10, 45, 456, 48, 884, 65, 21, 32, 48, 1];
// for (let i = 0; i < 10; i++) {
//     console.log(x[i]);
// }

//  Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let r = [true, false, 'shbhs', 35, 'shd', 45, false,84,75,'shb'];
// for (let i = 0; i < r.length; i++) {
//     if (typeof r[i] === `boolean`) {
//         console.log(r[i]);
//     }
// }

// Створити масив з 10 елементів числового, стірчкового і булевого типу.
// За допомогою if та typeof вивести тільки числові елементи
// for (let i = 0; i < r.length; i++) {
//     const rElement = r[i];
//     if (typeof r[i] === `number`) {
//         console.log(rElement);
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу.
// За допомогою if та typeof вивести тільки рядкові елементи
// for (let i = 0; i < r.length; i++) {
//     const rElement = r[i];
//     if (typeof r[i] === `string`) {
//         console.log(rElement);
//     }
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.
// let y = [];
// y[0] = 465;
// y[1] = 'svsdv';
// y[2] = true;
// for (let i = 0; i < y.length; i++) {
//     const yElement = y[i];
//     console.log(yElement);
// }

//Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i++) {
//     console.log(`step:`, i+1);
//     document.write(`<div> ${`step:`}--${i+1} </div>`);
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// let step = 0;
// for (let i = 0; i < 100; i++) {
//     console.log(`step:`,step)
//     document.write(`step : ${step} <br>`);
//     step+=2;
// }

// Створити цикл for на 100 ітерацій. Вивести тільки парні/непарні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if (i % 2 !== 0) {
//     console.log(`step:`,i );
//     document.write(`step:${i}<br>`)
//
//     }
// }

// let books = [
//     {
//         title: 'Alice',
//         pages: 525,
//         genre: ['fantasy', 'childrens-literature', 'absurd'],
//         authors: ['LEwis Carol'],
//     },
//     {
//         title: 'sherlock',
//         pages: 279,
//         genre: ['detective'],
//         authors: ['Conan Doyle'],
//     },
//     {
//         title: 'harry',
//         pages: 474,
//         genre: ['fantasy', 'fairytale', 'tyryt', 'ruru'],
//         authors: ['joanne rowling', 'saintsul'],
//     },
//
// ];

// ---------------------знайти найбільшу книжку.
// let max = books[0];
// for (const book of books) {
//     if (book.pages > max.pages) {
//         max = book
//     }
// }
// console.log(max);

//---------------------------знайти книжку/ки з найбільшою кількістю жанрів
// let max = books[0];
// for (const book of books) {
//     if (book.genre.length > max.genre.length ) {
//         max = book;
//     }
// }
// console.log(max);

//-----------------------знайти книжку/ки з найдовшою назвою
// let max = books[0];
// for (const book of books) {
//     if (book.title.length > max.title.length) {
//         max = book
//     }
// }
// console.log(max);

// -------------------------знайти книжку/ки які писали 2 автори
// let max = books[0];
// for (const book of books) {
//     if (book.authors.length ===2) {
//         max = book
//     }
// }
// console.log(max);

//-----------------------------один автор??????????????????????????????????????????????????????
// let max = books[0];
// for (const book of books) {
//     if (book.authors.length ===1) {
//
//     }
// }
// console.log(max);

//----------------------------------------------------------------------------------------------------------------

//1. Створити пустий масив та :
// let array = [];
// let array2 = [];
//        a. заповнити його 50 парними числами за допомоги циклу.
//        b. заповнити його 50 непарними числами за допомоги циклу.
// for (let i = 0; i < 50; i++) {
//     if (i % 2 === 0) {
//         array[i] = i;
//     }
//     else{
//         array2[i] = i;
//     }
// }
//        c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// for (let i = 0; i < 20; i++) {
//     array[i] = Math.round(Math.random() * 100);
// }
//        d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
// for (let i = 0; i < 20; i++) {
//     array[i] = Math.floor((Math.random()*(732 - 8)) + 8);
// }
// console.log(array);
// console.log(array2);

//-------------------------------

//2. Вивести за допомогою console.log кожен третій елемен
// let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18, 63, -15, 78, 2, 18, -7];
// for (let i = 0; i <array.length; i+=3) {
//     console.log(array[i]);
// }

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// for (let i = 0; i <array.length; i+=3) {
//     if (array[i] % 2 === 0) {
//         console.log(array[i]);
//     }
// }

//4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
// let array2 = [];
// for (u = 0 ; u < array.length; u+=3){
//     if (array[u]%2 === 0){
//         array2.push(array[u]);
//     }
// };
// console.log(array2);

// 5. ???????????Вивести кожен елемент масиву, сусід справа якого є парним???????????????????????????????????????????????????
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
// let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18, 63, -15, 78, 2, 18, -7];
// for (let i = 0; i < array.length; i++) {
//     let tmp = array[index];
//     if (array[index + 1] % 2 === 0) {
//
//     }
//
// }
// console.log(tmp);

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
// let array = [100, 250, 50, 168, 120, 345, 188];
// let sum = 0;
// for (let i = 0; i < array.length; i++) {
//     sum = sum + array[i];
// }
// console.log(sum);
// sum = Math.round(+sum / array.length);
//
// console.log(sum);

// 8.??????????????????????Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому,
// і якщо елемент є числом - додати його в інший масив.
//     let array = ['ertre', 54, true, 'fgd', 46, 78, '34', false, 45];



// // - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// let mas = [ 'a', 'b', 'c'];
// let  str = "";
// for (i = 0; i < mas.length; i++){
//     str = str + mas[i];
// };
// console.log(str);

// // - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// while (i < mas.length){
//     str = str + mas[i];
//     i++;
// };
// console.log(str);

// // - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// mas = [ 'a', 'b', 'c'];
// str = "";
// for (const string of mas){
//     str = str + string;
// }
// console.log(str);

// // - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// mas = [ 'a', 'b', 'c'];
// str = "";
// for (const string in mas){
//     str = str + mas[string];
// }
// console.log(str);
//-------------------------------------------------------------------------------------------------------



// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].


// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його,
// якщо два аргументи - складає або конкатенує їх між собою.

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
//
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
//
//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]