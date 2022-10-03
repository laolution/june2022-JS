//API (Application Programming Interface)- прикладний інтерфейс програмування

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(responce => responce.json())
//     .then(json=>console.log(json))

//---------------------------------------------------------------------------------------

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((responce) => responce.json())
//     .then(users=> {
//         for (let user of users) {
//             let div = document.createElement('div');
//             div.innerText = `${user.id} -- ${user.name}`;
//             let a = document.createElement('a');
//             a.href  =`post.html?id=${user.id}`;
//             a.innerText = '  posts';
//             div.appendChild(a);
//             document.body.appendChild(div);
//         }
//     });

//----------------------------------------------------------------------------------------------
//LOCAL STORAGE
let usersDiv = document.getElementsByClassName('users')[0];

let user = JSON.parse(localStorage.getItem('lastUser'));
if (user) {
    p = document.querySelector('.last-user>p');
    p.innerText = `${user.id}-${user.name}`;
}

fetch('https://jsonplaceholder.typicode.com/users')
    .then((responce) => responce.json())
    .then(users=> {
        for (let user of users) {
            let div = document.createElement('div');
            div.innerText = `${user.id} -- ${user.name}`;
            let a = document.createElement('a');
            a.href  =`post.html?data=${JSON.stringify(user)}`;
            a.innerText = '  posts';
            div.appendChild(a);
            usersDiv.appendChild(div);
        }
    });












