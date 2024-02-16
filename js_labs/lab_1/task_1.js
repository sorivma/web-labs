const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function ageToString(age){
    if (age <= 0) {
        return "Таких людей не бывает"
    }
    if (age <= 2) {
        return "младенец"
    }
    if (age <= 13) {
        return "ребенок"
    }
    if (age <= 19) {
        return "подросток"
    }
    if (age <= 65) {
        return "взрослый"
    }
    return "пожилой"
}

rl.question('', (age) => {
    console.log(ageToString(parseInt(age)))
    rl.close();
})




