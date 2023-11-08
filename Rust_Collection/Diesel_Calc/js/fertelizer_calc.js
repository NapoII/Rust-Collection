function calculate_fert() {
    const inputValue_fert = parseFloat(document.getElementById("inputValue_fert").value);
    const inputValue_dung = parseFloat(document.getElementById("inputValue_dung").value);

    // Giant Excavator
    const fert_from_dung = inputValue_dung * 10;
    const fert = fert_from_dung + inputValue_fert;
    const scrap = (3/2)*fert;
    const scrap_min = (27/55)*60
    const fert_sell_min = (3/2)*scrap_min
    const sell_time = fert/fert_sell_min;
    

    // Generate the text for "copy-text"
    const s_text = `From ${fert.toLocaleString()} Fertelizer, you get in estimated ${sell_time.toLocaleString(undefined, { maximumFractionDigits: 0 })} min ${scrap.toLocaleString(undefined, {        maximumFractionDigits: 0
      })} Scrap `;
      
    // Display the text in respective divs
    document.getElementById("copy-text_s").textContent = s_text;

// Display the results in respective divs
document.getElementById("scrape_result").innerHTML = `
<h2>Benditcamp Shop</h2>
<div class="calculation-item">
  <img src="img/fertilizer.png" alt="Fertilizer">
  <span>&nbsp;${fert.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
</div>
<div class="calculation-item">
  <img src="img/scrap.png" alt="Scrap">
  <span>&nbsp;${scrap.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
</div>
<div class="calculation-item">
  <img src="img/time.png" alt="Time (min)">
  <span>&nbsp;${sell_time.toLocaleString(undefined, { maximumFractionDigits: 0 })} min</span>
</div>
`;


  }
  document.getElementById("copy-text_s").addEventListener("click", function () {
    copyToClipboard(document.getElementById("copy-text_s").textContent);
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


  calculate_fert();