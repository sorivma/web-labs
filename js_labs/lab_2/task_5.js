const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function binToTen(bin_number) {
    number = 0
    for (let i = bin_number.length - 1; i >= 0; i--) {
        number+= (2 ** (bin_number.length - i - 1)) * parseInt(bin_number[i])
    }
    return number
}

rl.question('', (bin_number) => {
    console.log(binToTen(bin_number))
    rl.close();
})

