function changeArray(array) {
    ok_sum = 0
    no_ok_sum = 0
    for (let i = 0; i < array.length; i++) {
        ok_sum += array[i]
        if (array[i] % 2 == 0) {
            array[i]+=i
        } else {
            array[i]-=i
        }
        no_ok_sum += array[i]
    }

    console.log(array)
    console.log(ok_sum)
    console.log(no_ok_sum)
}


var test = [5,15,23,56,35]
changeArray(test)

var test_2 = [-5,11,3,0,2]
changeArray(test_2)