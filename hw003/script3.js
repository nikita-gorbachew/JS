// 1. Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

const cub = (num) => {
    return Number(num) ** 3;
}
console.log(cub(2) + cub(3));

// 2. Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

let userSalary = Number(prompt('Введите вашу зп'));
const salary = (num) => {
    return num * 0.87;
}
if (isNaN(userSalary)) {
    alert('Значение задано не верно');
} else {
    console.log(`Размер заработной платы за вычетом налогов равен ${salary(userSalary)}`);
}

// 3. Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

let userNum1 = Number(prompt('Введите 1 число'));
let userNum2 = Number(prompt('Введите 2 число'));
let userNum3 = Number(prompt('Введите 3 число'));
const maxNumber = (num1, num2, num3) => {
    let max = num1;
    if (num2 > max) {
        max = num2;
    }
    if (num3 > max) {
        max = num3;
    }
    return max;
}
console.log(`Максимальное число ${maxNumber(userNum1, userNum2, userNum3)}`);

// 4. Необходимо реализовать четыре функции, каждая функция должна принимать по два
// числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение
// console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция
// сложения в данном примере, ваши названия функций могут отличаться).
// Округлять значения, которые возвращают функции не нужно, однако, обратите
// внимание на разность, функция должна вычесть из большего числа меньшее, либо
// вернуть 0, если числа равны.
// Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать
// не нужно.

const sum = (num1, num2) => {
    return Number(num1) + Number(num2);
}
console.log(sum(2, 6));

const dif = (num1, num2) => {
    if (num1 > num2 || num1 === num2) {
        return Number(num1) - Number(num2);
    } else if (num1 < num2) {
        return Number(num2) - Number(num1);
    }
}
console.log(dif(2, 6));

const multiply = (num1, num2) => {
    return Number(num1) * Number(num2);
}
console.log(multiply(2, 6));

const div = (num1, num2) => {
    if (num1 > num2 || num1 === num2) {
        return Number(num1) / Number(num2);
    } else if (num1 < num2) {
        return Number(num2) / Number(num1);
    }
}
console.log(div(2, 6));