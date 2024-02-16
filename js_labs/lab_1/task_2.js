const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function roundTo(number, n) {
    return round(number * (10 ** n)) / (10 ** n)
}


/*
Для числа 3 двоичное представление начиная со значящих битов 11.101, при побитовом или с 0 получаем 32 битовый int - 11
В js bitwise операции всегда результируют целочисленным int
*/
function round(number) {
    return number | 0
}3

rl.question('', (in_string) => {
    params = in_string.split(',')
    console.log(roundTo(parseFloat(params[0]), parseInt(params[1])))
    rl.close();
})

