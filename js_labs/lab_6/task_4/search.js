function clearFontWeight(towns) {
   towns.forEach(element => {
      element.style.fontWeight = ''
   })
}

function search() {
   const searchText = document.getElementById('searchText').value
   towns = document.getElementById('towns').querySelectorAll('li')
   result = document.getElementById('result')

   clearFontWeight(towns)

   matches = 0
   towns.forEach(element => {
      if (element.innerHTML.includes(searchText)) {
         element.style.fontWeight = 'bold'
         matches++
      }
   })

   result.innerHTML = `${matches} matches found`
}
