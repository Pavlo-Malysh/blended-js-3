// Module 03 Array and function 

function getExtremeElements(array) {
    let firstElement = array[0];
    // let index = array.lenght
    let lastElement = array[array.length - 1]
    let newArray = [firstElement, lastElement]
    return newArray
}

// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));


// -------------------------------------------------------------------------------------------------------

let a = 5;

let b = a;
console.log(a); // 5
console.log(b); // 5
// Присвоєння за значенням, у пам'яті буде створено ще
// одну ячейку, в яку буде скопійовано значення 5

// Змінимо значення a
a = 10;
// console.log(a); // 10
// console.log(b); // 5 Значення b не змінилося, оскільки це окрема копія


// -------------------------------------------------------------------------------------------------------

function getSlice(array, value) {
    const someValue = array.indexOf(value)
    if (someValue >= 0) {
        let subArray = array.slice(0, someValue + 1)
        return subArray

    } else {
        return [];
    }
}


// console.log(getSlice(["Mango", "Poly", "Ajax"], "Poly"));
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Mango"));
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Jacob"));

// getSlice(["Mango", "Poly", "Ajax"], "Poly") повертає["Mango", "Poly"]
// Виклик getSlice(["Mango", "Poly", "Ajax"], "Ajax") повертає["Mango", "Poly", "Ajax"]
// Виклик getSlice(["Mango", "Poly", "Ajax"], "Mango") повертає["Mango"]
// Виклик getSlice(["Mango", "Poly", "Ajax"], "Jacob") повертає[]


// -------------------------------------------------------------------------------------------------------

function getEvenNumbers(start, end) {
    const arr = [];
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            arr.push(i)
        }

    }
    return arr

}

// console.log(getEvenNumbers(7, 7));

// else if (arr === 0) {
//     return []
// // }

// Оголошена функція getEvenNumbers(start, end)
// Виклик функції getEvenNumbers(2, 5) повертає[2, 4]
// Виклик функції getEvenNumbers(3, 11) повертає[4, 6, 8, 10]
// Виклик функції getEvenNumbers(6, 12) повертає[6, 8, 10, 12]
// Виклик функції getEvenNumbers(8, 8) повертає[8]
// Виклик функції getEvenNumbers(7, 7) повертає[]
// Виклик функції getEvenNumbers() з випадковими start і end повертає правильний масив

// -------------------------------------------------------------------------------------------------------

function checkStorage(storage, item) {
    let checkItem = item.toLowerCase()

    if (storage.includes(checkItem)) {
        return `${checkItem} is available to order!`
    } else {
        return "Sorry! We are out of stock!"
    }
}

// console.log(checkStorage(["apple", "plum", "pear"], "pLuM"));


// Виклик функції `checkStorage(["apple", "plum", "pear"], "pLuM")` повертає`plum is available to order!`
// Виклик функції `checkStorage(["apple", "plum", "pear"], "pear")` повертає`pear is available to order!`
// Виклик функції `checkStorage(["apple", "plum", "pear"], "plum")` повертає`plum is available to order!`
// Виклик функції `checkStorage(["apple", "plum", "pear"], "orange")` повертає`Sorry! We are out of stock!`
// Виклик функції `checkStorage(["apple", "plum", "pear"], "carrot")` повертає`Sorry! We are out of stock!`
// Виклик функції `checkStorage(["apple", "plum", "pear"], "pEAr")` повертає`pear is available to order!`


// ---------------------------------------------------------------------------------------------------------------------

function getCommonElements(array1, array2) {
    let newArray = [];
    for (let i = 0; i < array1.length; i++) {
        if (array2.includes(array1[i])) {
            newArray.push(array1[i])
        }
    }
    return newArray
}

// Функція getCommonElements(array1, array2), приймає два масиви(array1 та array2) довільної довжини в якості параметрів.

// Доповни код функції:

// Створи порожній масив для зберігання нового масиву.
// Використай цикл for для ітерації кожного елемента у array1.
// У тілі циклу перевір, чи поточний елемент існує у array2 за допомогою методу includes.
// Якщо він існує, то додай елемент до нового масиву.
// Поверни наповнений масив спільних елементів як результат роботи функції.


// --------------------------------------------------------------------------------------------------------------






// --------------------------------------------------------------------------------------------------------------