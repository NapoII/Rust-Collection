/**
 * --> upgrade_calc.js
 * 
 * 🌟 Creator: Napo_II
 * 
 * 🙌 Feel free to support me by donating as a token of appreciation:
 * 👉 https://ko-fi.com/napo_ii
 * 
 * 📜 This project is licensed under the GNU General Public License Version 3 (GNU GPL 3).
 * ℹ️ More details available at:
 * 🔗 https://github.com/NapoII/Rust-Collection
 * 
 * 💬 Join our Discord server for discussions and updates:
 * 🚀 https://discord.gg/Gd23KJ76Tq
 */

// 🚀 Actual JavaScript code starts here.
// ...

// Warte, bis das Dokument vollständig geladen ist
document.addEventListener("DOMContentLoaded", function () {
  // Referenziere die Eingabefelder
  var foundationInput = document.getElementById("foundation");
  var foundationTriangelInput = document.getElementById("foundation_triangel");
  var florInput = document.getElementById("flor");
  var flor_triangelInput = document.getElementById("flor_triangel");
  var wallInput = document.getElementById("wall");
  var doorwayInput = document.getElementById("doorway");
  var windowInput = document.getElementById("window");
  var wallframeInput = document.getElementById("wallframe");

  // Referenziere die Ausgabefelder für Holz, Stein, Metall und HQM
  var woodOutput = document.getElementById("output_wood");
  var stoneOutput = document.getElementById("output_stone");
  var metalOutput = document.getElementById("output_metal");
  var hqmOutput = document.getElementById("output_hqm");

  // Funktion zur Berechnung und Aktualisierung der Ergebnisse
  function calculateAndDisplayResults() {
    // Hole die aktuellen Werte aus den Eingabefeldern
    var foundationValue = parseFloat(foundationInput.value) || 0;
    var foundationTriangelValue = parseFloat(foundationTriangelInput.value) || 0;
    var florValue = parseFloat(florInput.value) || 0;
    var florTriangelValue = parseFloat(flor_triangelInput.value) || 0;
    var wallValue = parseFloat(wallInput.value) || 0;
    var doorwayValue = parseFloat(doorwayInput.value) || 0;
    var windowValue = parseFloat(windowInput.value) || 0;
    var wallframeValue = parseFloat(wallframeInput.value) || 0;

    // Benutzerdefinierte Faktoren für jeden Input
    var woodFactor = {
      foundation: 200,
      foundation_triangel: 100,
      flor: 100,
      flor_triangel: 50,
      wall: 200,
      doorway: 140,
      window: 140,
      wallframe: 100
    };

    var stoneFactor = {
      foundation: 300,
      foundation_triangel: 150,
      flor: 150,
      flor_triangel: 75,
      wall: 300,
      doorway: 210,
      window: 210,
      wallframe: 150
    };

    var metalFactor = {
      foundation: 200,
      foundation_triangel: 100,
      flor: 100,
      flor_triangel: 50,
      wall: 200,
      doorway: 140,
      window: 140,
      wallframe: 100
    };

    var hqmFactor = {
      foundation: 25,
      foundation_triangel: 13,
      flor: 13,
      flor_triangel: 7,
      wall: 25,
      doorway: 18,
      window: 18,
      wallframe: 13
    };

    // Berechne die Materialkosten
    var totalWood = (
      foundationValue * woodFactor.foundation +
      foundationTriangelValue * woodFactor.foundation_triangel +
      florValue * woodFactor.flor +
      florTriangelValue * woodFactor.flor_triangel +
      wallValue * woodFactor.wall +
      doorwayValue * woodFactor.doorway +
      windowValue * woodFactor.window +
      wallframeValue * woodFactor.wallframe
    );

    var totalStone = (
      foundationValue * stoneFactor.foundation +
      foundationTriangelValue * stoneFactor.foundation_triangel +
      florValue * stoneFactor.flor +
      florTriangelValue * stoneFactor.flor_triangel +
      wallValue * stoneFactor.wall +
      doorwayValue * stoneFactor.doorway +
      windowValue * stoneFactor.window +
      wallframeValue * stoneFactor.wallframe
    );

    var totalMetal = (
      foundationValue * metalFactor.foundation +
      foundationTriangelValue * metalFactor.foundation_triangel +
      florValue * metalFactor.flor +
      florTriangelValue * metalFactor.flor_triangel +
      wallValue * metalFactor.wall +
      doorwayValue * metalFactor.doorway +
      windowValue * metalFactor.window +
      wallframeValue * metalFactor.wallframe
    );

    var totalHQM = (
      foundationValue * hqmFactor.foundation +
      foundationTriangelValue * hqmFactor.foundation_triangel +
      florValue * hqmFactor.flor +
      florTriangelValue * hqmFactor.flor_triangel +
      wallValue * hqmFactor.wall +
      doorwayValue * hqmFactor.doorway +
      windowValue * hqmFactor.window +
      wallframeValue * hqmFactor.wallframe
    );

    // Formatiere die Ausgabefelder ohne Dezimalstellen und mit Tausendertrennzeichen
    woodOutput.textContent = totalWood.toLocaleString();
    stoneOutput.textContent = totalStone.toLocaleString();
    metalOutput.textContent = totalMetal.toLocaleString();
    hqmOutput.textContent = totalHQM.toLocaleString();
  }

  // Füge Event-Listener für die Eingabefelder hinzu
  foundationInput.addEventListener("input", calculateAndDisplayResults);
  foundationTriangelInput.addEventListener("input", calculateAndDisplayResults);
  florInput.addEventListener("input", calculateAndDisplayResults);
  flor_triangelInput.addEventListener("input", calculateAndDisplayResults);
  wallInput.addEventListener("input", calculateAndDisplayResults);
  doorwayInput.addEventListener("input", calculateAndDisplayResults);
  windowInput.addEventListener("input", calculateAndDisplayResults);
  wallframeInput.addEventListener("input", calculateAndDisplayResults);
});