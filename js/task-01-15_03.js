
// console.log(Boolean("false"));

// const r = 56;

// if (r > 50 && r < 70) {
//     console.log("Yes, its right result!");
// }

// else {
//     console.log("false");
// }

// console.log("hello", 5);

// const der = "Hello world!";

// console.log(der.length);



// Task 1
// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"
// const min = Math.floor(Math.random() * (59 - 0) + 0);


function getQuarter() {
    let number;
    do {
        number = prompt("Введіть число від 0 до 59");
        number = Number(number)
    }
    while (number > 59 || number <= 0)


    if (number <= 15) {
        alert(`${number} входить в першу чверть`)
    }
    else if (number > 15 && number <= 30) {
        alert(`${number} входить в другу чверть`)
    }
    else if (number > 30 && number <= 45) {
        alert(`${number} входить в третю чверть`)
    }
    else if (number > 45 && number <= 59) {
        alert(`${number} входить в четвертю чверть`)
    }

}

// const UserNumber = getQuarter();


// Task 2
// Змінна num може набувати 4 значення: '1', '2', '3' або '4' 
// (запитуй це значення у користувача через prompt). 
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач 
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.



function getNum() {
    let num = +prompt("Введіть число від 1 до 4")
    let result;
    switch (Number(num)) {
        case 1:
            result = "зима";
            break;
        case 2:
            result = "весна";
            break;
        case 3:
            result = "літо";
            break;
        case 4:
            result = "осінь";
            break;
        default:
            result = "Вибачте, але ви маєте ввести значення від 1 до 4 включно";
    }
    return result;
}

console.log(getNum());



// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'): 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples


// ПЕРЕРОБИТИ
// function getNumber() {
//     let num = +prompt("Введіть кількість хвилин")
//     let time;

//     let hours = num - num % 60;
//     let min = num % 60;
//     console.log(hours, min)
//     if (hours >= 60) {
//         time = hours / 60;
//     }
//     time

// }

// console.log((70 - (70 % 60)))
// console.log(150 / 60)

// console.log(getNumber())





// Напишіть код, який запитуватиме у користувача
// логін за допомогою prompt і виводить результат в консоль браузера

// Після цього додайте перевірку введеного користувачем значення:
// Якщо відвідувач вводить "Адмін",
// то prompt запитує пароль (не забудьте зберігти його у змінну для подальшої перевірки).
// Якщо нічого не ввели або натиснули Cancel,
// Вивести в alert строку "Скасовано"
// В іншому випадку вивести в alert рядок "Я вас не знаю"
// Пароль перевіряти так:
// Якщо введено пароль "Я головний",
// то вивести в alert рядок "Добрий день!",
// в іншому випадку вивести в alert рядок "Невірний пароль!"


// function getLogin() {
//     let login = prompt("Введіть логін")


//     if (login === "Адмін") {
//         password = prompt("Введіть пароль")
//         let login = prompt("Введіть логін")

//     }
//     else if (login === "") {
//         alert("Скасовано")
//     }
//     else {
//         alert("Я вас не знаю")
//     };

//     if (password === "Я головний") {
//         alert("Добрий день!")
//     } else {
//         alert("Невірний пароль!")
//     }
// }


// Напишіть функцію getNumbers(min, max), що приймає 2 параметри - 
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.


// getNumbers(min, max) {
//     let counter;
//     for (counter = 0; max >= min; counter++) {

//     }
// }



// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.

function min(a, b) {
    if (typeof (a) === "number" && typeof (b) === "number") {
        if (a < b) {
            return a;
        } else if (a > b) {
            return b;
        }
    } else {
        return "Not a number!"
    }


}

console.log(min(90, 9))


// Напишіть функцію isAdult(age), яка  приймає число - вік користувача і повертає true, 
// якщо параметр age більше чи дорівнює 18.
// В іншому випадку вона запитує підтвердження через confirm 
// і повертає його результат (true/false).

function isAdult(age) {
    if (age >= 18) {
        return true;
    } else {
        return confirm("Вам ще немає 18 років. Ви впевнені, що хочете продовжити?");
    }
}

console.log(isAdult(45))