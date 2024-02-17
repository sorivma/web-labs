const { argv } = require('process')
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function min(first_two, last) {
    let min = Number.MAX_SAFE_INTEGER

    if (last < min) {
        min = last
    }

    first_two.forEach(element => {
        if (element < min) {
            min = element
        }
    });

    return min
}

rl.question('', (in_string) => {
    args = in_string.split(',')
    last = parseInt(args.pop())
    first_two = args.map(str => parseInt(str))
    console.log(min(first_two, last))
    rl.close();
})