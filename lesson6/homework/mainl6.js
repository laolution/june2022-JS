// // Знайти та вивести довжину настипних стрінгових значень
// // 'hello world', 'lorem ipsum', 'javascript is cool'
// let str = 'javascript is cool';
// console.log(str.length);
//
// // - Перевести до великого регістру наступні стрінгові значення
// // 'hello world', 'lorem ipsum', 'javascript is cool'
// let str1 = 'javascript is cool';
// console.log(str1.toUpperCase());
//
// // - Перевести до нижнього регістру настипні стрінгові значення
// // 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let str2 = 'JAVASCRIPT IS COOL';
// console.log(str2.toLowerCase());
//
// // - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str3 = ' dirty string   ';
// let trim = str3.trim(' ');
// console.log(trim);
//
// // - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// // let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//
//     let str4 = 'Ревуть воли як ясла повні';
// let stringToArray = str4.split(' ');
// console.log(stringToArray);
// //------------------
// let str5 = 'Ревуть воли як ясла повні';
// let stringToArray1 = (str) => str.split(' ');
// console.log(stringToArray1(str5));
//
// // - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let arr = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
// // let map = arr.map(value => value.toString());
// //або
// let map = arr.map(value => value+'');
// console.log(map);
//
// // - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// //     let nums = [11,21,3];
// // sortNums(nums,'ascending') // [3,11,21]
// // sortNums(nums,'descending') // [21,11,3]
//
// let nums = [11,21,3];
// const sortNums = (direction,arr) => {
//     if (direction === 'ascending') {
//         arr.sort((a, b) => a - b);
//     }
//     else if (direction === 'descending') {
//         arr.sort((a, b) => b - a);
//     }
//     return arr;
// };
// console.log(sortNums('ascending', nums));
// console.log(sortNums('descending', nums));
//
//
// // - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // -- відсортувати його за спаданням за monthDuration
// let sort1 = coursesAndDurationArray.sort((a, b) => a.monthDuration-b.monthDuration);
// console.log(sort1);
// // -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let filter = coursesAndDurationArray.filter(value => value.monthDuration > 5);
// console.log(filter);


// описати колоду карт
// let deckOfCards = [
//     {
//         cardSuit: null,
//         value: 'Joker',
//         color: 'black'
//     },
//     {
//         cardSuit: null,
//         value: 'Joker',
//         color: 'red'
//     },
//     {
//         cardSuit: 'spade',
//         value: 'ace',
//         color: 'black'
//     },
//     {
//         cardSuit: 'clubs',
//         value: 'ace',
//         color: 'black'
//     },
//     {
//         cardSuit: 'diamond',
//         value: 'ace',
//         color: 'red'
//     },
//     {
//         cardSuit: 'heart',
//         value: 'ace',
//         color: 'red'
//     },
//     {
//         cardSuit: 'spade',
//         value: 'king',
//         color: 'black'
//     },
//     {
//         cardSuit: 'clubs',
//         value: 'king',
//         color: 'black'
//     },
//     {
//         cardSuit: 'diamond',
//         value: 'king',
//         color: 'red'
//     },
//     {
//         cardSuit: 'heart',
//         value: 'king',
//         color: 'red'
//     },
//     {
//         cardSuit: 'spade',
//         value: 'queen',
//         color: 'black'
//     },
//     {
//         cardSuit: 'clubs',
//         value: 'queen',
//         color: 'black'
//     },
//     {
//         cardSuit: 'diamond',
//         value: 'queen',
//         color: 'red'
//     },
//     {
//         cardSuit: 'heart',
//         value: 'queen',
//         color: 'red'
//     },
//     {
//         cardSuit: 'spade',
//         value: 'jack',
//         color: 'black'
//     },
//     {
//         cardSuit: 'clubs',
//         value: 'jack',
//         color: 'black'
//     },
//     {
//         cardSuit: 'diamond',
//         value: 'jack',
//         color: 'red'
//     },
//     {
//         cardSuit: 'heart',
//         value: 'jack',
//         color: 'red'
//     },
//     {
//         cardSuit: 'spade',
//         value: '10',
//         color: 'black'
//     },
//     {
//         cardSuit: 'clubs',
//         value: '10',
//         color: 'black'
//     },
//     {
//         cardSuit: 'diamond',
//         value: '10',
//         color: 'red'
//     },
//     {
//         cardSuit: 'heart',
//         value: '10',
//         color: 'red'
//     },
//     {
//         cardSuit: 'spade',
//         value: '9',
//         color: 'black'
//     },
//     {
//         cardSuit: 'clubs',
//         value: '9',
//         color: 'black'
//     },
//     {
//         cardSuit: 'diamond',
//         value: '9',
//         color: 'red'
//     },
//     {
//         cardSuit: 'heart',
//         value: '9',
//         color: 'red'
//     },
//     {
//         cardSuit: 'spade',
//         value: '8',
//         color: 'black'
//     },
//     {
//         cardSuit: 'clubs',
//         value: '8',
//         color: 'black'
//     },
//     {
//         cardSuit: 'diamond',
//         value: '8',
//         color: 'red'
//     },
//     {
//         cardSuit: 'heart',
//         value: '8',
//         color: 'red'
//     },
//     {
//         cardSuit: 'spade',
//         value: '7',
//         color: 'black'
//     },
//     {
//         cardSuit: 'clubs',
//         value: '7',
//         color: 'black'
//     },
//     {
//         cardSuit: 'diamond',
//         value: '7',
//         color: 'red'
//     },
//     {
//         cardSuit: 'heart',
//         value: '7',
//         color: 'red'
//     },
//     {
//         cardSuit: 'spade',
//         value: '6',
//         color: 'black'
//     },
//     {
//         cardSuit: 'clubs',
//         value: '6',
//         color: 'black'
//     },
//     {
//         cardSuit: 'diamond',
//         value: '6',
//         color: 'red'
//     },
//     {
//         cardSuit: 'heart',
//         value: '6',
//         color: 'red'
//     }
// ]

// - знайти піковий туз

// let filter = deckOfCards.find(value => value.cardSuit === "spade" && value.value === "ace");
// console.log(filter);

// - всі шістки
// let find = deckOfCards.filter(value => value.value === '6')
// console.log(find);
// - всі червоні карти
// let allred = deckOfCards.filter(value => value.color === 'red');
// console.log(allred);
// - всі буби
// let diamond = deckOfCards.filter(value => value.cardSuit === 'diamond');
// console.log(diamond);
// - всі трефи від 9 та більше
// let tref = deckOfCards.filter(value => value.cardSuit === 'spade' && value.value >8 || typeof value.value === 'string' && value.cardSuit === 'spade' || value.value === 'Joker' && value.color === 'black');
// console.log(tref);

// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
//
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

// console.log(deckOfCards.reduce((accum, card) => {
//     if (card.cardSuit === 'spade') {
//         accum.spades.push(card);
//     }
//     if (card.cardSuit === 'diamond') {
//         accum.diamonds.push(card);
//     }
//     if (card.cardSuit === 'heart') {
//         accum.hearts.push(card);
//     }
//     if (card.cardSuit === 'clubs') {
//         accum.clubs.push(card);
//     } else {
//         accum.jocker.push(card);
//     }
//     return accum;
// }, {spades: [], diamonds: [], hearts: [], clubs: [], jocker: []}));


//---------------------------------------------------------------------------------------------------
//ADDITIONAL

//- Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]


// function cutString(str, n) {
//     let res = [];
//     for (var i = 0; i < str.length; i += n) {
//         res.push(str.substr(i, n));
//     }
//     return res;
// }
// document.writeln(cutString('наслаждение', 2)) // [нас,лаж,ден,ие]


// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     document.writeln(delete_characters(str, 7)); // Каждый
//
// var str = 'Каждый охотник желает знать';
// function delete_characters(str, length) {
//
//     if ((str.constructor === String) && (length>0)) {
//         return str.slice(0, length);
//     }
// };
//
// document.writeln(delete_characters(str, 5));



// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//    document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
//    let str = "HTML JavaScript PHP";
//
// function insert(str) {
//     return str.toUpperCase().replaceAll(' ', '-')
// }
// document.writeln(insert(str));


// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

// let str1 = 'string shota tam ne duzhe  chemna lorem trali vali i tuda siuda.ty ne tykay tobi nada ty i vuzyvay';
//
// function capitalBukva(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1);
// }
// document.writeln(capitalBukva(str1));

// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

// let str = '@#$%Harry &^%  Potter    %^%';
// const norm = (st) => {
//     let string = st.split('').map(value => (value >= 'A' && value <= 'Z') || (value >= 'a' && value <= 'z') ? value : ' ').join('')
//         .trim();
//     while (string.includes('  ')) {
//         string = string.replace('  ', ' ');
//     }
//     return string;
// };
// console.log(norm(str));


// // - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// function getRandom(max){
//     const array=[]
//     for (let i = 0; i < 20; i++) {
//         array[i]=Math.round(Math.random() * max)
//     }
//     return array
// }
// console.log(getRandom(100));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
// let arr = [0, 31, 42, 10, 97, 18, 69, 57, 47, 28, 19, 87, 99, 33, 84, 5, 0, 49, 53, 65];
// let sort = arr.sort((a, b) => a - b);
// console.log(sort);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)
// let filtr = arr.filter(value => value % 2 === 0 && value > 0);
// console.log(filtr);


// - ?????????????????????????????Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
// let string = 'string shota tam ne duzhe chemna lorem';
// function capitalize(str) {
//     let indexTyre = str.indexOf(' ');
//     return str.charAt(indexTyre + 1).toUpperCase()+str.slice(indexTyre+1)
//
// }
// document.writeln(capitalize(string));
//
// var str = "string shota tam ne duzhe chemna lorem";
// function capitalize(str) {
//     return str.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()})
// }
// document.writeln(capitalize(str))

// - Створити функцію-валідатор для адрес електронної пошти.
// Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться
// не меньше ніж на 2 символ далі після равлика, функція не чутлива
// до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com

// let checkEmail = (email) => {
//     const emailArr = email.split('@');
//     if (emailArr.length !== 2) {
//         return false;
//     }
//     const [name,fullDomain] = emailArr;
//     const [beforeDot, afterDot] = fullDomain.split('.');
//     if (beforeDot.length < 2 || !afterDot || !name) {
//         return false;
//     } else {
//         return true;
//     }
//
// };
// console.log(checkEmail('some.email@gmail.com'));


// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.


// - є масив
// let coursesArray = [
//              {
//                  title: 'JavaScript Complex',
//                  monthDuration: 5,
//                  hourDuration: 909,
//                  modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//              },
//              {
//                  title: 'Java Complex',
//                  monthDuration: 6,
//                  hourDuration: 909,
//                  modules: ['html',
//                      'css',
//                      'js',
//                      'mysql',
//                      'mongodb',
//                      'angular',
//                      'aws',
//                      'docker',
//                      'git',
//                      'java core',
//                      'java advanced']
//              },
//              {
//                  title: 'Python Complex',
//                  monthDuration: 6,
//                  hourDuration: 909,
//                  modules: ['html',
//                      'css',
//                      'js',
//                      'mysql',
//                      'mongodb',
//                      'angular',
//                      'aws',
//                      'docker',
//                      'python core',
//                      'python advanced']
//              },
//              {
//                  title: 'QA Complex',
//                  monthDuration: 4,
//                  hourDuration: 909,
//                  modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//              },
//              {
//                  title: 'FullStack',
//                  monthDuration: 7,
//                  hourDuration: 909,
//                  modules: ['html',
//                      'css',
//                      'js',
//                      'mysql',
//                      'mongodb',
//                      'react',
//                      'angular',
//                      'aws',
//                      'docker',
//                      'git',
//                      'node.js',
//                      'python',
//                      'java']
//              },
//              {
//                  title: 'Frontend',
//                  monthDuration: 4,
//                  hourDuration: 909,
//                  modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//              }
//          ];


// відсортувати його в спадаючому порядку за кількістю елементів в полі modules
// let spad = coursesArray.sort((a, b) => b.modules.length - a.modules.length);
// console.log(spad);


// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
// let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5
// let symb = "о", str = "Астрономия это наука о небесных объектах";
// function count(str, symb) {
//
//     for (let count = -1, index = 0; index != -1; count++, index = str.indexOf(symb, index + 1));
//
//     return count;
// }
//
// document.writeln(count(str, symb)) // 5


// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
// let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
// let str = "Сила тяжести приложена к центру масс тела";
//
// function cutString(str, n) {
//     return str.split(" ").splice(0, n).join(" ");
// }
//
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'



// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).
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
//         title: 'harry potter',
//         pages: 474,
//         genre: ['fantasy', 'fairytale', 'tyryt', 'ruru'],
//         authors: ['joanne rowling', 'saintsul'],
//     },
// ];

// -знайти наібльшу книжку.
// let biggest = books.sort((author1, author2) => author2.pages - author1.pages);
// console.log(biggest);


// - знайти книжку/ки з найбільшою кількістю жанрів
// let gen = books.sort((a, b) => b.genre.length - a.genre.length);
// console.log(gen);

// - знайти книжку/ки з найдовшою назвою
// let name = books.sort((a, b) => b.title.length - a.title.length);
// console.log(name);

// - знайти книжку/ки які писали 2 автори
// let auth2 = books.filter(value => value.authors.length === 2);
// console.log(auth2);

// - знайти книжку/ки які писав 1 автор
// let auth1 = books.filter(value => value.authors.length === 1);
// console.log(auth1);


// - вісортувати книжки по кількості сторінок по зростанню
// let zrost = books.sort((a, b) => a.pages - b.pages);
// console.log(zrost);

//     8. Створити масив з будь якими значеннями(стрінги, числа, і) тд...). пройтись по ньому,
// // і якщо елемент є числом - додати його в інший масив.
// let array = ['ertre', 54, true, 'fgd', 46, 78, '34', false, 45];
// let sort = array.filter(value =>);
// console.log(sort);


// console.log(array.reduce((accum, Number) => {
//     if (typeof Number === 'number') {
//         accum.numbers.push(Number);
//     } else {
//         accum.notNumbers.push(Number);
//     }
//     return accum;
// }, {numbers: [], notNumbers: []}));;


