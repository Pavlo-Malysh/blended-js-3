
const productTrue = ["laptop", "phone", "monitor"]

function deliverProduct(product) {
    return new Promise((resolve, reject) => {
        if (productTrue.includes(product)) {
            setTimeout(() => {
                resolve(`Delivered: ${product}`)
            }, 2000)
        } else {
            reject(`Out of stock: ${product}`)
        }
    })
}

// deliverProduct("laptop")
//     .then(result => console.log(result))
//     .catch(error => console.error(error));

// deliverProduct("keyboard")
//     .then(result => console.log(result))
//     .catch(error => console.error(error));


