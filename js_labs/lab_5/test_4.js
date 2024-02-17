
const cinema = [];

function findMovie(movieName) {
    return cinema.find(movie => movie.name === movieName)
}

function addMovie(movieName) {
    const movie = {name : movieName}
    cinema.push(movie)
}

function addDirector(movieName, director) {
    const movie = findMovie(movieName)
    if (movie) {
        movie.director = director
    }
}

function addDate(movieName, date) {
    const movie = findMovie(movieName)
    if (movie) {
        movie.date = date
    }
}

function executeCommand(command) {
    const addMovieIndex = command.indexOf('addMovie')
    const directedByIndex = command.indexOf('directedBy')
    const onDateIndex = command.indexOf('onDate')

    if (addMovieIndex != -1) {
        const movieName = command.substring(addMovieIndex + 'addMovie'.length).trim()
        addMovie(movieName)
        return
    }

    if (directedByIndex != -1) {
        const movieName = command.substring(0, directedByIndex).trim()
        const director = command.substring(directedByIndex + 'directedBy'.length).trim()
        addDirector(movieName, director)
        return
    }

    if (onDateIndex != -1) {
        const movieName = command.substring(0, onDateIndex).trim()
        const date = command.substring(onDateIndex + 'onDate'.length).trim()
        addDate(movieName, date)
        return
    }
}

commands = [
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohem'
]

commands.forEach(element => {
    executeCommand(element)
})

cinema.forEach(element => {
    console.log(JSON.stringify(element))
})