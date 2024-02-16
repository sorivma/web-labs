const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function isLeapYear(year) {
    return (year%4 == 0 && year%100 != 0) || year%400 == 0
}

rl.question('', (year) => {
    console.log(isLeapYear(parseInt(year)) ? "yes" : "no")
    rl.close();
})2