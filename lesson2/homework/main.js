// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let transport = ["mazda", "bmw", "mercedes", "lexus", "honda", "audi", "toyota", "nissan", "infinity", "ford"];
console.log(transport);
console.log(transport[3]);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title: 'sherlock',
    pageCount: 300,
    genre: 'detective',
};
let book2 = {
    title: 'atlant',
    pageCount: 175,
    genre: 'business',
};
let book3 = {
    title: 'juliete',
    pageCount: 700,
    genre: 'roman',
}
console.log(book1, book2, book3);
console.log(book3.title);
console.log(book2['genre']);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age;


let book4 = {
        title: 'sherlock',
        pageCount: 300,
        genre: 'detective',
        authors: [{name: 'ConanDoyle', age: 55}]
    }
;
let book5 = {
    title: 'atlant',
    pageCount: 175,
    genre: 'business',
    authors: [{name: 'steve', age: 48}]
};
let book6 = {
    title: 'juliete',
    pageCount: 700,
    genre: 'roman',
    authors: [{name: 'romeo', age: 120}]
}
console.log(book4.authors[0].name);
console.log(book5.authors[0].name);
console.log(book6.authors[0]['name'])


// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let array = [
    {
        name: 'vasya',
        username: 'vasilok',
        password: 'qwert123'
    },

    {
        name: 'vadfgndfsya',
        username: 'dfgndfgn',
        password: 4654546545,
    },

    {
        name: 'dfgnx',
        username: 'dfgn',
        password: 'dsfgxfcv'
    },

    {
        name: 'hgmvbc',
        username: 'sfgcvf',
        password: 'fghmbv'
    },

    {
        name: 'vasxcvgnfya',
        username: 'dtmkgh',
        password: 'dfgnd'
    },

    {
        name: 'dfgn',
        username: 'dfgn',
        password: 'dfgndfgn'
    },

    {
        name: 'dgfndfg',
        username: 'cfgncdf',
        password: 'fghmgh'
    },

    {
        name: 'fghmfgh',
        username: 'dbb',
        password: 'qdfbdf3'
    },

    {
        name: 'bdfbya',
        username: 'vdfbdflok',
        password: 'qwert1fddb23'
    },

    {
        name: 'fmdlk',
        username: 'vaddfvbsilok',
        password: 'qwerfbd'
    }

]

console.log(array[0].password);
console.log(array[1]['password']);
console.log(array[2].password);
console.log(array[3].password);
console.log(array[4].password);
console.log(array[5].password);
console.log(array[6].password);
console.log(array[7].password);
console.log(array[8].password);
console.log(array[9].password);

