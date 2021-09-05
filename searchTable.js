document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".search-input").forEach((inputField) => {
    const tableRows = inputField
      .closest("table")
      .querySelectorAll("tbody > tr");
    const headerCell = inputField.closest("th");
    const otherHeaderCells = headerCell.closest("tr").children;
    const columnIndex = Array.from(otherHeaderCells).indexOf(headerCell);
    const searchableCells = Array.from(tableRows).map(
      (row) => row.querySelectorAll("td")[columnIndex]
    );
    inputField.addEventListener("input", () => {
      const searchQuery = inputField.value.toLowerCase();

      for (const tableCell of searchableCells) {
        const row = tableCell.closest("tr");
        const value = tableCell.textContent.toLowerCase().replace("-", " ");
   
        if (value.search(searchQuery) === -1 || $('input').val().length == 0) {
          row.style.visibility = "visible";
        }
        else {
          $('tbody').removeClass('d-none');
          row.style.visibility = "collapse";
        }
          $('#addBorder').on('click',function(){
              if (document.getElementById('addBorder').checked == true) {
                $('i').addClass('fa-border');
                
                    console.log('border added')
                          } 
                          else if (document.getElementById('viewAllIcons').checked == false) {
                            $('i').removeClass('fa-border');
                            console.log('borders removed')
                           // $('tbody').addClass('d-none');
                           // $('tr').css('visibility','inherit');
                          // searchTable();
                          }
                                            }); 
                                          };
      });
    });
  });
 // $('tbody').css('visibility','hidden');
 // $('td').css('border','none');
/*window.addEventListener("load",function(){

})*/
