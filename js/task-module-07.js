
// document.addEventListener("keydown", event => {
//     console.log("Keydown: ", event);
// });

// document.addEventListener("keyup", event => {
//     console.log("Keyup: ", event);
// });

// ---------------------------------------

const registerForm = document.querySelector(".form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const login = form.elements.login.value;
    const password = form.elements.password.value;

    if (login === "" || password === "") {
        return console.log("Please fill in all the fields!");
    }

    console.log(`Login: ${login}, Password: ${password}`);
    form.reset();
}

const listElem = document.querySelectorAll(".link-list li");
console.log(listElem);