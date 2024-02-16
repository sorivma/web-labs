const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function infoToString(name, pop, area) {
    return `Town ${name} has population of ${pop} and are ${area} square km.`
}

rl.question('', (in_string) => {
    params = in_string.split(',')
    console.log(infoToString(params[0], params[1], params[2]))
    rl.close();
})
