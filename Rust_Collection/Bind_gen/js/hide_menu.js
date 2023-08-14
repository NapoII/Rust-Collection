const numInputFields = [
    document.getElementById("item_num_2"),
    document.getElementById("item_num_3"),
    document.getElementById("item_num_4"),
    document.getElementById("item_num_5"),
    document.getElementById("item_num_6"),
    document.getElementById("item_num_7"),
    document.getElementById("item_num_8")
  ];

  function updateVisibility() {
    for (let i = 0; i < numInputFields.length; i++) {
      const currentField = numInputFields[i];
      const currentRow = currentField.closest("tr");
      const nextRow = currentRow.nextElementSibling;

      if (nextRow) {
        nextRow.style.display = currentField.value.trim() !== "" ? "table-row" : "none";
      }
    }
  }

  numInputFields.forEach(field => {
    field.addEventListener("input", updateVisibility);
  });

  // Initialisierung der Sichtbarkeit beim Laden der Seite
  updateVisibility();