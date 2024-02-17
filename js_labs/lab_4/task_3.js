
function genMatrix(n) {
    Array.from({length: n}).forEach(() => console.log(Array(n).fill(n).join(' ')))
}

genMatrix(10)