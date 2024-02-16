
function isMatrixWonderfull(matrix) {
    let rowCheckSum = matrix[0].reduce((acc, curr) => acc + curr, 0)

    for (let row of matrix) {
        if (row.reduce((acc, curr) => acc + curr, 0) != rowCheckSum) {
            return false
        }
    }

    for (let col = 0; col < matrix[0].length; col++) {
        let sum = 0;
        for (let row = 0; row < matrix.length; row++) {
            sum += matrix[row][col]
        }
        if (sum != rowCheckSum) {
            return false;
        }
    }

    return true
}

let matrix_1 = [
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5],
]

console.log(isMatrixWonderfull(matrix_1))

let matrix_2 = [
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1],
]

console.log(isMatrixWonderfull(matrix_2))

let matrix_3 = [
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0],
]

console.log(isMatrixWonderfull(matrix_3))

