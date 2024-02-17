function subtract() {
    const firstNumber = parseFloat(document.getElementById('firstNumber').value)
    const secondNumber = parseFloat(document.getElementById('secondNumber').value)
    const resultDiv = document.getElementById('result')

    resultDiv.innerHTML = firstNumber - secondNumber
}