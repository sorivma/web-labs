function addItem() {
    const newItemText = document.getElementById('newItemText').value
    const newItemValue = document.getElementById('newItemValue').value
    const dropdown = document.getElementById('menu')
    
    const newOption = document.createElement('option')
    newOption.value = newItemValue
    newOption.textContent = newItemText

    dropdown.appendChild(newOption)
}