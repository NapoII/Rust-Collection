// https://github.com/NapoII/Rust-Collection

// Fetch the CSV data from the provided URL
fetch('https://raw.githubusercontent.com/NapoII/Rust-Collection/main/Rust_Collection/Raid_Calc/raid.CSV')
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
    })
    .catch(error => {
        // Handle errors in fetching or processing the CSV data
        console.error('Error loading CSV file:', error);
    });


// Wait for the DOM to be fully loaded before attaching event listeners
document.addEventListener("DOMContentLoaded", function() {
  function handleInputChange() {
}

handleInputChange();
});



// Function for processing changes in the input fields and the switch

// const sulforValue = parseFloat(sulforInput.value) || 0;
// 'const gunpowderValue = parseFloat(gunpowderInput.value) || 0;
// const dieselValue = parseFloat(dieselInput.value) || 0;
// const switchValue = switchInput.checked;

// Perform calculations
//

// Calculate For how many boom calc



// Initial call of the function to capture the current state


// // Calculate total
// let total = sulforValue + gunpowderValue  + sulfurDiesel;
// let switchText = switchValue ? ' → Giant Excavator' : ' → Sulfur Quarry'; // Switch text

// switchInput.classList.toggle('slider', switchValue);

// // Perform the Java calculation
// let availableSulfur = total; // Total amount of sulphur available
// let rocketsPerSet = 4;
// let ammoPerSet = 30;
// let sulfurPerRocket = 1400;
// let sulfurPerAmmo = 25;
// let set_sulfur = ((rocketsPerSet*sulfurPerRocket)+(ammoPerSet*sulfurPerAmmo))

// let maxSets = Math.floor(availableSulfur/set_sulfur)

// let rockets_ges = rocketsPerSet * maxSets
// let ammo_ges = ammoPerSet * maxSets
// let sulfur_rest = availableSulfur % set_sulfur; 

// let need_sulf_a = 5 * ammo_ges
// let need_Gp_a = 10 * ammo_ges

// let need_sulf_r = (10*10)*ammo_ges
// let need_Gp_r = (50*10)+150*ammo_ges

// let need_sulf_ges = need_sulf_r + need_sulf_a
// let need_Gp_ges = need_Gp_r + need_Gp_a

// let stone_wall_smash = maxSets 
// let metal_wall_smash = maxSets / 2
// let hqm_wall_smash = maxSets / 4


// resultElement.innerHTML = `
// <div class="section">
//     <h2>You need</h2>
//     <div class="flex-container">
//         <div class="flex-item"><img src="img/sulfur.big.png" alt="need_sulf_ges"> ${need_sulf_ges.toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
//         <div class="flex-item"><img src="img/gunpowder.big.png" alt="need_Gp_ges"> ${need_Gp_ges.toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
//     </div>
// </div>
// <div class="section">
//     <h2>You get</h2>
//     <div class="flex-container">
//         <div class="flex-item"><img src="img/ammo.rocket.basic.png" alt="rockets_ges">${rockets_ges}</div>
//         <div class="flex-item"><img src="img/ammo.rifle.explosive.png" alt="ammo_ges">${ammo_ges}</div>
//         <div class="flex-item"><img src="img/sulfur.big.png" alt="sulfur_rest">${sulfur_rest}</div>
//     </div>
// </div>
// <div class="section">
//     <h2>Boom!</h2>
//     <div class="flex-container">
//         <div class="flex-item"><img src="img/wall2.png" alt="stone_wall_smash">${stone_wall_smash}</div>
//         <div class="flex-item"><img src="img/wall3.png" alt="metal_wall_smash">${metal_wall_smash}</div>
//         <div class="flex-item"><img src="img/wall4.png" alt="hqm_wall_smash">${hqm_wall_smash}</div>
//     </div>
// </div>
// `;