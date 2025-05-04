console.log(localStorage);

localStorage.setItem("ui-theme", "light");


const settings = {
    theme: "dark",
    isAuthenticated: true,
    options: [1, 2, 3],
};
localStorage.setItem("settings", JSON.stringify(settings));

const savedSettings = localStorage.getItem("settings");
console.log(savedSettings); // A string

const parsedSettings = JSON.parse(savedSettings);
console.log(parsedSettings); // Settings object

localStorage.setItem("ui-theme", "dark");
console.log(localStorage.getItem("ui-theme")); // "dark"

localStorage.removeItem("ui-theme");
console.log(localStorage.getItem("ui-theme")); // null

// localStorage.clear()

const formElem = document.querySelector(".feedback-form")
const userName = formElem.elements.name
const userMessage = formElem.elements.message

userName.value = localStorage.getItem("name") || ""
userMessage.value = localStorage.getItem("message") || ""

formElem.addEventListener("input", handlerAddData)

function handlerAddData(event) {
    localStorage.setItem("name", event.currentTarget.elements.name.value)
    localStorage.setItem("message", event.currentTarget.elements.message.value)
}

formElem.addEventListener("submit", handlerRemoveStorage)

function handlerRemoveStorage(evt) {
    evt.preventDefault();
    console.log(evt.target.elements.name.value);
    console.log(evt.target.elements.message.value);

    localStorage.removeItem("name")
    localStorage.removeItem("message")
    formElem.reset()

}
