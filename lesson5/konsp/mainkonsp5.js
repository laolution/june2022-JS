//FUNCTION DECLARATION
// function writer(text) {
//     document.write(`<div>${text}</div>`)
// }

// writer('hello');
// writer('dodood');

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

// function printer(array) {
//     for (const arrayElement of array) {
//         console.log(arrayElement);
//     }
// }
// printer(users);
// printer(products);

// -------------------------------

// function sumTwoNum(a,b) {
//     let res = a + b;
//     return res;
// }
// let x = sumTwoNum(100, 200);
// console.log(x);

// -----------------------------------------

// function tax(sum,tax) {
//     return sum - (sum / 100) * tax;
// }
//
// let res = tax(100, 20);
// console.log(res);
// let resTwo = tax(res, 25);
// console.log(resTwo);

// -------------------------------------- /

// function calculator(a, b, action) {
//     let result;
//     switch (action) {
//         case '+':
//             res = a + b;
//             break;
//         case'-':
//             res = a - b;
//             break;
//         default:
//             res = 0;
//
//     }
//     return res;
// }

// console.log(calculator(10, 20, '-'));
// console.log(calculator(10, 20, '+'));

// ----------------------------------------------------------------------------------
//FUNCTION EXPRESSION
//-----------------------------------------------------
//HOISTING-вспливання декларації автомтично ніби вверх..тобто функція буде працювати вест час..експрешн не має такої властивості тому логати можна тільки під самим виразом.
// console.log(asd());
//
// function asd() {
//     return 1000;
// }

// ----------- expression
// let qwe = () => {
//     return 2000;
// };
// console.log(qwe());
// let zxc = (a, b) => {
//     return a + b;
// };
// console.log(zxc(10, 5));

// --------------скорочено
// let zxcNew = (a, b) => a + b;
// console.log(zxc(15, 10));

// ----------------------------------------------------------

//rest argument --створює масив з вказаних аргументів....ставиться завжди вкінці після всіх аргументів
// function foobar(a,b,...xxx) {
//     console.log(xxx);
// }
// foobar(1,2,3,4,5)

// ----------------------------------------

// console.log(Math.round(Math.random() * 100));

// -------------------------міняємо місцями число з якимось індексом на наступне що йде за ним (тобто index+1)

// let arr = [1, 2, 3, 4, 5];
//
// let swap = (array, index) => {
//     let tmp = array[index];
//     array[index] = array[index + 1];
//     array[index + 1] = tmp;
//     return arr;
// };
// console.log(swap(arr, 1));

//----------------------------функція повертає найменше число з масиву

// let arr = [12, 4, -5, -32, 152];
//
// let findMin = (array) => {
//     let min = array[0];
//     for (const item of array) {
//         if (min > item) {
//             min = item;
//         }
//     }
//     return min;
// };
// findMin(arr)
//--------------------------створити масив з рандомними значеннями і масив з числами помноженими на 5
// const arr1 = [];
// for (let i = 0; i < 10; i++) {
//     arr1[i] = Math.round(Math.random() * 100);
// }
// const arr2 = [];
// for (let i = 0; i < arr1.length; i++) {
//     arr2[i] = arr1[i] * 5;
// }
// console.log(arr1);
// console.log(arr2);

