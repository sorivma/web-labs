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



test_data = [20, 1, 100,]

test_data.forEach(element => {
    console.log(ageToString(element))
});


