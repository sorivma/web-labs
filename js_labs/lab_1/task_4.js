const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

pricing = {
    "Students" : {
        "Friday" : 8.45,
        "Saturday" : 9.80,
        "Sunday" : 10.46,
    },
    "Corporate" : {
        "Friday" : 10.90,
        "Saturday" : 15.60,
        "Sunday" : 16,
    },
    "Regular" : {
        "Friday" : 15,
        "Saturday" : 20,
        "Sunday" : 22.50
    }
}

specials = {
    "Students" : (quantity, price, day) => {
        if (quantity >= 30) {
            return price - price * 0.15
        }
        return price
    },
    "Corporate" : (quantity, price, day) => {
        if (quantity >= 100) {
            return price - (price / quantity) * 10
        }
        return price
    },
    "Regular" : (quantity, price, day) => {
        if (quantity >= 10 && quantity <= 20) {
            return price - price * 0.05
        }
        return price
    }
}

function calculatePrice(quantity, group, day) {
    let price = quantity * pricing[group][day]
    return specials[group](quantity, price, day)
}


rl.question('', (in_string) => {
    params = in_string.split(',')
    quantity = parseInt(params[0])
    console.log(`Total price: ${calculatePrice(quantity, params[1], params[2]).toFixed(2)}`)
    rl.close();
})

