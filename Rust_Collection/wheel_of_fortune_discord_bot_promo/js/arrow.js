// scripts.js

// JSON-Daten für den Button und den Text
var buttonData = {
    imagePath: "/Rust_Collection/wheel_of_fortune_discord_bot_promo/img/more_info.png",
    buttonWidth: "100px", // Breite des Buttons
    buttonHeight: "100px" // Höhe des Buttons
};

// Variable zur Überprüfung, ob das Overlay sichtbar ist
var overlayVisible = false;

// Funktion zum Hinzufügen des Buttons zur Webseite
function addButton() {
    const button = document.createElement("img");
    button.src = buttonData.imagePath;
    button.alt = "Button";
    button.id = "overlayButton";
    Object.assign(button.style, {
        cursor: "pointer",
        position: "fixed",
        bottom: "1px",
        left: "50%",
        transform: "translateX(-50%)", // Zentrierung des Buttons
        width: buttonData.buttonWidth, // Festlegen der Breite des Buttons
        height: buttonData.buttonHeight, // Festlegen der Höhe des Buttons
        zIndex: "9999"
    });
    button.addEventListener("click", toggleOverlay);
    document.body.appendChild(button);
}

// Funktion zum Anzeigen oder Ausblenden des Overlays
function toggleOverlay() {
    overlayVisible ? hideOverlay() : showOverlay();
}


// Funktion zum Anzeigen des Overlays mit dem Text
function showOverlay() {
    const overlay = document.createElement("div");
    overlay.id = "overlay";
    Object.assign(overlay.style, {
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        zIndex: "9998",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    });

    const textContainer = document.createElement("div");
    textContainer.id = "textContainer";
    Object.assign(textContainer.style, {
        color: "#fff",
        padding: "20px",
        borderRadius: "10px",
        backgroundColor: "#222",
        maxWidth: "90%",
        textAlign: "left",
        boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.5)",
    });

    textContainer.innerHTML = `
        <h1 style="font-size: 2.5em; margin-bottom: 20px; font-family: 'Helvetica Neue', Arial, sans-serif; color: #ff6f61;">Introducing our Discord Bot: Wheel of Fortune</h1>
        <p style="font-size: 1.2em; margin-bottom: 20px; font-family: 'Helvetica Neue', Arial, sans-serif;">Our bot brings the excitement of Rust's Wheel of Fortune right to your Discord server.</p>
        <h3 style= font-family: 'Helvetica Neue', Arial, sans-serif;" >Here's what you need to know:</h3>
        <ul style="list-style-type: none; padding: 0; margin-bottom: 20px;">
            <li style="font-size: 1.1em; margin-bottom: 10px; font-family: 'Helvetica Neue', Arial, sans-serif;">Just like in the game, players can bet on numbers 1, 3, 5, 10, and 20 using points.<br>Each player starts with 500 points and can gamble them to climb the scoreboard.<br>Additionally, active participation on Discord can earn you extra points.</li>
            <li style="font-size: 1.1em; margin-bottom: 10px; font-family: 'Helvetica Neue', Arial, sans-serif;">You can enjoy the game on our Discord server.<br>Alternatively, if you want to bring the fun to your own community, you can invite the bot to your Discord server.<br>It's a great way to engage your Rust community beyond just discussing server wipes.<br>Plus, you can even set up rewards for active participation on your server!</li>
        </ul>
        <p style="font-size: 1.2em; margin-bottom: 20px; font-family: 'Helvetica Neue', Arial, sans-serif;">To get started, simply invite the bot to your Discord server using the Invite <a href="https://discord.com/oauth2/authorize?client_id=1208952886000881714&permissions=17594333621265&scope=bot" style="color: #ff6f61; text-decoration: underline;">[link]</a>,</p>
        <p style="font-size: 1.2em; margin-bottom: 20px; font-family: 'Helvetica Neue', Arial, sans-serif;">then execute the command <code style="background-color: #555; color: #fff; padding: 2px 5px; border-radius: 3px; font-family: 'Courier New', Courier, monospace;">/wof_start</code> and follow the instructions.<br>Let the games begin!</p>
    `;

    overlay.appendChild(textContainer);
    document.body.appendChild(overlay);
    overlayVisible = true;

    // Event-Listener für das 'keydown'-Event hinzufügen
    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape") {
            hideOverlay();
        }
    });
}


// Funktion zum Ausblenden des Overlays
function hideOverlay() {
    var overlay = document.getElementById("overlay");
    if (overlay) {
        overlay.parentNode.removeChild(overlay);
        overlayVisible = false;
    }
}

// Initialisierung der Funktion


// Initialisierung der Funktionen beim Laden der Seite
window.onload = function() {
    addButton();
};
