
const pizzaPalace = {
    pizzas: ["Supercheese", "Smoked", "Four meats"],
    checkPizza(pizzaName) {
        return this.pizzas.includes(pizzaName);
    },
    order(pizzaName) {
        const isPizzaAvailable = this.checkPizza(pizzaName);

        if (!isPizzaAvailable) {
            return `Sorry, there is no pizza named «${pizzaName}»`;
        }

        return `Order accepted, preparing «${pizzaName}» pizza`;
    },
};


// console.log(pizzaPalace.order("Viennese"));

// -----------------------------------------------------------------------------

"use strict";

function showThis() {
    console.log("this in showThis: ", this);
}

const user = {
    username: "Poly",
};

user.showContext = showThis;

// Викликаємо в контексті об'єкта
// user.showContext(); // this in showThis: {username: "Poly", showContext: ƒ}

// Викликаємо в глобальному контексті
// showThis(); // "this in showThis: undefined"


// -----------------------------------------------------------------------------

"use strict";

const book = {
    updateAuthor(newAuthor) {
        // ...
        return this
    }
};

console.log(book.updateAuthor("Pasha"));
book.updateAuthor("Jacob");


// -----------------------------------------------------------------------------

const animal = {
    legs: 4,
};
const dog = Object.create(animal);
dog.name = "Mango";

// console.log(dog); // {name: "Mango", [[Prototype]]: animal}
// console.log(dog.name); // "Mango"
// console.log(dog.legs); // 4


// -----------------------------------------------------------------------------

const objB = {
    b: "objB prop"
};

const objA = Object.create(objB);
objA.a = "objA prop";

// console.log(objA);


// -----------------------------------------------------------------------------

class User {
    constructor(name, email) {
        // console.log(name, email);
    }
}

const mango2 = new User("Mango", "mango@mail.com"); // "Mango mango@mail.com"
// console.log(mango); // {}


// -----------------------------------------------------------------------------

class User2 {
    email;

    constructor(email) {
        this.email = email;
    }

    get email() {
        return this.email;
    }

    set email(newEmail) {
        this.email = newEmail;
    }
}
class Admin extends User2 {
    static role = {
        BASIC: "basic",
        SUPERUSER: "superuser",
    };


    constructor(params) {
        super(params.email);
        this.access = params.access;
        this.blacklistedEmails = [];
    };



    blacklist(email) {
        this.blacklistedEmails.push(email)
    };
    isBlacklisted(email) {
        return this.blacklistedEmails.includes(email)
    }
}

const mango = new Admin({
    email: "mango@mail.com",
    access: Admin.role.SUPERUSER,
});

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.access); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true



// -----------------------------------------------------------------------------

