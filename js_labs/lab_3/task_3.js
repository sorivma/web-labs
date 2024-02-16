

function rotateArray(array, rotations) {
    let nonFullRotations = rotations % array.length;

    let rightPart = array.slice(nonFullRotations)
    let leftPart = array.slice(0, nonFullRotations)

    return rightPart.concat(leftPart)
}

test_1 = [51, 47, 32, 61, 21]
console.log(rotateArray(test_1, 2))

test_2 = [32, 21, 61, 1]
console.log(rotateArray(test_2, 4))

test_3 = [2, 4, 15, 31]
console.log(rotateArray(test_3, 5))