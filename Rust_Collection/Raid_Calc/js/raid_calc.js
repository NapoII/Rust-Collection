// Füge Event Listener für Änderungen der Eingabefelder hinzu
document.querySelectorAll('.resource-container input').forEach(input => {
    input.addEventListener('input', updateValues);
});

// Füge Event Listener für Änderungen des Schalters hinzu
document.getElementById('switchInput').addEventListener('change', updateValues);

// Funktion zur Aktualisierung der Werte
function updateValues() {
    const sulfurValue = parseFloat(document.getElementById('Sulfor_input').value) || 0;
    const gunPowderValue = parseFloat(document.getElementById('Gun_Powder_input').value) || 0;
    const explosivesValue = parseFloat(document.getElementById('explosives_input').value) || 0;
    const lowGradeFuelValue = parseFloat(document.getElementById('lowgradefuel_input').value) || 0;
    const dieselBarrelValue = parseFloat(document.getElementById('diesel_barrel_input').value) || 0;
    const switchValue = document.getElementById('switchInput').checked;

    // Hier kannst du die Werte verwenden oder weiterverarbeiten
    console.log('Sulfur:', sulfurValue);
    // console.log('Gun Powder:', gunPowderValue);
    // console.log('Explosives:', explosivesValue);
    // console.log('Low Grade Fuel:', lowGradeFuelValue);
    // console.log('Diesel Barrel:', dieselBarrelValue);
    console.log('Switch:', switchValue);

    if (switchValue) {
        sulfur_from_diesel = dieselBarrelValue * 2000;
        // console.log('sulfur_from_diesel:', sulfur_from_diesel);
    } else {
        sulfur_from_diesel = dieselBarrelValue * 1000;
        // console.log('sulfur_from_diesel:', sulfur_from_diesel);
    }

    // ress
    const fuel = (dieselBarrelValue * 350) + lowGradeFuelValue
    const sulfur = sulfurValue + sulfur_from_diesel + (gunPowderValue * 2)
    const sulfur_add_explo = sulfurValue + sulfur_from_diesel + (gunPowderValue * 2) + (explosivesValue * 110)



    // molow
    const one_molotov_fuel = 50;
    const one_molotov_cloth = 10;

    const molow_sum = Math.floor(fuel / one_molotov_fuel);
    const molow_material_fuel = (molow_sum * one_molotov_fuel).toLocaleString();
    const molow_material_cloth = (molow_sum * one_molotov_cloth).toLocaleString();

    // Anzeige der berechneten Werte in HTML
    document.getElementById('molow_sum').textContent = `${molow_sum}`;
    document.getElementById('molow_material_fuel').textContent = `${molow_material_fuel}`;
    document.getElementById('molow_material_cloth').textContent = `${molow_material_cloth}`;

    // satchel
    const one_satchel_sulfur_ges  = 480 ;
    const one_satchel_gunpowder = 240;
    const one_satchel_charcoal = 720;
    const one_satchel_cloth = 10;
    const one_satchel_metal = 80;
    const one_satchel_rope = 1;

    const satchel_sum = Math.floor(sulfur / one_satchel_sulfur_ges);
    const satchel_material_gunpowder = (one_satchel_gunpowder * satchel_sum).toLocaleString();
    const satchel_material_charcoal = (one_satchel_charcoal * satchel_sum).toLocaleString();
    const satchel_material_cloth = (one_satchel_cloth * satchel_sum).toLocaleString();
    const satchel_material_metal = (one_satchel_metal * satchel_sum).toLocaleString();
    const satchel_material_rope = (one_satchel_rope * satchel_sum).toLocaleString();

    document.getElementById('satchel_sum').textContent = `${satchel_sum}`;
    document.getElementById('satchel_material_gunpowder').textContent = `${satchel_material_gunpowder}`;
    document.getElementById('satchel_material_charcoal').textContent = `${satchel_material_charcoal}`;
    document.getElementById('satchel_material_cloth').textContent = `${satchel_material_cloth}`;
    document.getElementById('satchel_material_metal').textContent = `${satchel_material_metal}`;
    document.getElementById('satchel_material_rope').textContent = `${satchel_material_rope}`;

    // Rocket
    const one_rocket_sulfur_ges = 1400;
    const one_rocket_sulfur = 100
    const one_rocket_charcoal = 1950;
    const one_rocket_gunpowder = 650;
    const one_rocket_metal = 100;
    const one_rocket_fuel = 30;
    const one_rocket_pipe = 2;

    const rocket_sum = Math.floor(sulfur_add_explo / one_rocket_sulfur_ges);
    const rocket_material_sulfur = (one_rocket_sulfur * rocket_sum).toLocaleString();
    const rocket_material_charcoal = (one_rocket_charcoal * rocket_sum).toLocaleString();
    const rocket_material_gunpowder = (one_rocket_gunpowder * rocket_sum).toLocaleString();
    const rocket_material_metal = (one_rocket_metal * rocket_sum).toLocaleString();
    const rocket_material_fuel = (one_rocket_fuel * rocket_sum).toLocaleString();
    const rocket_material_pipe = (one_rocket_pipe * rocket_sum).toLocaleString();

    document.getElementById('rocket_sum').textContent = `${rocket_sum}`;
    document.getElementById('rocket_material_charcoal').textContent = `${rocket_material_charcoal}`;
    document.getElementById('rocket_material_gunpowder').textContent = `${rocket_material_gunpowder}`;
    document.getElementById('rocket_material_metal').textContent = `${rocket_material_metal}`;
    document.getElementById('rocket_material_fuel').textContent = `${rocket_material_fuel}`;
    document.getElementById('rocket_material_pipe').textContent = `${rocket_material_pipe}`;

    // expplo ammo
    const one_explo_ammo_sulfur_ges = 50;
    const one_explo_ammo_sulfur = 10
    const one_explo_ammo_charcoal = 60;
    const one_explo_ammo_gunpowder = 20;
    const one_explo_ammo_metal = 10;

    const explo_ammo_sum = Math.floor(sulfur / one_explo_ammo_sulfur_ges);
    const explo_ammo_material_sulfur = (one_explo_ammo_sulfur * explo_ammo_sum).toLocaleString();
    const explo_ammo_material_charcoal = (one_explo_ammo_charcoal * explo_ammo_sum).toLocaleString();
    const explo_ammo_material_gunpowder = (one_explo_ammo_gunpowder * explo_ammo_sum).toLocaleString();
    const explo_ammo_material_metal = (one_explo_ammo_metal * explo_ammo_sum).toLocaleString();

    document.getElementById('explo_ammo_sum').textContent = `${explo_ammo_sum}`;
    document.getElementById('explo_ammo_material_sulfur').textContent = `${explo_ammo_material_sulfur}`;
    document.getElementById('explo_ammo_material_charcoal').textContent = `${explo_ammo_material_charcoal}`;
    document.getElementById('explo_ammo_material_gunpowder').textContent = `${explo_ammo_material_gunpowder}`;
    document.getElementById('explo_ammo_material_metal').textContent = `${explo_ammo_material_metal}`;

    // C4
    const one_c4_sulfur_ges = 2200;
    const one_c4_sulfur = 200
    const one_c4_charcoal = 3000;
    const one_c4_gunpowder = 1000;
    const one_c4_metal = 200;
    const one_c4_fuel = 60;
    const one_c4_tech_trash = 2;

    const c4_sum = Math.floor(sulfur_add_explo / one_c4_sulfur_ges);
    const c4_material_sulfur = (one_c4_sulfur * c4_sum).toLocaleString();
    const c4_material_charcoal = (one_c4_charcoal * c4_sum).toLocaleString();
    const c4_material_gunpowder = (one_c4_gunpowder * c4_sum).toLocaleString();
    const c4_material_metal = (one_c4_metal * c4_sum).toLocaleString();
    const c4_material_fuel = (one_c4_fuel * c4_sum).toLocaleString();
    const c4_material_tech_trash = (one_c4_tech_trash * c4_sum).toLocaleString();

    document.getElementById('c4_sum').textContent = `${c4_sum}`;
    document.getElementById('c4_material_sulfur').textContent = `${c4_material_sulfur}`;
    document.getElementById('c4_material_charcoal').textContent = `${c4_material_charcoal}`;
    document.getElementById('c4_material_gunpowder').textContent = `${c4_material_gunpowder}`;
    document.getElementById('c4_material_metal').textContent = `${c4_material_metal}`;
    document.getElementById('c4_material_fuel').textContent = `${c4_material_fuel}`;
    document.getElementById('c4_material_tech_trash').textContent = `${c4_material_tech_trash}`;

    // High Velocity Rocket
    const one_hv_sulfur_ges = 200;
    const one_hv_charcoal = 300;
    const one_hv_gunpowder = 100;
    const one_hv_pipe = 2;
    
    const hv_sum = Math.floor(sulfur / one_hv_sulfur_ges);
    const hv_material_charcoal = (one_hv_charcoal * hv_sum).toLocaleString();
    const hv_material_gunpowder = (one_hv_gunpowder * hv_sum).toLocaleString();
    const hv_material_pipe = (one_hv_pipe * hv_sum).toLocaleString();
    
    document.getElementById('hv_sum').textContent = `${hv_sum}`;
    document.getElementById('hv_material_charcoal').textContent = `${hv_material_charcoal}`;
    document.getElementById('hv_material_gunpowder').textContent = `${hv_material_gunpowder}`;
    document.getElementById('hv_material_pipe').textContent = `${hv_material_pipe}`;

    // Incendiary Rocket
        const one_ir_sulfur_ges = 610;
        const one_ir_sulfur = 10
        const one_ir_charcoal = 900;
        const one_ir_gunpowder = 300;
        const one_ir_metal = 10;
        const one_ir_fuel = 3;
        const one_ir_pipe = 2;

    const ir_sum = Math.floor(sulfur_add_explo / one_ir_sulfur_ges);
    const ir_material_sulfur = (one_ir_sulfur * ir_sum).toLocaleString();
    const ir_material_charcoal = (one_ir_charcoal * ir_sum).toLocaleString();
    const ir_material_gunpowder = (one_ir_gunpowder * ir_sum).toLocaleString();
    const ir_material_metal = (one_ir_metal * ir_sum).toLocaleString();
    const ir_material_fuel = (one_ir_fuel * ir_sum).toLocaleString();
    const ir_material_pipe = (one_ir_pipe * ir_sum).toLocaleString();

    document.getElementById('ir_sum').textContent = `${ir_sum}`;
    document.getElementById('ir_material_sulfur').textContent = `${ir_material_sulfur}`;
    document.getElementById('ir_material_charcoal').textContent = `${ir_material_charcoal}`;
    document.getElementById('ir_material_gunpowder').textContent = `${ir_material_gunpowder}`;
    document.getElementById('ir_material_metal').textContent = `${ir_material_metal}`;
    document.getElementById('ir_material_fuel').textContent = `${ir_material_fuel}`;
    document.getElementById('ir_material_pipe').textContent = `${ir_material_pipe}`;
}
