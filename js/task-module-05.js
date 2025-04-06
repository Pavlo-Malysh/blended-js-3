

function filterArray(numbers, value) {
    let newArray = []
    numbers.forEach(function (item) {
        if (item > value) {
            newArray.push(item)
        }
    })
    return newArray
}

// console.log(filterArray([1, 2, 3, 4, 5], 5));

function changeEven(numbers, value) {
    let newArray = []
    numbers.forEach((number) => {
        if (number % 2 === 0) {
            newArray.push(number + value)
        } else {
            newArray.push(number)
        }
    })

    return newArray
}



// Виклик changeEven([1, 2, 3, 4, 5], 10) повертає новий масив[1, 12, 3, 14, 5]
// Виклик changeEven([2, 8, 3, 7, 4, 6], 10) повертає новий масив[12, 18, 3, 7, 14, 16]
// Виклик changeEven([17, 24, 68, 31, 42], 100) повертає новий масив[17, 124, 168, 31, 142]
// Виклик changeEven([44, 13, 81, 92, 36, 54], 100) повертає новий масив[144, 13, 81, 192, 136, 154]

// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10));



const players = {
    mango: 1270,
    poly: 468,
    ajax: 710,
    kiwi: 244,
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]

const totalPlayTime = playtimes.reduce((acc, player) => acc += player);

const averagePlayTime = totalPlayTime / playtimes.length;

// console.log(totalPlayTime);
// console.log(averagePlayTime);

// ----------------------------------------------------------------------

const players2 = [
    { name: "Mango", playtime: 1270, gamesPlayed: 4 },
    { name: "Poly", playtime: 469, gamesPlayed: 2 },
    { name: "Ajax", playtime: 690, gamesPlayed: 3 },
    { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
];

const totalAveragePlaytimePerGame = players2.reduce((acc, player) => {
    acc = acc + (player.playtime / player.gamesPlayed)
    return acc
}, 0);


// --------------------------------------------------------------------
const students = [
    { name: "Mango", score: 83, courses: ["mathematics", "physics"] },
    { name: "Poly", score: 59, courses: ["science", "mathematics"] },
    { name: "Ajax", score: 37, courses: ["physics", "biology"] },
    { name: "Kiwi", score: 94, courses: ["literature", "science"] },
];


const sortedByAscendingScore = students.toSorted((a, b) => a.score - b.score);
const names = sortedByAscendingScore.map(student => student.name);

console.log(sortedByAscendingScore);
console.log(names); // ["Ajax", "Poly", "Mango", "Kiwi"]

// ---------------------------------------------------------------------

const names2 = students
    .toSorted((a, b) => a.score - b.score)
    .map(student => student.name);

console.log(names2); // ["Ajax", "Poly", "Mango", "Kiwi"]



// -----------------------------------------------------------------------------
const uniqueSortedCourses = students
    .flatMap(student => student.courses)
    .filter((course, index, array) => array.indexOf(course) === index)
    .toSorted((a, b) => a.localeCompare(b));

console.log(uniqueSortedCourses); // ["biology", "science", "literature", "mathematics", "physics"]
