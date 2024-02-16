const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function digitSum(number) {
    sum = 0
    while (number > 0) {
        sum += number%10
        number = (number / 10) | 0
    }
    return sum
}

rl.question('', (number) => {
    console.log(digitSum(number))
    rl.close();
})
