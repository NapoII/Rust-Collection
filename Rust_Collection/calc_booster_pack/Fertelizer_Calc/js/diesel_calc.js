function calculate_diesel() {
    const inputValue_diesel = parseFloat(document.getElementById("inputValue_diesel").value);

    // Giant Excavator
    const g_hqm = inputValue_diesel * 100;
    const g_sulfur_ore = inputValue_diesel * 2000;
    const g_stones = inputValue_diesel * 10000;
    const g_metal_fragments = inputValue_diesel * 5000;
    const g_time_min = inputValue_diesel * 2;


    // Boom Calc Giant Excavator
    const g_gun_powder = (g_sulfur_ore / 20)*10;
    const g_explosives = g_sulfur_ore / 110;
    const g_Rocket = g_sulfur_ore / 1400;
    const g_c4 = g_sulfur_ore / 2200;
    const g_satchel_charge = g_sulfur_ore / 480;
    const g_explosive_ammo = g_sulfur_ore / 50;


    // Quarry
    const q_hqm = inputValue_diesel * 50;
    const q_sulfur_ore = inputValue_diesel * 1000;
    const q_Stones = inputValue_diesel * 5000;
    const q_Metal_Fragments = inputValue_diesel * 1000;
    const q_crude_oil = inputValue_diesel * 60;
    const q_low_grade_fuel = inputValue_diesel * 170;
    const q_low_grade_fuel_ges = q_low_grade_fuel +(q_crude_oil*3);
    const q_time_min = (inputValue_diesel * 130)/60;

    // Boom Calc Quarry
    const q_gun_powder = (q_sulfur_ore / 20)*10;
    const q_explosives = q_sulfur_ore / 110;
    const q_Rocket = q_sulfur_ore / 1400;
    const q_c4 = q_sulfur_ore / 2200;
    const q_satchel_charge = q_sulfur_ore / 480;
    const q_explosive_ammo = q_sulfur_ore / 50;


    // Generate the text for "copy-text_g" and "copy-text_q"
    const g_text = `From ${inputValue_diesel.toLocaleString()} Diesel in the Giant Excavator you can get in ${g_time_min.toLocaleString(undefined, { maximumFractionDigits: 0 })} min:| \n ${g_sulfur_ore.toLocaleString(undefined, {
maximumFractionDigits: 0
})} Sulfur | \n${g_gun_powder.toLocaleString(undefined, { maximumFractionDigits: 0 })} Gun Powder | \n ${g_Rocket.toLocaleString(
undefined,
{ maximumFractionDigits: 0 }
)} Rockets | \n${g_satchel_charge.toLocaleString(undefined, { maximumFractionDigits: 0 })} Satchels `;



    const q_text = `From ${inputValue_diesel.toLocaleString()} Diesel in the Quarry you can get in ${q_time_min.toLocaleString(undefined, { maximumFractionDigits: 0 })} min:| \n ${q_sulfur_ore.toLocaleString(undefined, {
maximumFractionDigits: 0
})} Sulfur | \n${q_gun_powder.toLocaleString(undefined, { maximumFractionDigits: 0 })} Gun Powder | \n ${q_Rocket.toLocaleString(
undefined,
{ maximumFractionDigits: 0 }
)} Rockets | \n${q_satchel_charge.toLocaleString(undefined, { maximumFractionDigits: 0 })} Satchels `;


    // Display the text in respective divs
    document.getElementById("copy-text_g").textContent = g_text;
    document.getElementById("copy-text_q").textContent = q_text;

// Display the results in respective divs
document.getElementById("result1").innerHTML = `
<h2>Giant Excavator</h2>
<div class="calculation-item">
  <img src="img/hq.metal.ore.png" alt="HQ Metal Ore">
  <span>&nbsp;${g_hqm.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
</div>
<div class="calculation-item">
  <img src="img/sulfur.ore.png" alt="Sulfur Ore">
  <span>&nbsp;${g_sulfur_ore.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
</div>
<div class="calculation-item">
  <img src="img/stones.png" alt="Stones">
  <span>&nbsp;${g_stones.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
</div>
<div class="calculation-item">
  <img src="img/metal.fragments.png" alt="Metal Fragments">
  <span>&nbsp;${g_metal_fragments.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
</div>
<div class="calculation-item">
  <img src="img/time.png" alt="Time (min)">
  <span>&nbsp;${g_time_min.toLocaleString(undefined, { maximumFractionDigits: 0 })} min</span>
</div>
`;

document.getElementById("result2").innerHTML = `
<h2>Quarry</h2>
<div class="calculation-item">
  <img src="img/hq.metal.ore.png" alt="HQ Metal Ore">
  <span>&nbsp;${q_hqm.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
</div>
<div class="calculation-item">
  <img src="img/sulfur.ore.png" alt="Sulfur Ore">
  <span>&nbsp;${q_sulfur_ore.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
</div>
<div class="calculation-item">
  <img src="img/stones.png" alt="Stones">
  <span>&nbsp;${q_Stones.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
</div>
<div class="calculation-item">
  <img src="img/metal.fragments.png" alt="Metal Fragments">
  <span>&nbsp;${q_Metal_Fragments.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
</div>
<div class="calculation-item">
  <img src="img/low.grade.fuel.png" alt="Low Grade Fuel">
  <span>&nbsp;${q_low_grade_fuel_ges.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
</div>
<div class="calculation-item">
  <img src="img/time.png" alt="Time (min)">
  <span>&nbsp;${q_time_min.toLocaleString(undefined, { maximumFractionDigits: 0 })} min</span>
</div>
`;

// Display the calculations in respective divs
document.getElementById("calculation1").innerHTML = `
<h2>Boom</h2>
<div class="calculation-item">
  <img src="img/gun.powder.png" alt="gun.powder">
  <span>&nbsp;${Math.floor(g_gun_powder).toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
</div>
<div class="calculation-item">
  <img src="img/explosives.png" alt="explosives">
  <span>&nbsp;${Math.floor(g_explosives).toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
</div>
<div class="calculation-item">
  <img src="img/rocket.png" alt="rocket">
  <span>&nbsp;${Math.floor(g_Rocket).toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
</div>
<div class="calculation-item">
  <img src="img/c4.png" alt="c4">
  <span>&nbsp;${Math.floor(g_c4).toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
</div>
<div class="calculation-item">
  <img src="img/satchel.charge.png" alt="satchel.charge">
  <span>&nbsp;${Math.floor(g_satchel_charge).toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
</div>
<div class="calculation-item">
  <img src="img/ammo.rifle.explosive.png" alt="ammo.rifle.explosive">
  <span>&nbsp;${Math.floor(g_explosive_ammo).toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
</div>
`;

document.getElementById("calculation2").innerHTML = `
<h2>Boom</h2>
<div class="calculation-item">
  <img src="img/gun.powder.png" alt="gun.powder">
  <span>&nbsp;${Math.floor(q_gun_powder).toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
</div>
<div class="calculation-item">
  <img src="img/explosives.png" alt="explosives">
  <span>&nbsp;${Math.floor(q_explosives).toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
</div>
<div class="calculation-item">
  <img src="img/rocket.png" alt="rocket">
  <span>&nbsp;${Math.floor(q_Rocket).toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
</div>
<div class="calculation-item">
  <img src="img/c4.png" alt="c4">
  <span>&nbsp;${Math.floor(q_c4).toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
</div>
<div class="calculation-item">
  <img src="img/satchel.charge.png" alt="satchel.charge">
  <span>&nbsp;${Math.floor(q_satchel_charge).toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
</div>
<div class="calculation-item">
  <img src="img/ammo.rifle.explosive.png" alt="ammo.rifle.explosive">
  <span>&nbsp;${Math.floor(q_explosive_ammo).toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
</div>
`;
  }
  document.getElementById("copy-text_g").addEventListener("click", function () {
    copyToClipboard(document.getElementById("copy-text_g").textContent);
  });

  document.getElementById("copy-text_q").addEventListener("click", function () {
    copyToClipboard(document.getElementById("copy-text_q").textContent);
  });

  function copyToClipboard(text) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("Text copied to clipboard!");
  }


  calculate_diesel();