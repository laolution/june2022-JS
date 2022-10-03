// console.log(location.href);
//
// let url = new URL(location.href);
// console.log(url);
// let id = url.searchParams.get('id');
// console.log(id);
//
// fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
//     .then(resp => resp.json())
//     .then(value => {
//         let ul = document.createElement('ul');
//         for (const post of value) {
//             let li = document.createElement('li');
//             li.innerText = post.title;
//             ul.appendChild(li);
//         }
//         document.body.appendChild(ul);
//
//     });

//-----------------------------------------------------------------------------
//LOCAL STORAGE

let url = new URL(location.href);
let user = JSON.parse(url.searchParams.get('data'));
localStorage.setItem('lastUser',JSON.stringify(user))

fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
    .then(resp => resp.json())
    .then(value => {
        let ul = document.createElement('ul');
        for (const post of value) {
            let li = document.createElement('li');
            li.innerText = post.title;
            ul.appendChild(li);
        }
        document.body.appendChild(ul);

    });





