
const apartment1 = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr1: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
    owner: {
        name: "Henry",
        phone: "982-126-1588",
        email: "henry.carter@aptmail.com",
    },
};

// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags.length - 1;

// console.log(lastTag);
// console.log(apartment.tags[lastTag]);

// -------------------------------------------------------------------------------------------------------


const apartment = {
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
};

const keys = [];
const values = [];

for (const key in apartment) {
    keys.push(key);
    values.push(apartment[key]);
}

// console.log(keys);
// console.log(values);

// -------------------------------------------------------------------------------------------------------


const apartment3 = {
    descr3: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
};
const values3 = [];
const keys3 = Object.keys(apartment3);

for (const key of keys3) {
    values3.push(apartment3[key])
}

// console.log(values3);
// console.log(keys3);

// -------------------------------------------------------------------------------------------------------


function getProductPrice(productName) {
    const products = [
        { name: "Radar", price: 1300, quantity: 4 },
        { name: "Scanner", price: 2700, quantity: 3 },
        { name: "Droid", price: 400, quantity: 7 },
        { name: "Grip", price: 1200, quantity: 9 },
    ];

    for (const product of products) {
        if (product.name === productName) {
            return product.price
        }
    }
    return null
}

// console.log(getProductPrice("Radar"));
// console.log(getProductPrice("Grip"));
// console.log(getProductPrice("Scanner"));
// console.log(getProductPrice("Droid"));
// console.log(getProductPrice("Engine"));

//  getProductPrice("Radar") повертає 1300.
// Виклик getProductPrice("Grip") повертає 1200.
// Виклик getProductPrice("Scanner") повертає 2700.
// Виклик getProductPrice("Droid") повертає 400.
// Виклик getProductPrice("Engine") повертає null.

// -------------------------------------------------------------------------------------------------------


function getAllPropValues(propName) {
    const products = [
        { name: "Radar", price: 1300, quantity: 4 },
        { name: "Scanner", price: 2700, quantity: 3 },
        { name: "Droid", price: 400, quantity: 7 },
        { name: "Grip", price: 1200, quantity: 9 },
    ];
    let allValue = []

    for (const product of products) {
        allValue.push(product[propName])
    }
    return allValue
}

// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("category"));

// Виклик getAllPropValues("name") повертає["Radar", "Scanner", "Droid", "Grip"]
// Виклик getAllPropValues("quantity") повертає[4, 3, 7, 9]
// Виклик getAllPropValues("price") повертає[1300, 2700, 400, 1200]
// Виклик getAllPropValues("category") повертає[]


// -------------------------------------------------------------------------------------------------------


function calculateTotalPrice(productName) {
    const products = [
        { name: "Radar", price: 1300, quantity: 4 },
        { name: "Scanner", price: 2700, quantity: 3 },
        { name: "Droid", price: 400, quantity: 7 },
        { name: "Grip", price: 1200, quantity: 9 },
    ];

    for (const product of products) {
        if (product.name === productName) {
            return product.price * product.quantity
        }
    }
    return `Product ${productName} not found!`
}

// console.log(calculateTotalPrice("Radar"));


// -------------------------------------------------------------------------------------------------------


const atTheOldToad = {
    potions: [
        { name: "Speed potion", price: 460 },
        { name: "Stone skin", price: 520 },
    ],
    getPotions() {
        return this.potions;
    },
    addPotion(newPotion) {
        this.potions.push(newPotion);
    },
    getTotalPrice() {
        let totalPrice = 0;
        for (const potion of this.potions) {
            totalPrice += potion.price
        }
        return totalPrice
    },
};

// console.log(atTheOldToad.getTotalPrice());


// -------------------------------------------------------------------------------------------------------

const atTheOldToad2 = {
    potions: [
        { name: "Speed potion", price: 460 },
        { name: "Stone skin", price: 520 },
    ],
    getPotions() {
        return this.potions;
    },
    updatePotionName(oldName, newName) {
        for (const potion of this.potions) {
            if (potion.name === oldName) {
                potion.name = newName;
            }
        }
    },
};


// console.log(atTheOldToad2.updatePotionName("Stone skin", "New Value"));
// console.log(atTheOldToad2.potions);



// -------------------------------------------------------------------------------------------------------

function addOverNum(value, ...args) {
    let sum = 0;
    for (const arg of args) {
        if (arg > value) {
            sum += arg;
        }
    }
    return sum
}
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));



// -------------------------------------------------------------------------------------------------------

const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];

const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores);


// console.log(bestScore, worstScore);


// -------------------------------------------------------------------------------------------------------







// -------------------------------------------------------------------------------------------------------







// -------------------------------------------------------------------------------------------------------
