// Додаткові завдання blended 15.03


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

// console.log(getNum());


// Task 3
// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'): 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples



function getNumber() {
    let getTime = prompt("Введіть кількість хвилин")
    getTime = Number(getTime)
    let hours = Math.floor(getTime / 60);
    let minutes = getTime % 60;

    printHours = String(hours).padStart(2, "0")
    printMinutes = String(minutes).padStart(2, "0")

    return `${printHours}:${printMinutes}`


}

// console.log(getNumber())




// Task 4
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


function getLogin() {
    let login = prompt("Введіть логін")
    console.log(login);

    if (login.toLowerCase() === "адмін") {
        let userPassword = prompt("Введіть пароль")
        if (userPassword === null) {
            alert("Скасовано")
        } else if (userPassword === "Я головний") {
            alert("Добрий день!")
        } else {
            alert("Невірний пароль!")
        }
    }
}

// console.log(getLogin());

// Task 5
// Напишіть функцію getNumbers(min, max), що приймає 2 параметри - 
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.


function getNumbers(min, max) {
    let sum = 0;
    for (i = max; i >= min; i--) {
        console.log(i);
        if (i % 2 === 0) {
            sum += i
        }
    }
    return sum
}

// console.log(getNumbers(1, 20));


// Task 6
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

// console.log(min(90, 9))



// Task 7
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

// console.log(isAdult(45))


// Task 8

// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'. 

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою  
// перетворіть значення на число за допомогою Number().


function getNumbersUser() {

    let number = prompt("Введіть довільне число")
    if (Number(number) === 10) {
        alert("Вірно")
    } else {
        alert("Невірно")
    }
}

// console.log(getNumbersUser())



// Task 9

// Використайте цикл while, щоб вивести в console всі числа від 0 до 20 включно.
// let i = 1;
// while (i <= 20) {
//     console.log(i);
//     i++
// }


// Task 10
// Напишіть функцію fizzBuzz(num), яка приймає число і перевіряє кожне число від 1 до num:
// Якщо число ділитися  без остачі на 3 - виводить в консоль 'fizz',
// якщо ділиться  без остачі на 5 - виводить в консоль 'buzz',
// якщо ділиться  без остачі і на 3, і на 5 - виводить в консоль 'fizzbuzz'.


function fizzBuzz(num) {
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(`${i} fizzbuzz`);
        } else if (i % 5 === 0) {
            console.log(`${i} buzz`);
        } else if (i % 3 === 0) {
            console.log(`${i} fizz`);
        }
    }
}

// console.log(fizzBuzz(15));