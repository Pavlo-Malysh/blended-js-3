
const listElem = document.querySelector(".task-list")

const form = document.querySelector(".task-form")
let arrayValue = []


form.addEventListener("submit", (e) => {
    e.preventDefault()
    const currentValue = e.target.elements.taskInput.value
    let markup = `<li class="task-item"><p class="task-name">${currentValue}</p>
    <button class="remove-btn" type="button">Видалити</button></li>`

    if (currentValue) {
        listElem.insertAdjacentHTML("beforeend", markup)
        // console.log(markup);
        arrayValue.push(markup)
    }

    localStorage.setItem("task", JSON.stringify(arrayValue))
    form.reset()
})



if (!listElem.firstElementChild) {
    const parseJSON = JSON.parse(localStorage.getItem("task"))
    listElem.insertAdjacentHTML("beforeend", parseJSON.join(""))

}

const taskName = document.querySelectorAll(".task-name")



listElem.addEventListener("click", handlerRemoveTask)


function handlerRemoveTask(e) {
    if (e.target.tagName === "BUTTON") {
        const li = e.target.parentElement
        li.remove()
        // localStorage.removeItem()
    }
}
