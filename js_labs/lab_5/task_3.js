const test_1 = [
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
]

const test_2 = [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
]

function convertToMap(arr_1, arr_2) {
    const inputted = arr_1.concat(arr_2)

    const stockpile = new Map()

    for (let i = 0; i < inputted.length; i += 2) {
        const productName = inputted[i]
        const quantity = inputted[i + 1]

        if (stockpile.has(productName)) {
            stockpile.set(productName, stockpile.get(productName) + parseInt(quantity))
        } else {
            stockpile.set(productName, parseInt(quantity))
        }
    }

    return stockpile
}

function formatMap(map) {
    let repr = ""
    for (let [key, value] of map.entries()) {
        repr += `${key} -> ${value}\n`
    }
    return repr
}

console.log(
    formatMap(
        convertToMap(
            test_1,
            test_2
        )
    )
)