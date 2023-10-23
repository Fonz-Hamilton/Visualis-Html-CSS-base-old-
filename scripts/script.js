function addToTable(isRow) {
    var table = document.getElementById("table");
    var selectedOption = document.getElementById("dropdown1").value;
    var inputValue = document.getElementById("inputText").value;

    if (selectedOption == "row") {
        // Add a new row
        if(inputValue != "") {
            var newRow = table.insertRow(table.rows.length);
            var values = inputValue.split(',');
            for (var i = 0; i < table.rows[0].cells.length; i++) {
                var newCell = newRow.insertCell(i);
                newCell.textContent = values[i] ? values[i].trim() : ''; // Use a value or a blank if not available
            }
        }
    } else {
        // Add a new column
        if(inputValue != "") {
            var header = table.rows[0];
            var newHeaderCell = document.createElement("th");
            newHeaderCell.textContent = inputValue;
            header.appendChild(newHeaderCell);

            for (var i = 1; i < table.rows.length; i++) {
                var newRow = table.rows[i];
                var newCell = newRow.insertCell(-1);
                newCell.textContent = "";

            }
            populateDropdown3();
        }
    }
}
function populateDropdown3() {
    const table = document.getElementById("table");
    const headerRow = table.getElementsByTagName("thead")[0].rows[0];
    const dropdown = document.getElementById("dropdown3");
    dropdown.innerHTML = ""; // Clear existing options

    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "Select a header";
    defaultOption.disabled = true;
    defaultOption.selected = true;
    dropdown.appendChild(defaultOption);

    for (let i = 0; i < headerRow.cells.length; i++) {
        const cell = headerRow.cells[i];
        const option = document.createElement("option");
        option.value = i; // Identify which column was selected
        option.textContent = cell.textContent;
        dropdown.appendChild(option);
    }
}




