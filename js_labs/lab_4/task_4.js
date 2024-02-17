
function progressBar(progress) {
    complete = "%".repeat(progress / 10)
    other = ".".repeat((10 - progress / 10))
    if (progress == 100) {
        return `100% Complete!\n[${complete}${other}]`
    } else {
        return `${progress}% [${complete}${other}]\nStill loading...`
    }
}

for (let i = 0; i <= 100; i+=10) {
    console.log(progressBar(i))
}