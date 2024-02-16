
function find_common(array_1, array_2) {
    unique_words = new Set()
    array_2.forEach(element => {
        unique_words.add(element)
    });
    array_1.forEach(element => {
        if (unique_words.has(element)) {
            console.log(element)
        }
    })
}

test_1_1 = ['Hey', 'hello', 2, 4, 'Peter', 'e']
test_1_2 = ['Petar', 10, 'hey', 4, 'hello', '2']
find_common(test_1_1, test_1_2)
test_2_1 = ['R', 'u', 's', 's', 'i', 'a']
test_2_2 = ['R', 'u', 't']
find_common(test_2_1, test_2_2)