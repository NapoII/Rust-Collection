fetch('https://raw.githubusercontent.com/NapoII/Rust-Collection/main/Rust_Collection/Raid_Calc/raid.CSV')
    .then(response => response.text())
    .then(data => {
      const rows = data.trim().split('\n');
      const table = document.getElementById('csvTable');

      for (let i = 1; i < rows.length; i++) {
        const row = rows[i];
        const columns = row.split(';'); // Verwende hier das richtige Trennzeichen (z.B. ; oder ,)
        const newRow = document.createElement('tr');

        for (let j = 1; j < columns.length; j++) {
          const column = columns[j];
          const newCell = document.createElement('td');

          if (column.includes('.jpg') || column.includes('.png') || column.includes('.gif')) {
            const img = document.createElement('img');
            img.alt = 'Bild';
            img.src = column;

            newCell.appendChild(img);
          } else {
            newCell.textContent = column;
          }

          newRow.appendChild(newCell);
        }

        table.appendChild(newRow);
      }
    })
    .catch(error => {
      console.error('Fehler beim Laden der CSV-Datei:', error);
    });


 

    document.addEventListener("DOMContentLoaded", function() {
        const sulforInput = document.getElementById('sulforInput');
        const gunpowderInput = document.getElementById('gunpowderInput');
        const dieselInput = document.getElementById('dieselInput');
        const switchInput = document.getElementById('switchInput');
        const switchLabel = document.getElementById('switchLabel'); // Element für den Schalter-Text
        const resultElement = document.getElementById('result');
    
        // Eventlistener für Änderungen in den Eingabefeldern und dem Schalter hinzufügen
        sulforInput.addEventListener('input', handleInputChange);
        gunpowderInput.addEventListener('input', handleInputChange);
        dieselInput.addEventListener('input', handleInputChange);
        switchInput.addEventListener('change', handleInputChange);
    
        // Funktion zur Verarbeitung von Änderungen in den Eingabefeldern und dem Schalter
        function handleInputChange() {
            const sulforValue = parseFloat(sulforInput.value) || 0;
            const gunpowderValue = parseFloat(gunpowderInput.value) || 0;
            const dieselValue = parseFloat(dieselInput.value) || 0;
            const switchValue = switchInput.checked;
    
            // Berechnungen durchführen
            let sulfurDiesel;
            if (switchValue) {
                sulfurDiesel = dieselValue * 2000;
            } else {
                sulfurDiesel = dieselValue * 1000;
            }
            
            // Gesamtsumme berechnen
            let total = sulforValue + gunpowderValue  + sulfurDiesel;
            let switchText = switchValue ? 'Giant Excavator' : 'Sulfur Quarry'; // Schalter-Text
    
            // Füge die CSS-Klasse hinzu oder entferne sie für die Animation
            switchInput.classList.toggle('slider', switchValue);
    
            // Führe die Java-Berechnung durch
            let availableSulfur = total; // Gesamtmenge verfügbaren Sulfurs
            let rocketsPerSet = 4;
            let ammoPerSet = 30;
            let sulfurPerRocket = 1400;
            let sulfurPerAmmo = 25;
            let set_sulfur = ((rocketsPerSet*sulfurPerRocket)+(ammoPerSet*sulfurPerAmmo))
    
            let maxSets = Math.floor(availableSulfur/set_sulfur)

            let rockets_ges = rocketsPerSet * maxSets
            let ammo_ges = ammoPerSet * maxSets
            let sulfur_rest = availableSulfur % set_sulfur; 

            let need_sulf_a = 5 * ammo_ges
            let need_Gp_a = 10 * ammo_ges

            let need_sulf_r = (10*10)*ammo_ges
            let need_Gp_r = (50*10)+150*ammo_ges

            let need_sulf_ges = need_sulf_r + need_sulf_a
            let need_Gp_ges = need_Gp_r + need_Gp_a

            let stone_wall_smash = maxSets 
            let metal_wall_smash = maxSets / 2
            let hqm_wall_smash = maxSets / 4
2
            // Ergebnisse anzeigen
// Ergebnisse anzeigen

resultElement.innerHTML = `
<div class="section">
    <h2>You need</h2>
    <div class="flex-container">
        <div class="flex-item"><img src="img/sulfur.big.png" alt="need_sulf_ges"> ${need_sulf_ges.toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
        <div class="flex-item"><img src="img/gunpowder.big.png" alt="need_Gp_ges"> ${need_Gp_ges.toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
    </div>
</div>
<div class="section">
    <h2>You get</h2>
    <div class="flex-container">
        <div class="flex-item"><img src="img/ammo.rocket.basic.png" alt="rockets_ges">${rockets_ges}</div>
        <div class="flex-item"><img src="img/ammo.rifle.explosive.png" alt="ammo_ges">${ammo_ges}</div>
        <div class="flex-item"><img src="img/sulfur.big.png" alt="sulfur_rest">${sulfur_rest}</div>
    </div>
</div>
<div class="section">
    <h2>Boom!</h2>
    <div class="flex-container">
        <div class="flex-item"><img src="img/wall2.png" alt="stone_wall_smash">${stone_wall_smash}</div>
        <div class="flex-item"><img src="img/wall3.png" alt="metal_wall_smash">${metal_wall_smash}</div>
        <div class="flex-item"><img src="img/wall4.png" alt="hqm_wall_smash">${hqm_wall_smash}</div>
    </div>
</div>
`;
    
            switchLabel.textContent = switchText; // Schalter-Text setzen
        }
    
        // Initialer Aufruf der Funktion, um den aktuellen Zustand zu erfassen
        handleInputChange();
    });
    
    
