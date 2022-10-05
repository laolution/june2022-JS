//Зробити свій розпорядок дня.
//
// У вас має бути більше 10 асинхронних дій з рандомними затримками.
// Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
//
// Напиклад.
// Прикнутись - 0.3с
// Поснідати - 1с
// Піти в душ - 0.5с
// Дочекатись автобус - 3с
// працювати - 5с
// Пообідати - 1с
//піти в зал 2с
//вечеря 1 с
//спати 0,5
//
// І так далі
console.log('trararararar');

let energy=0
let checkInWork=0
let power=0

function wakeUp(niceMorning) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (niceMorning) {
                energy += 70;
                console.log('Povno syly');
                resolve(energy)
            } else {
                console.log('Nema bazhannia robyty');
                reject('Лишаюсь вдома!')
            }

        }, 600)
    })
}

function breakfast(eat) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (eat) {
                energy += 30;
                console.log('Faino poiv');
                resolve(energy);
            } else {
                console.log('Ne hochu Isty');
                reject('Не голодний')
            }

        }, 400)
    })
}

function shower(clear) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (clear) {
                console.log('Pomyvsia');
                energy -= 10;
                resolve(energy);
            } else {
                console.log('ne budu mytys');
                reject('Буду смердіти!');
            }

        }, 200)
    })
}

function catchBus(energy) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (energy > 70) {
                console.log('dognav');
                resolve(energy);
                checkInWork = 1;
                energy -= 10;
            } else {
                console.log('ne vstygaiu na robotu');
                reject('Спізнився')
            }

        }, 100)
    })
}

function work(checkInWork) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (checkInWork === 1) {
                console.log('work hard');
                energy -= 40;
                resolve(energy);
                power=50
            } else {
                console.log('mene nema na roboti');
                reject('Нема на роботі')
            }

        }, 1000)
    })
}


function gym(power) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (power > 30) {
                console.log('do exercises');
                energy -= 30;
                resolve(energy);
            } else {
                console.log('slabak');
                reject('Слабо')
            }

        }, 1500);
    })
}

function diner() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('mmmm.smachno');
            energy+=20
            resolve(energy)

        }, 300)
    })
}

function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('paka!!');
            resolve('Dobranich')

        }, 200)
    })
}



//PROMISE

// wakeUp(true)
//     .then(energy=>{
//         console.log('Я маю', energy, 'сили');
//
//         return breakfast(true)
//     })
//     .then(energy=>{
//         console.log('Поїв!', energy);
//
//         return shower(true)
//     })
//     .then(energy=>{
//         console.log('Чистий пздц', energy);
//
//         return catchBus(energy)
//     })
//     .then(energy=>{
//         console.log('Догнав', energy);
//
//     return work(checkInWork)
//     })
//     .then(work=>{
//         console.log('Працюю', work);
//
//         return gym(power)
//     })
//     .then(power=>{
//         console.log('Буду качок', power);
//
//         return diner()
//     })
//     .then(energy=>{
//         console.log(energy);
//
//         return sleep()
//     })
//     .then(value => {
//         console.log('dobranich', value);})
//     .catch(reason => {
//         console.warn('ooops', reason);})


//ASYNC/AWAIT

async function workDay() {
    try {
        const energy = await wakeUp(true);
        console.log(energy);

        const enerAfterBreak = await breakfast(true);
        console.log(enerAfterBreak);

        const showerSes = await shower(true);
        console.log(showerSes);

        const bus = await catchBus(showerSes);
        console.log(bus);

        const workDay = await work(checkInWork);
        console.log(workDay);

        const gymBar = await gym(power);
        console.log(gymBar);

        const dinero = await diner();
        console.log(dinero);

        const sleepo = await sleep();
        console.log(sleepo);

    }catch (e) {
        console.warn('ooooooPPO', e);
    }
}

workDay()


