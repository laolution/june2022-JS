//TRY/CATCH
// console.log('start');
// try {
//     console.log(errorRef);//pзнаходить помилку
// } catch (error) {
//     console.log(error);//віхорплює її і виводит
// } finally {
//     console.log('adasdal');//дія яка буде всерівно працювати
// }
// console.log('end');
// може бути try-catch/ try-finally
//----------------------------------------------------
// function divide(a, b) {
//     if (b === 0) {
//         throw new Error('b is zero');
//     }
//     return a / b;
// }
//
// try {
//
//     divide(10, 0);
// } catch (e){
//     console.log(e);
//     console.log(divide(10, 1));
// }

//----------------------------------------OCO optional chain operator

// let user = {
//     name: 'vasya',
//
//
// };
// console.log(user.name);
// console.log(user.age);
// console.log(user.wife?.name);//якщо обєкта не існує то знак питання не дає вибивати помилку.

//------------------------------------------------ES6 objects

// let name = 'vasya';
// let age = 45;
//
// let user = {
//     name,//name:name
//     age,//age:age
//     greating() {
//         console.log('hi');
//     },
//
// }
// console.log(user);
// console.log(user.greating());

//-------------------------------------------------Destructuring

// let user = {
//     name: 'vasya',
//     age: 48,
//     status: true,
// }
// // let name = user.name;-----витягуєм проперті обєкта
// // let age = user.age;
// // let status=user.status
//
// //деструктуризація
// let {name, age, status} = user;//крім  того що воно витягує проперті воно ще декларує всі змінні (let name і тд.)
// console.log(name, age, status);

//------------------

// let user = {
//     name: 'vasya',
//     age: 48,
//     status: true,
//     wife: {
//         name: 'anna',
//     }
// }
//
// let {wife, wife: {name}, name: userName} = user;// дістали вайфу..ще раз викликали вже нейм і дістали нейм
// console.log(wife);
// console.log(name);
// console.log(userName);// додали псевдонім до імені основного обєкта і викликали його імя через псевдонім

//-----------------масиви

// let nums = [11, 22, 33];
// // let a = nums[0];
// // let b = nums[1];
// // let c = nums[2];
//
// let [a, , c, x] = nums;//другу цифру пропустили..четверта невзначеня
// console.log(a, c, x);


//------------------------------------------------SPRED

// let user = {
//     name: 'vasya',
//     age: 31,
//     wife: {
//         name: 'anna'
//     }
// }
//
// // let kokos = {
// //     name: user.name,
// //     age: user.age,
// // }
//
// let kokos = {
//     ...user,//варіант як скопіювати обєкт..але він є ссилочного типу тому зміни в копії
//     // на 2 рівні(вайф і тд) змінять дані і в оригіналі
//     status: true,
//     name: 'kokos',
//
// };
// kokos.name = 'kokos';
// console.log(user);
// console.log(kokos);
// console.log(kokos === user);
// console.log(user.wife === kokos.wife);

//------------------------------------------------JSON JavaScript Object Notation
//----перетворює обєкти в стрінгу і считується всіма мовами програмування

// let user = {
//     name: 'vasya',
//     age: 31,
//     wife: {
//         name: 'anna'
//     },
//     greating() {
//         console.log('hi');
//     },
// }
//
// let kokos = {
//     ...user,
//     status: true,
//     name: 'kokos',
//
// };
//
// let userJson = JSON.stringify(user);//перетворює в стрінгу
// console.log(userJson);
// let parseUser = JSON.parse(userJson);//--повертає назад в обєкт...поан копія..але не копіює поведінку..тобто не копіює функції
// console.log(parseUser);
// console.log(parseUser === user);
// console.log(parseUser.wife === user.wife);
//
// let parseUser1 = JSON.parse(JSON.stringify(user));////коротко записано як зробити копію
// console.log(parseUser1);

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
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//
// let users2 = [...users];
//
// console.log(users2);
// console.log(users === users2);//false
// console.log(users[0] === users2[0]);//true
//
// let users3 = JSON.parse(JSON.stringify(users));
// console.log(users);
// console.log(users3);
// console.log(users[0] === users3[0]);//false

//---------------------------------------------------------Closures замикання
//позволяє обмежити доступ до свого коду за рахунок звернення до змінних тільки через спеціальні функції

// let user = {
//     name: 'vasya',
//     age: 31,
//     wife: {
//         name: 'anna'
//     },
//     foo() {
//         console.log('hi');
//     },
// }
//
// user.foo();
// console.log(user.name);
// user.age = -100
// console.log(user.age);

// function userBuilder(name, age) {
//     let user = {name, age};
//     return {
//         getAge() {
//             return user.age;
//         },//GETER функція яка помагає нам отримати значення з локального обєкта
//         getName() {
//             return user.name
//         },
//         setAge(age) {
//             if (age>0) {
//                 user.age = age;
//             }
//         },//SETER функція яка позволяє задавати локальному обєктку значення,,не впливаючи на основний глобальний
//     };
// }
//
// let ret = userBuilder('xxx', 111);
// console.log(ret);
// console.log(ret.getAge());
// console.log(ret.getName());
// ret.setAge(48);
// console.log(ret.getAge());





