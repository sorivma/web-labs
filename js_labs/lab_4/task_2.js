const { argv } = require('process')
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function substruct(first_two, last){
    let sum = first_two.reduce((acc, curr) => acc += curr, 0)

    return sum - last
}

rl.question('', (in_string) => {
    args = in_string.split(',')
    last = parseInt(args.pop())
    first_two = args.map(str => parseInt(str))
    console.log(substruct(first_two, last))
    rl.close();
})