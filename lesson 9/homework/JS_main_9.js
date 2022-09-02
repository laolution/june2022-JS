//- є масив

// let simpsons = [
//     {
//         name: 'Bart',
//         surname: 'Simpson',
//         age: 10,
//         info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//     },
//     {
//         name: 'Homer',
//         surname: 'Simpson',
//         age: 40,
//         info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//     },
//     {
//         name: 'Marge',
//         surname: 'Simpson',
//         age: 38,
//         info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//     },
//     {
//         name: 'Lisa',
//         surname: 'Simpson',
//         age: 9,
//         info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//     },
//     {
//         name: 'Maggie',
//         surname: 'Simpson',
//         age: 1,
//         info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//     },
// ];



// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
// Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту

// let targets = document.getElementsByClassName('member');
// let target = targets[0];
//
// for (const person of simpsons) {
//     let mainDiv = document.createElement('div');
//     mainDiv.classList.add('member');
//     target.appendChild(mainDiv);
//
//     let personName = document.createElement('h2');
//     personName.innerText = person.name + " " + person.surname;
//     mainDiv.appendChild(personName);
//
//     let personAge = document.createElement('div');
//     personAge.innerText = `Age-${person.age}`;
//     mainDiv.appendChild(personAge);
//
//     let info = document.createElement('div');
//     info.innerText = person.info;
//     mainDiv.appendChild(info);
//
//     let image = document.createElement('img');
//     image.src = person.photo;
//     mainDiv.appendChild(image);
//
// }


// Цикл в циклі
// - Є масив

// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];


// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png

// let mainDiv = document.createElement('div');
// mainDiv.classList.add('main');
// document.body.appendChild(mainDiv);
// //
// for (const item of coursesArray) {
//
//     let innDiv = document.createElement('div');
//     innDiv.classList.add('inner');
//     mainDiv.appendChild(innDiv);
//
//     let title = document.createElement('h2');
//     title.classList.add('titles');
//     title.innerText = `${item.title}`;
//     innDiv.appendChild(title);
//
//     let monthHour = document.createElement('div');
//     monthHour.classList.add('monho');
//     innDiv.appendChild(monthHour);
//
//     let month = document.createElement('div');
//     month.classList.add('mon');
//     month.innerText = `${item.monthDuration}`;
//     monthHour.appendChild(month);
//
//     let hour = document.createElement('div');
//     hour.classList.add('ho');
//     hour.innerText = `${item.hourDuration}`;
//     monthHour.appendChild(hour);
//
//     let ulDiv = document.createElement('div');
//     ulDiv.classList.add('uli');
//     innDiv.appendChild(ulDiv);
//
//     let ul = document.createElement('ul');
//     ulDiv.appendChild(ul);
//
//     for (const module of item.modules) {
//         let li = document.createElement('li');
//         li.classList.add('lis');
//         li.innerText = `${module}`;
//         ul.appendChild(li);
//     }
//
// }







// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

// const div = document.createElement('div');
//
// div.classList.add('wrap', 'collapse', 'alpha','beta')
// document.body.append(div);
//
// const node = div.cloneNode(true);
// document.body.appendChild(node);



// - Є масив:
// ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

// let array = ['Main','Products','About us','Contacts'];
//
// const menu = document.getElementsByClassName('menu')[0];
//
// for (const item of array) {
//     const li = document.createElement('li');
//     li.innerText = item;
//     menu.appendChild(li);
// }



// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

// let mass = document.getElementsByClassName('ass')[0];



// for (const item of coursesAndDurationArray) {
//     let divo=document.createElement('ul')
//     divo.innerText=`${item.title}---${item.monthDuration}`
//     mass.appendChild(divo)
//
// }



// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>
// з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.

// let mass = document.createElement('div');
// mass.classList.add('erod')
// document.body.appendChild(mass);
//
// for (const item of coursesAndDurationArray) {
//     let innerDiv = document.createElement('div');
//     innerDiv.classList.add('item');
//     mass.appendChild(innerDiv)
//
//     let h1 = document.createElement('h1');
//     h1.classList.add('heading');
//     h1.innerText = `${item.title}`;
//     innerDiv.appendChild(h1);
//
//     let p = document.createElement('p');
//     p.classList.add('description');
//     p.innerText = `${item.monthDuration}`;
//     innerDiv.appendChild(p);



// }



// -----------
//
// - Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку
// зникав елемент з id="text".


// let div = document.createElement('div');
// div.setAttribute('id', 'text');
// div.innerText = 'hello';
//
// let button = document.createElement('button');
// button.innerText = 'click';
//
// button.onclick = () => {
//     div.classList.toggle('hidden');
//
// };
// document.body.append(div, button);


// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на
// кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let input = document.createElement('input');
input.type = 'number';

let button = document.createElement('button');
button.innerText = 'click';

document.body.append(button, input);

button.onclick = () => {
    let value=input.value
    if (
        value > 0 && value < 18
    ) {
        alert('stop');
    }
    else if (value >= 18) {
        alert('hello');

    } else {
        alert('go');
    }
};




//
// *** Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
// Footer
// © 2022 GitHub, Inc.
// Footer navigation
// Terms
// Privacy
// Security
// Status
// Docs
// Contact GitHub
// Pricing