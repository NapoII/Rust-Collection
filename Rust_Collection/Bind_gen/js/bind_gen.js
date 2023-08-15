
document.addEventListener("DOMContentLoaded", function() {
  const inputFields = document.querySelectorAll('input');

  inputFields.forEach(input => {
    input.addEventListener("input", generateText);
  });
});



function generateText() {
  const shopAdBind = document.getElementById('shop_ad_bind').value;
  const shopName = document.getElementById('shop_name').value;
  const shopPos = document.getElementById('shop_pos').value;
  const shopAdSellText = document.getElementById('shop_ad_sell_text').value;
  const itemNum1 = document.getElementById('item_num_1').value;
  const itemNum2 = document.getElementById('item_num_2').value;


  const selectedValue1 = selectedValues['dropdown-content-page1']; // Hier 'dropdownId1' durch die tatsächliche ID des Dropdown-Menüs ersetzen
  const selectedValue2 = selectedValues['dropdown-content-page2']; // Hier 'dropdownId2' durch die tatsächliche ID des Dropdown-Menüs ersetzen
 
    // Optional values with default as "none"
    const itemNum3 = document.getElementById('item_num_3').value || 'none';
    const itemNum4 = document.getElementById('item_num_4').value || 'none';
    const itemNum5 = document.getElementById('item_num_5').value || 'none';
    const itemNum6 = document.getElementById('item_num_6').value || 'none';
    const itemNum7 = document.getElementById('item_num_7').value || 'none';
    const itemNum8 = document.getElementById('item_num_8').value || 'none';
  
    // Similarly, for optional selected values
    const selectedValue3 = selectedValues['dropdown-content-page3'] || 'none';
    const selectedValue4 = selectedValues['dropdown-content-page4'] || 'none';
    const selectedValue5 = selectedValues['dropdown-content-page5'] || 'none';
    const selectedValue6 = selectedValues['dropdown-content-page6'] || 'none';
    const selectedValue7 = selectedValues['dropdown-content-page7'] || 'none';
    const selectedValue8 = selectedValues['dropdown-content-page8'] || 'none';
  

    let outputText = `bind ${shopAdBind} chat.say ":vending.machine: ${shopName} @${shopPos} - ${shopAdSellText} | ${itemNum1} :${selectedValue1}: for ${itemNum2}:${selectedValue2}:`;

    // Adding optional items
    if (itemNum3 !== 'none' || selectedValue3 !== 'none') {
      outputText += ` | ${itemNum3}:${selectedValue3}:`;
    }
    if (itemNum4 !== 'none' || selectedValue4 !== 'none') {
      outputText += ` | ${itemNum4}:${selectedValue4}:`;
    }
    if (itemNum5 !== 'none' || selectedValue5 !== 'none') {
      outputText += ` | ${itemNum5}:${selectedValue5}:`;
    }
    if (itemNum6 !== 'none' || selectedValue6 !== 'none') {
      outputText += ` | ${itemNum6}:${selectedValue6}:`;
    }
    if (itemNum7 !== 'none' || selectedValue7 !== 'none') {
      outputText += ` | ${itemNum7}:${selectedValue7}:`;
    }
    if (itemNum8 !== 'none' || selectedValue8 !== 'none') {
      outputText += ` | ${itemNum8}:${selectedValue8}:`;
    }
  
    outputText += '"';
    console.log(outputText);
    // Finde das Element im HTML, in dem du den 'outputText' anzeigen möchtest.
    var outputTextContainer = document.getElementById("bind_shop_1");

    // Setze den generierten Text als HTML-Inhalt des Containers.
    outputTextContainer.innerHTML = outputText;
      }
  
  function toggleDropdown(dropdownId) {
    const dropdownContent = document.getElementById(dropdownId);
    dropdownContent.classList.toggle("show");
  }

  document.addEventListener("DOMContentLoaded", function() {
      var bindTextElement = document.getElementById("bind_shop_1");

      bindTextElement.addEventListener("click", function() {
        var bindText = bindTextElement.innerText;

        var textArea = document.createElement("textarea");
        textArea.value = bindText;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);

        alert("Text wurde in die Zwischenablage kopiert: " + bindText);
      });
    });