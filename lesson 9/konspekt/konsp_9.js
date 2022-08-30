//----------------DOM---------document object model

// console.log(document);
//
//
// console.log(document.head);
// console.log(document.head.children);//псевдо масив елементів //HTML collection
// console.log(document.head.childNodes);// NODE list//список вузлів
//
//
// let nodeList = document.head.childNodes;
// console.log(nodeList);
//
// for (const nodeListElement of nodeList) {
//     console.log(nodeListElement);
// }

// console.log(document.body);
// let list1 = document.getElementById('list-1');//дозволяє витягнути перший елемент який зустріне з потрібним ідентифікатором
// console.log(list1);
// list1.style.background = 'silver';//можна задавати стилі
//
// console.log(list1.children);//варіант дістати внутрішні елементи
//
// let liList = document.getElementsByTagName('li');//2 варіант дыстати внутр елементи але воно дістає всі елементи зі всіх ліжок
// console.log(liList);
//
// let menus = document.getElementsByClassName('menu');// знаходить колекцію зі всіма елементами класу меню
// console.log(menus);

// let listLi = document.querySelector('.menu:nth-child(1)>li');//знаходить один елемент
// console.log(listLi);
//
// let listLis = document.querySelectorAll('.menu:nth-child(1)>li');//знаходить список всіх елементів (нодліст)
// console.log(listLis);

//-------------------------

// let ul1 = document.getElementsByTagName('ul')[0];
// console.log(ul1);

// let li1 = document.getElementsByTagName('li')[0];
// console.log(li1);
// console.log(li1.innerText);
// li1.innerHTML = '<strong>okten</strong>';
// console.log(li1.innerText);
//
// console.log(li1.classList);
// li1.classList.add('nweClass');//додає клас
// console.log(li1.classList.item(1));
// li1.classList.remove('a');//видаляє клас
// li1.classList.toggle('b');//видаляє якшо є і додоає якшо нема



//-------------------------------FORM в HTML

// console.log(document.forms.f1.login);

//---------------------

let h2 = document.createElement('h2');
h2.innerText = 'title';
h2.style.background = 'silver';


