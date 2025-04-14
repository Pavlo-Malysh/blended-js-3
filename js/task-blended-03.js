// //Заняття 12.04.2025

// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить 
// квадрати кожного елементу вхідного масиву. 
// Очікуваний результат: [1, 4, 9, 16, 25].

const numbers = [1, 2, 3, 4, 5]

const newNumbers = numbers.map(number => number ** 2)

// console.log(newNumbers);


// --------------------------------------------------------------------


// Дано масив об'єктів. Створіть новий масив, що містить всі значення 
// з масивів values кожного об'єкту, збережених в одному масиві. 
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

const data = [
    { id: 1, values: [1, 2, 3] },
    { id: 2, values: [4, 5, 6] },
    { id: 3, values: [7, 8, 9] },
];


const newData = data.flatMap(number => number.values)

// console.log(newData);


// --------------------------------------------------------------------

// Дано масив об'єктів. 
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років. 
// Очікуваний результат: true.

const people = [
    { name: 'John', age: 27 },
    { name: 'Jane', age: 31 },
    { name: 'Bob', age: 19 },
];

const agePeople = people.some(x => x.age < 20)
// console.log(agePeople);


// --------------------------------------------------------------------

// Дано масив чисел [2, 4, 6, 8, 10]. 
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

const numbers1 = [2, 4, 6, 8, 10];

const even = numbers1.every(number => number % 2 === 0)
// console.log(even);


// --------------------------------------------------------------------

// Знайдіть перше непарне число

const numbers2 = [2, 1, 6, 8, 9, 10, 12];

const newNumber = numbers2.find(number => number % 2 !== 0)
// console.log(newNumber);


// --------------------------------------------------------------------

// Відсортуйте масив чисел [4, 2, 5, 1, 3] 
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

const numbersArray = [4, 2, 5, 1, 3];

const Sorted = numbersArray.toSorted((x, y) => x - y)

// console.log(Sorted);


// --------------------------------------------------------------------

// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту. 
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

const stringArray = ['banana', 'orange', 'apple', 'pear'];

const sortStr = stringArray.toSorted()
// console.log(sortStr);


const sortedStr = stringArray.toSorted((item1, item2) => item1.localeCompare(item2))
// console.log(sortedStr);


// --------------------------------------------------------------------

//  Відсортуйте масив об'єктів за віком у порядку зростання. 
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

const users = [
    { name: 'John', age: 27 },
    { name: 'Jane', age: 31 },
    { name: 'Bob', age: 19 }
];


const filterUser = users.toSorted((user1, user2) => user1.age - user2.age)
// console.log(filterUser);



const filterUserName = users.toSorted((user1, user2) => user1.name.localeCompare(user2.name))
// console.log(filterUserName);


// --------------------------------------------------------------------

// Дано масив об'єктів. 
// Створіть новий масив, що містить тільки об'єкти, в яких 
// вік більше 20 років. 
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

const users3 = [
    { name: 'John', age: 27 },
    { name: 'Jane', age: 31 },
    { name: 'Bob', age: 19 },
]


const userNew = users3.map(user => {
    if (user.age > 20) {
        return user
    }
})
// console.log(userNew);


const userNew2 = users3.filter(user => user.age > 20)
// console.log(userNew);


// --------------------------------------------------------------------

// Дано масив чисел [1, 2, 3, 4, 5]. 
// Застосуйте метод для обчислення суми елементів масиву.

const numbers5 = [1, 2, 3, 4, 5];
let sumArray = 0
const sum = numbers5.forEach(item => sumArray += item);
// console.log(sumArray);

// або 
const sum2 = numbers5.reduce((acc, number) => acc += number)
// console.log(sum2);


// --------------------------------------------------------------------

// Розроби клас Calculator, який дозволяє виконувати арифметичні
//  операції над числом за допомогою методів класу, підтримуючи
// ланцюжковий виклик (method chaining).
//
// Вимоги до класу Calculator
// - Метод number(value)
// Встановлює початкове значення для наступних обчислень.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод getResult, Повертає поточний результат усіх операцій.
// Не змінює значення, просто повертає його.

// - метод add - Додає value до поточного значення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод substruct - Віднімає value від поточного значення. Повертає this.

// - метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
// Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод multiply -Множить поточне значення на value. Повертає this.

// Об'єкт класу може проводити послідовні операції у вигляді ланцюжка

// Приклад використання:
// const calc = new Calculator();


class Calculator {
    #value;

    constructor() {
        this.#value = 0
    }
    number(value) {
        this.#value = value;
        return this
    }

    getResult() {
        this.#value
    }

    add(value) {
        this.#value += value
        return this
    }
    subtract(value) {
        this.#value = this.#value - value
        return this
    }
    divide(value) {
        if (value === 0) {
            return "Mistake"
        } else {
            this.#value /= value
        }
        return this
    }
    multiply(value) {
        this.#value *= value
        return this
    }
}

const calc = new Calculator()

const result = calc
calc.number(10) // Встановлюємо початкове значення 10
calc.add(5)     // Додаємо 5 (10 + 5 = 15)
calc.subtract(3) // Віднімаємо 3 (15 - 3 = 12)
calc.multiply(4) // Множимо на 4 (12 * 4 = 48)
calc.divide(2)  // Ділимо на 2 (48 / 2 = 24)
calc.getResult(); // Отримуємо результат: 24


console.log(result); // 24


// --------------------------------------------------------------------


// Завдання 12:
// Напиши клас Client який створює об'єкт з властивостями login email.
// Оголоси приватні властивості #login #email, доступ до яких зроби
// через геттер та сеттер login email

class Client {
    #login;
    #email;

    constructor(params) {
        this.#email = params.email
        this.#login = params.login
    }
    get login() {
        return this.#login
    }
    get email() {
        return this.#email
    }

    set login(value) {
        return this.#login = value;
    }
    set email(value) {
        return this.#email = value;
    }



}

const client1 = new Client({
    email: "poly@gmail.com",
    login: "admin"
})
// console.log(client1);

// --------------------------------------------------------------------

//  Наслідування у класах!
// Cтворіть клас `Person`, який містить наступні властивості:
//  - `name` - ім'я людини;
//  - `age`- вік людини;
//  - `gender` - стать людини;
//  - `email`- електронна пошта людини.

// Крім того, клас `Person` має мати метод `getDetails()`,
// який повертає об'єкт з ім'ям, віком, статтю
//та електронною поштою людини.

//
// Потім Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
//  - salary - зарплата співробітника;
//  - department - відділ, в якому працює співробітник.
// Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з зарплатою співробітника та відділом, в якому він працює.


class Person {
    name;
    age;
    gender;
    email;
    constructor(param) {
        this.name = param.name
        this.age = param.age
        this.gender = param.gender
        this.email = param.email
    }

    getDetails() {
        return this
    }
}

class Employee extends Person {
    salary;
    departament;

    constructor(param) {
        super(param)

        this.salary = param.salary
        this.departament = param.departament
    }

    getEmployeeDatails() {
        return this
    }
}

const user = new Person({
    name: "Vasya",
    age: 24,
    gender: "male",
    email: "admin@gmail.com",
})

// console.log(user);

const user2 = new Employee({
    name: "Vasya",
    age: 24,
    gender: "male",
    email: "admin@gmail.com",
    salary: 5000,
    departament: "Kiev",
})

// console.log(user2);


// --------------------------------------------------------------------
