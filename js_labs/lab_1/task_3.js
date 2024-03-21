const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

divisors = [2, 3, 6, 8, 10]

function findDivisors(number) {
    for (let i = divisors.length - 1; i >= 0; i--) {
        if (number % divisors[i] == 0) {
            console.log(`Число делится на ${divisors[i]}`)
            return
        }
    }
    console.log("Не делится")
}

rl.question('', (number) => {
    findDivisors(parseInt(number))
    rl.close();
})

