// 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число
for (let i = 0; i <= 10; i++) {
    if (i === 0) {
        console.log(`${i} - это ноль`);
    } else if (i % 2) {
        console.log(`${i} - это нечетное число`);
    }
    else {
        console.log(`${i} - это четное число`);
    }
}

console.log(`-----`)
// 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]
const arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(3, 2);
console.log(arr);

console.log(`-----`)
// 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

const arrayRandom = (x) => {
    for (let i = 0; i < x; i++) {
        arrRandom[i] = Math.floor(Math.random() * 10);
    }
}

function findNumber(arrRandom, elem) {
    for (let i = 0; i < arr.length; i++) {
        if (arrRandom[i] === elem) {
            return console.log(`В данном массиве есть цифра ${elem}`);
        }
    }
    return console.log(`В данном массиве нет цифры ${elem}`);
}

const arrRandom = [];
arrayRandom(5);
console.log(arrRandom);
let sum = 0;
let min = arrRandom[0];
let elemFind = 3;
for (let i = 0; i < arrRandom.length; i++) {
    const element = arrRandom[i];
    if (min > element) {
        min = element;
    }
    sum += element;
}
console.log(`Сумма всех элементов массива = ${sum}`);
console.log(`Минимальное число массива = ${min}`);
findNumber(arrRandom, elemFind);

console.log(`-----`)
// Необязательное задание
// Необходимо вывести горку в консоль (используя цикл for), как показано на
// рисунке, только у вашей горки должно быть 20 рядов, а не 5:
// x
// xx
// xxx
// xxxx
// xxxxx

let x = ' ';
for (let i = 0; i < 20; i++) {
    x += 'x';
    console.log(x);
}
