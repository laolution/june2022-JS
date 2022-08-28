//методи стрінги
// let str = 'hello world';
// // let concat = str.concat('qwer');// concat- додає в кінець масиву заданий аргумент
// // console.log(concat);
//
// let toUpperCase = str.toUpperCase();
// console.log(toUpperCase);
//
// let toLowerCase = str.toLowerCase();
// console.log(toLowerCase);
//
// let startsWith = str.startsWith('hello',2);//hello--що шукаєм / звідки шукаєм
// console.log(startsWith);
//
// let endsWith = str.endsWith('ld');
// console.log(endsWith);
//
// let str3 = ' dirty string   ';
// let trim = str3.trim(' ');
// console.log(trim);
//
// console.log(str.substring(1, 5));//substring--вирізає зсередини вказані значення по індексу
//
// console.log(str.indexOf('o', 5));// показує індекс вказаної літери,,5--звідки починати
//
// console.log(str.lastIndexOf('r'));//те саме тільки шукає ззаду
//
// console.log(str.charAt(6));// шукає літеру по індексу
//
// console.log(str.replace('h', 'w'));//замыняэ щось на щось але щось одне
//
// console.log(str.replaceAll('l', '$'));//замінює всі
//
// let userinfo = 'Andre-43-185-';
// let split = userinfo.split('-');// розділяє стрінг по вибраному символу і створює масив з роділеними елемнтами
// console.log(split);
//
// let infoUser = 'tolik-45*78^';
// let split1 = infoUser.split(/[-^*]/);// декілька символів на розділення/ регулярний вираз
// console.log(split1);

//------------------------------------------------------------------------------------------
//МЕТОДИ МАСИВІВ

// let arr = [];
// console.log(typeof arr, Array.isArray(arr));//array is array показує що масив це масив
//
// arr[arr.length] = 'fdfd';//додає елемент в масив
// console.log(arr);
// arr[arr.length] = 'qwe';
// console.log(arr);
//
// arr.push('rtu');//додоає елемент в масив
// console.log(arr);
//
// let pop = arr.pop();// викидає останній елемент з масиву
// console.log(arr);
// console.log(pop);// елемент який викинули можна зразу кудись реалізувати
//
// arr.unshift('tititi');// додає елемент в масив спереду
// console.log(arr);
// let shift = arr.shift();//видаляє елемент зпереду
// console.log(shift);

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

// let splice = users.splice(2, 3, 'asasasasas');
// // (звідки починати,,скільки видаляти,,чим замінити)
// //можна нічого не видаляти і тільки вставити нове
// console.log(splice);// те що викинули логується окремим масивом
// console.log(users);

// let slice = users.slice(0, 2);// так само як substring  вирізає з масиву певну кількість елементів і викидає в новий масив
// //// по 2 не включно
// console.log(slice);
//
// // let concat = users.concat(1, 2, 3, 4,);// приєднує значення в масив або приєднує інший масив
// let concat = users.concat([1, 2, 3]);
// console.log(concat);

// console.log(str.includes('llo'));//повертає тру якшо в масиві є задане значення

//---------------------------------------------------------------


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

// let asd = function (x) {
//     console.log('hello', x);
// };
//
// users.forEach(asd);//переюирає масив так само як цикл

// let qwe = function (y) {
//     if (!y.status) {
//         console.log(y);// вивели тільки тру або олс значення
//     }
// };
// users.forEach(qwe);




// users.forEach(function (y) {
//     if (!y.status) {
//         console.log(y);// трошки інша конструкція
//     }
// });

// users.forEach(value => console.log(value));//коротко стрілками

// let filter = users.filter(function (value) {
//     return !value.status;
// });
// console.log(filter);// filter позволяє знаходити значення і скидає їх в новий масив
//
// let filter1 = users.filter(value => value.status);// filter коротка стрілочна форма
// console.log(filter1);
//
//
// let map = users.map(value => value.name);// map позволяє приймати обєкти і виводити стрінги числа або все інше в новий масив
// console.log(map);
//
// let map1 = users.map(value => ({name:value.name, age: value.age}))//видача за двома критеріями
// console.log(map1);
//
// let map2 = users.map((user, index)=>({name:user.name,age:user.age,status:user.status, id: index + 1}))
// console.log(map2);//додали новий ключ в кожен об'єкт
//
// //SPREAD- розмазання
// let map3 = users.map((user, index)=>({...user, id: index + 1}))
// console.log(map3);// використали шось типу рест аргумент щоб скоротити ізробити так як попередній приклад
//
// let find = users.find(value => value.name === 'max');//перебирає масив і за заданим пошуком виводить той обєкт в якому знаходить збіг
// console.log(find);
//
// let sort= users.sort((user1, user2) => user1.age - user2.age);
// console.log(sort);// сортує значення по вазі..вага визначається знаком +- або аскі кодом
//
// let sort1 = users.sort((user1, user2) => {
//     if (user1.name > user2.name) {
//         return 1;
//     }
//     if (user1.name < user2.name) {
//         return -1;
//     }
//     if (user1.name === user2.name) {
//         return 0;
//     }
// });
// console.log(sort1);// сортування по алфавіту..всі стрінги завжди сортуєм по такому принципу
//
// console.log(users.sort((a, b) => a.name.length - b.name.length));//по довжині імені
//
//
// console.log(users.reduce((accumulator, user) => {
//     if (user.status) {
//         accumulator.statT.push(user);
//     } else {
//         accumulator.statF.push(user);
//     }
//     return accumulator
// }, {statT: [], statF: []}));




