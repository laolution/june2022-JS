let money = 0;

function goWork(isWorkingDay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isWorkingDay) {
                money += 1000;
                resolve(money);
            } else {
                console.log('relaxing day');
                reject('Нема Грошей');
            }
        }, 800);
    })
}

function goToAmerika(money) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (money < 800) {
                console.log('no money no honey');
                reject('не хватає на поїздку');
            } else {
                console.log('swimming all day');
                money -= 600;
                resolve(money);
            }
        }, 1000)
    })
}

function buySouvenirs(money) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (money < 300) {
                console.log('не куплю нічого');
                reject('не хватає вже');
            } else {
                console.log('купляю магніти');
                money -= 300;
                resolve(money);
            }
        }, 500)
    })
}

//ПРОМІСИ
// goWork(true)
//     .then(payment => {
//         console.log('i got', payment, 'from work');
//
//         return goToAmerika(money)
//     })
//     .then(moneyAfterTrip => {
//         console.log('i got', moneyAfterTrip, '$');
//
//         return buySouvenirs(money);
//     })
//     .then(moneyAfterShopping => {
//         console.log('i got', moneyAfterShopping);
//     })
//     .catch(reason => {
//         console.warn('oooops', reason);
//     })
//     .finally(() => console.log('finally'))


//promise ALL
//запускає всі незалежні між собою проміси одночасно
//якщо падає хоч один то весь ланцюг падає
const one=new Promise(resolve => {
    setTimeout(()=>{
        resolve(1)
    },2000)
})

const two=new Promise((resolve, reject) => {
    setTimeout(()=>{
        reject(2)
    },500)
})

const three=new Promise(resolve => {
    setTimeout(()=>{
        resolve(3)
    },1000)
})
// Promise.all([one, two, three])
//     .then(value => {
//         console.log(value);
//     })
//     .catch(e=>{
//         console.warn(e);
//     })

//ALL SETTLED повертає проміс навіть якщо деякі ланки впали..ніколи не падає в кетч
// Promise.allSettled([one, two, three])
//     .then(value => {
//         console.log(value);
//     })

//RACE повертає першу ланку яка обчислилась найшвидше
Promise.race([one, two, three])
    .then(value => {
        console.log(value);
    })
//--------------------------------------------

//Async/Await
// async function vacation() {
//     try {
//
//         const payment = await goWork(true);
//         console.log(payment, 'payment');
//
//         const moneyAfterTrip = await goToAmerika(payment);
//         console.log(moneyAfterTrip, 'moneyAfterTrip');
//
//         const afteShop = await buySouvenirs(moneyAfterTrip);
//         console.log('my money is', moneyAfterTrip);
//     } catch (error){
//         console.log('oooooppsaa', error);
//     }
// }
// vacation()

























