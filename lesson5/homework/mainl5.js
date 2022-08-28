// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function arrea(a,b) {
//     let res = a * b;
//     return res;
// }
// console.log(arrea(20, 10));
//-----------------
// let arre = (a, b) => a * b;
// console.log(arre(5, 4));


// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function round(pi, r) {
//     let res = pi * r ** 2;
//     return res;
// }
// console.log(round(3.14, 4));
// //----------------------
// let pi=3.14
// let ro = (pi, r) => pi * r ** 2;
// console.log(ro(pi, 5));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function cilin(pi, r, h) {
//     let res =2*pi*r*(h+r)
//     return res;
// }
// console.log(cilin(3.14, 3, 6));
//-----------------------------------------------
// let cil = (pi, r, h) => 2 * pi * r * (h + r);
// console.log(cil(3.14, 3, 6));

// - створити функцію яка приймає масив та виводить кожен його елемент
// let numbers = ['ertre', 54, true, 'fgd', 46, 78, '34', false, 45];
// function arra(array) {
//     for (let arrayElement of array) {
//         console.log(arrayElement);
//     }
// }
// arra(numbers);
//------------------------------------------

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function para(text) {
//     document.write(`<div>${text}</div>`);
// }
// para('qwerty asasad')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function ule(text) {
//     document.write(`<!--<ul>-->
// <li>${text}</li>
// <li>${text}</li>
// <li>${text}</li>
// </ul>`)
// }
// ule('fafafafa')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через
// аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function ure(text, count) {
//     document.write(`<ul>`)
//     for (let i = 0; i < count; i++) {
//         document.write(`<li>${text}</li>`);
//
//     }
//     document.write(`</ul>`)
// }
// ure('wooooooow', 10);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let numbers = ['ertre', 54, true, 'fgd', 46, 78, '34', false, 45];
//
// document.write(`<ul>`)
// function primitiv(array) {
//     for (let arrayElement of array) {
//         document.write(`<li>${arrayElement}</li>`)
//     }
// }
//
// document.write(`</ul>`)
// primitiv(numbers);


// -створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
// let array = [
//     {
//         id: 1,
//         name: 'Tolik',
//         age: 25,
//     },
//
//     {
//         id: 2,
//         name: 'Tolik',
//         age: 25,
//     },
//
//     {
//         id: 3,
//         name: 'Tolik',
//         age: 25,
//     },
// ];
// function block(array) {
//     for (const arrayElement of array) {
//     document.write(`<div>${arrayElement.id}--${arrayElement.name}--${arrayElement.age}</div>`);
//
//     }
//
// }
//
// block(array);

// - створити функцію яка повертає найменьше число з масиву

// let numbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18, 63, -15, 78, 2, 18, -7];
//
// function mini(array) {
//     let min = array[0];
//     for (const item of array) {
//         if (min > item) {
//             min = item;
//         }
//     }
//     return min;
// }
//
// console.log(mini(numbers));

//-----------------------------------------------------------------
//

// - Дано натуральное число n. Выведите все числа от 1 до n.
// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания,
// если A < B, или в порядке убывания в противном случае.


// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]