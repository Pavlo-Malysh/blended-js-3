
// 1 - отримай body елемент і виведи його в консоль;
const bodyElem = document.querySelector("body")
console.log(bodyElem);

// 2 - отримай елемент id="title" і виведи його в консоль;
const titleElem = document.querySelector("#title")
console.log(titleElem);

// 3 - отримай елемент class="list" і виведи його в консоль;
const listElem = document.querySelector(".list")
console.log(listElem);

// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
const topicElems = document.querySelectorAll("li[data-topic]")
console.log(topicElems);

// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
const firstTopicElem = document.querySelector("li[data-topic]")
console.log(firstTopicElem);

// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
const endTopicElem = document.querySelector("li[data-topic]:last-child")
console.log(endTopicElem);

// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
const neighborElem = document.querySelector(".list")
console.log(neighborElem);

// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
const subTitleElemens = document.querySelectorAll("h3")
console.log(subTitleElemens);

// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір

subTitleElemens.forEach(elem => elem.classList.add("active"))
console.log(subTitleElemens);


// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;

const navElem = document.querySelector("li[data-topic=navigation]")
console.log(navElem);

// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
navElem.style.backgroundColor = "yellow";


// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
const textNavElem = navElem.querySelector("p")
// console.log(textNavElem);
textNavElem.textContent = "Я змінив тут текст!"

navElem.lastElementChild.textContent = "Ще раз поміняв"


// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;

const currentTopic = "manipulation"

const TopicMapElem = document.querySelector(`li[data-topic=${currentTopic}]`)
console.log(TopicMapElem);

// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
TopicMapElem.style.backgroundColor = "blue"

// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
const titleCompletedElem = document.querySelector(".completed")
console.log(titleCompletedElem);

// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
const parent = titleCompletedElem.parentElement
console.log(parent);
parent.remove()

// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
// Variant1

const boxElem = document.querySelector(".container")
const heroTitleElem = document.querySelector("h1")

// const textAddElem = document.createElement("p")
// textAddElem.textContent = "Об'єктна модель документа (Document Object Model)"

// boxElem.insertBefore(textAddElem, heroTitleElem.nextElementSibling)

// Variant2

heroTitleElem.insertAdjacentHTML("afterend", "<p>Об'єктна модель документа (Document Object Model)</p>")



// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку

const liElems = document.querySelector(".list")
const newLiElem = document.createElement("li")
const subtitleElem = document.createElement("h3")
subtitleElem.textContent = "Властивість innerHTML"
const textElem = document.createElement("p")
textElem.textContent = "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу"

newLiElem.append(subtitleElem, textElem)

liElems.insertAdjacentElement("beforeend", newLiElem)

// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()


liElems.insertAdjacentHTML("beforeend", "<li><h3>Властивість insertAdjacentHTML</h3><p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p></li>")

// 20 - очисти список
liElems.innerHTML = ""


// Створіть контейнер div (з класом numberContainer )в HTML-документі 
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer). 
// Парні числа повинні мати зелений фон (додати клас even), 
// Непарні числа - жовтий фон (додати клас odd).

const randomNumber = () => Math.floor(Math.random() * 100) + 1;


const containerElem = document.querySelector(".number-container")

let elems = []
for (let i = 0; i < 100; i++) {
    const random = randomNumber()
    if (random % 2 === 0) {

        elems.push(`<div class="number even">${random}</div>`)
    } else {

        elems.push(`<div class="number odd">${random}</div>`)
    }
}

const markup = elems.join("")

containerElem.insertAdjacentHTML("beforeend", markup)

// ----------------------------------------------------

// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше 
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`

// const formElem = document.querySelector(".js-contact-form")
const inputFormElem = document.querySelector(".js-username-input")

inputFormElem.addEventListener("input", inputCheck)

function inputCheck(e) {
    // console.log(e.target.value.length);
    if (e.target.value.length < 6) {
        inputFormElem.classList.add("error")
    } else {
        inputFormElem.classList.remove("error")
        inputFormElem.classList.add("success")
    }
}


// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

// formElem.addEventListener("focus", inputFocus)

function inputFocus(e) {
    if (e.target.value.length === 0) {
        formElem.styles.outline = "3px solid red"
    } else {
        formElem.styles.outline = "3px solid green"
    }
    console.log(e.target);
}

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`, 
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку, 
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також реалізуй додавання 
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видали, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення 
// false, верни дефолтне значення "Anonymous" у span.


// Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
// При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів,
// При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.


const decreaseElem = document.querySelector(".js-decrease")
const increaseElem = document.querySelector(".js-increase")

// function add

console.log(localStorage);