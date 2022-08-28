// Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }



// створити пустий масив, наповнити його 10 об'єктами new User(....)
// let arr = [];
//
// let user1 = new User(12, 'andriy', 'lastovetskyy', 'laolution', 38093);
// let user2 = new User(42, 'andriy', 'lastovetskyy', 'laolution', 38093);
// let user3 = new User(74, 'andriy', 'lastovetskyy', 'laolution', 38093);
// let user4 = new User(3, 'andriy', 'lastovetskyy', 'laolution', 38093);
// let user5 = new User(17, 'andriy', 'lastovetskyy', 'laolution', 38093);
// let user6 = new User(89, 'andriy', 'lastovetskyy', 'laolution', 38093);
// let user7 = new User(45, 'andriy', 'lastovetskyy', 'laolution', 38093);
// let user8 = new User(96, 'andriy', 'lastovetskyy', 'laolution', 38093);
// let user9 = new User(125, 'andriy', 'lastovetskyy', 'laolution', 38093);
// let user10 = new User(2, 'andriy', 'lastovetskyy', 'laolution', 38093);
//
// arr.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);
// console.log(arr);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// let filter = arr.filter(value => value.id % 2 === 0);
// console.log(filter);


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// let sort = arr.sort((a, b) => a.id - b.id);
// console.log(sort);


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }

// створити пустий масив, наповнити його 10 об'єктами Client

// let arr1 = [];
//
// let user1 = new Client(12, 'andriy', 'lastovetskyy', 'laolution', 38093,[1,2,3]);
// let user2 = new Client(42, 'andriy', 'lastovetskyy', 'laolution', 38093,[2,3,5,4,8]);
// let user3 = new Client(74, 'andriy', 'lastovetskyy', 'laolution', 38093,[2,1]);
// let user4 = new Client(3, 'andriy', 'lastovetskyy', 'laolution', 38093,[8,8,5,6,5,6,2]);
// let user5 = new Client(17, 'andriy', 'lastovetskyy', 'laolution', 38093,[3]);
// let user6 = new Client(89, 'andriy', 'lastovetskyy', 'laolution', 38093,[5,8,2,8]);
// let user7 = new Client(45, 'andriy', 'lastovetskyy', 'laolution', 38093,[1,2,3,3,8]);
// let user8 = new Client(96, 'andriy', 'lastovetskyy', 'laolution', 38093,[7,8,9]);
// let user9 = new Client(125, 'andriy', 'lastovetskyy', 'laolution', 38093,[8,5,2,9]);
// let user10 = new Client(2, 'andriy', 'lastovetskyy', 'laolution', 38093, [1, 2]);
//
// arr1.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);
// console.log(arr1);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// let sort1 = arr1.sort((a, b) => a.order.length - b.order.length);
// console.log(sort1);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car(model, producer, year, maxspeed, volume,) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxspeed = maxspeed;
//     this.volume = volume;
//
//     this.drive = function () {
//         console.log(`Їдемо зі швидкістю ${maxspeed}км на годину`);
//     };
//
//     this.info = function () {
//         for (const item in this) {
//             if (typeof this[item] !== 'function') {
//                 console.log(`${item} -- ${this[item]}`);
//             }
//         }
//     };
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxspeed = newSpeed;// можна поставити += тоді воно буде додавати задану шв до базової
//     };
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     };
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     };
//
// }

// let car1 = new Car('panamera', 'porshe', 2020, 400, 3.5);
// console.log(car1);
// car1.drive();
//
// car1.info();
//
// car1.increaseMaxSpeed(354);
// console.log(car1);
// car1.drive()
//
// car1.changeYear(1995);
// console.log(car1);
//
// car1.addDriver({name: 'Andriy', age: 24});


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Car {
//     constructor(model, producer, year, maxspeed, volume) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxspeed = maxspeed;
//         this.volume = volume;
//     }
//
//     drive() {
//         console.log(`Їдемо зі швидкістю ${this.maxspeed}км на годину`);
//     }
//
//     info() {
//         for (const item in this) {
//             if (typeof this[item] !== 'function') {
//                 console.log(`${item} -- ${this[item]}`);
//             }
//         }
//
//     }
//
//     increaseMaxSpeed(newSpeed) {
//         this.maxspeed = newSpeed;// можна поставити += тоді воно буде додавати задану шв до базової
//     }
//
//     changeYear(newValue) {
//         this.year = newValue;
//     }
//
//     addDriver(driver) {
//         this.driver = driver;
//     }
// }
//
// let car = new Car('M5', 'BMW', 2021, 370, 4.0);
// console.log(car);
//
// car.drive();
// car.info();
//
// car.increaseMaxSpeed(400);
// console.log(car);
// car.drive();
// car.info();
//
// car.changeYear(1488);
// console.log(car);
// car.info();
//
// car.addDriver({name: 'Anton', age: 45});
// console.log(car);
// car.info();


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// function Popel(name, age, tufla) {
//     this.name = name;
//     this.age = age;
//     this.tufla = tufla;
// }
//
// let arr = [];
//
// let ushka1 = new Popel('ania', 18, 38);
// let ushka2 = new Popel('tania', 18, 35);
// let ushka3 = new Popel('olia', 18, 40);
// let ushka4 = new Popel('ivan', 18, 37);
// let ushka5 = new Popel('sveta', 18, 33);
// let ushka6 = new Popel('ulia', 18, 36);
// let ushka7 = new Popel('marta', 18, 31);
// let ushka8 = new Popel('lida', 18, 28);
// let ushka9 = new Popel('igor', 18, 45);
// let ushka10 = new Popel('julia', 18, 40);
//
// arr.push(ushka1, ushka2, ushka3, ushka4, ushka5, ushka6, ushka7, ushka8, ushka9, ushka10);
// // console.log(arr);
//
// // Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// class Prince {
//     constructor(name, age, tufla) {
//         this.name = name;
//         this.age = age;
//         this.tufla = tufla;
//     }
// }
//
// let prince = new Prince('Tolik', 14, 45);

// За допомоги циклу знайти яка попелюшка повинна бути з принцом.

// let find = (array, prince) => {
//     for (const item of array) {
//         if (prince.tufla === item.tufla) {
//             return `Oh NO! I've found ${item.name}`;
//         }
//     }
// };
// console.log(find(arr, prince));

// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// let popel = arr.find(value => prince.tufla === value.tufla);
// console.log(popel);


//---------------------------------------------------ADDITIONAL-----------------------------------------------

//написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль