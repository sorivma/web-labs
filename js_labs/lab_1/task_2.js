const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function roundTo(number, places){
    if (places > 15) {
        places = 15
    }
    return number.toFixed(places)
}

rl.question('', (in_string) => {
    params = in_string.split(',')
    console.log(roundTo(parseFloat(params[0]), parseInt(params[1])))
    rl.close();
})

