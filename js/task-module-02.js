// Завдання з модуля 2 автоперевірки. Розгалуження та цикли

// Task 1
// Функція getFileName(file) приймає один параметр

// file - рядок з іменем файлу.Ім'я файлу може бути з розширенням, наприклад: styles.css, app.js або без, наприклад: styles, app.
// Використовуючи методи indexOf та slice, доповни код функції таким чином, щоб:

// Вона перевіряла наявність розширення в імені файлу(назва розширення відокремлюється від імені файла крапкою)
// Якщо ім'я файлу не містить розширення, то функція повертала новий підрядок, що містить ім'я файлу без змін
// В іншому разі функція повертала підрядок з іменем файлу, але без розширення


function getFileName(file) {
    const indexFile = file.indexOf(".")
    // const expFile = file.slice(indexFile)
    if (indexFile < 0) {
        return file.slice(0);
    } else {
        return file.slice(0, indexFile);
    }
}

// console.log(getFileName("styles.css"))


// -------------------------------------------------------------------------------------------------------

// Task 2
// Функція createFileName(name, ext) приймає два параметри:

// name - рядок, що зберігає ім'я файлу без розширення, яке вводить користувач. Воно може містити зайві пробіли на початку або в кінці рядка, наприклад "order ", " finance " тощо
// ext - рядок, що зберігає розширення, наприклад "txt", "xml" тощо
// Використовуючи синтаксис шаблонних рядків і метод trim(), доповни код функції таким чином, щоб вона повертала повне(об'єднане) ім'я файлу з доданим розширенням, зазначеним у параметрі ext у форматі ім'я.розширення. Також повне ім'я файлу не повинно містити зайвих пробілів на початку або наприкінці.


function createFileName(name, ext) {
    name = name.trim()
    newName = name + "." + ext
    newName = newName.trim()
    return newName
}

// console.log(createFileName("user   ", "txt"))


function createFileName(name, ext) {
    return `${name.trim()}.${ext.trim()}`
}

// console.log(createFileName("   user ", "   js   "))



// -------------------------------------------------------------------------------------------------------

// Task 3
// Функція calculateTotal(number) приймає ціле число(параметр number).Доповни код функції так, щоб вона повертала суму всіх цілих чисел від одиниці до цього числа включно.Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.



function calculateTotalWhile(number) {
    let sum = 0
    let i = 1
    while (i < number) {
        sum = sum + i
        i++

    }
    return sum + number
}


// console.log(calculateTotalWhile(18))

function calculateTotalFor(number) {
    let sum = 0
    for (let i = 0; i <= number; i++) {
        sum += i

    }
    return sum
}

// console.log(calculateTotalFor(18))



// -------------------------------------------------------------------------------------------------------

// Task 4
// Функція calculateEvenTotal(number) приймає ціле число(параметр number).Доповни код функції так, щоб вона повертала суму всіх парних цілих чисел від одиниці до цього числа включно.Парні числа — це ті, що можна поділити на 2 без остачі(як це зробити розглядалося у темі Арифметичні операції у модулі 1).Наприклад, якщо number дорівнює 6, то сума - це 2 + 4 + 6, тобто 12.


function calculateEvenTotal(number) {
    let sum = 0

    for (let i = 0; i < number; i += 2) {
        sum += i
    }
    if (number % 2 === 0) {
        sum = sum + number
    }

    return sum
}


// console.log(calculateEvenTotal(27))


// -------------------------------------------------------------------------------------------------------

// Task 5
// Доповни код таким чином, щоб у змінну number записувалося перше число у проміжку від start до end, яке ділиться на 5 без остачі.

const start = 6;
const end = 17;
let number;

for (number = start; number <= end; number++) {
    if (number % 5 === 0) {
        break;
    }
}


// -------------------------------------------------------------------------------------------------------

// Task 6
// Функція findNumber(start, end, divisor) приймає три параметра, які є цілими числами.

// Доповни код функції таким чином, щоб вона:

// повертала перше число у діапазоні від start до end включно, яке ділиться на divisor без остачі
// не використовуй оператор break
// findNumber(2, 6, 5) повертає 5
// Виклик findNumber(8, 17, 3) повертає 9


function findNumber(start, end, divisor) {
    let number;
    for (number = start; number <= end; number++) {
        if (number % divisor === 0) {
            return number
        }
    }
}


// -------------------------------------------------------------------------------------------------------

// Task 7 Завдання gpt

function getDiscount(day) {
    switch (day) {
        case "Monday":
            return 10;
        case "Wednesday":
            return 20;
        case "Friday":
            return 30;
        default:
            alert("No discount")
            return 0;
    }
}

console.log(getDiscount("Friday"));


// -------------------------------------------------------------------------------------------------------

// Task 8

function getMessage(isMember) {
    const message = isMember === true ? "Welcome, member" : "Please sign up!"
    return message;
}

function getMessage_2(isMember) {
    return isMember ? "Welcome, member" : "Please sign up!"
}

console.log(getMessage(false));
console.log(getMessage_2(true));


// -------------------------------------------------------------------------------------------------------

// Task 9

function formatString(str) {
    let string = str.trim().toLowerCase()
    if (string.includes("javascript")) {
        return `Found ${string}!`
    } else {
        return "Not found!"
    }
}

console.log(formatString("    JaVAScript   "));

// -------------------------------------------------------------------------------------------------------

const string3 = "JavaScript"
// console.log(string3);

// -------------------------------------------------------------------------------------------------------
