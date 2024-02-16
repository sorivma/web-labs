const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('', (in_string) => {
    console.log(in_string.split(',').join(''))
    rl.close();
})
