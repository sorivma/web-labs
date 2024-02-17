function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   const table = document.querySelector('.container')

   function removeSelection() {
      const elements = document.querySelectorAll('.select')
      elements.forEach(element => {
         element.classList.remove('select')
      });
   }

   function onClick() {
      removeSelection()
      const search_str = document.getElementById('searchField').value

      for (let i = 1; i < table.rows.length-1; i++) {
         
         row = table.rows[i]
         for (let j = 0; j < row.cells.length; j++) {
            cell = row.cells[j]
            if (cell.innerHTML.includes(search_str)) {
               row.classList.add('select')
            }
         }
      }
   }
}