// Конструктор помагає нам зробити шаблом користувача і створювати нових персонажі в вже з заданими ключами
//помагає один раз створити шаблон і потім ініціалізувати по ньому обєкти

// function User(name, age) {
//     this.name = name;
//     this.age = age;
//     this.greating = function (msg) {
//         console.log(`${msg} my name is ${this.name}`);
//     };
// }
//
// let xxx = new User('vasya', 45);
// console.log(xxx);
// xxx.greating('hello');
//
//
// let ola = new User('olya', 21);
// console.log(ola);
// ola.greating('aloha');

//------------------------підміна контексту this

// function User(name,age) {
//     this.name = name;
//     this.age = age;
//     this.greating = function (msg) {
//         console.log(`${msg} my name is ${this.name}`);
//     };
// }
//
// let you = new User('vasya',34);
// you.greating('hi');
//
// let friend={
//     name: 'kokos',
//     age: 45,
//     password:1212
// }
// you.greating.apply(friend, ['helllo']);// APPLY підставляє імя друга в наше речення/підміна контексту//другим аргументом вносим повідомлення
// you.greating.call(friend, ['aloha',]);
//
// let copyBind = you.greating.bind(friend);// робьить копію контексту
// copyBind('fufufufu');

//--------------------НАСЛІДУВАННЯ---суперюзер запозичає всі аргументи в юзера і додоає свої якщо є..

// function SuperUser(name, age, password) {
//     User.apply(this, arguments);
//     this.password = password;
//
// }
//
// let superUser = new SuperUser('wello', 26, '787898');
// console.log(superUser);
// superUser.greating('hi there');

//-----------------------------------CLASSES

// class User{
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//
//     greating() {
//         console.log(`hello my name is ${this.name}`);
//     }
// }
//
// let user = new User('vadysu', 89);
// console.log(user);
// user.greating();
//
// class SuperUser extends User {
//     constructor(name, age, password) {
//         super(name, age);
//         this.password = password;
//     }
// }
//
// let sup = new SuperUser('faking', 76, 1111);
// console.log(sup);
// sup.greating();








































