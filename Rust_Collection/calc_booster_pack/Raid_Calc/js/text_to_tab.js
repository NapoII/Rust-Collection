// https://github.com/NapoII/Rust-Collection

// Fetch the CSV data from the provided URL

fetch('/Rust_Collection/calc_booster_pack/Raid_Calc/raid.CSV')
    .then(response => response.text())
    .then(data => {
        // Split the fetched data into rows using line breaks
        const rows = data.trim().split('\n');

        // Get the table element by its ID
        const table = document.getElementById('csvTable');

        // Loop through each row starting from index 1 (skipping the header row)
        for (let i = 1; i < rows.length; i++) {
            const row = rows[i];
            const columns = row.split(';'); // Split row into columns using semicolon as the delimiter (adjust if needed)

            // Create a new table row
            const newRow = document.createElement('tr');

            // Loop through each column starting from index 1 (skipping the first column)
            for (let j = 1; j < columns.length; j++) {
                const column = columns[j];
                const newCell = document.createElement('td');

                // Check if the column content is an image URL
                if (column.includes('.jpg') || column.includes('.png') || column.includes('.gif')) {
                    // Create an image element, set alt text and source
                    const img = document.createElement('img');
                    img.alt = 'Image';
                    img.src = column;

                    // Append the image to the table cell
                    newCell.appendChild(img);
                } else {
                    // If not an image URL, set the cell's text content
                    newCell.textContent = column;
                }

                // Append the cell to the current row
                newRow.appendChild(newCell);
            }

            // Append the row to the table
            table.appendChild(newRow);
        }

    });


// Wait for the DOM to be fully loaded before attaching event listeners
document.addEventListener("DOMContentLoaded", function() {
  function handleInputChange() {
}

handleInputChange();
});

