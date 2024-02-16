const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

operations = {
    "+" : (first, second) => {
        return first + second
    },
    "-" : (first, second) => {
        return first - second
    },
    "*" : (first, second) => {
        return first * second
    },
    "/" : (first, second) => {
        return first / second
    }
}

function eval(first, operator, second) {
    return operations[operator](first, second).toFixed(2)
}

rl.question('', (in_string) => {
    params = in_string.split(',')
    console.log(eval(params[0], params[1], params[2]))
    rl.close();
})
