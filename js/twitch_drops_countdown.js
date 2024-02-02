/**
 * Function to display the countdown
 */
function startCountdown() {
    // Read out the target date and time from the text file.
    fetch('countdown_data.txt')
        .then(response => response.text())
        .then(data => {
            const lines = data.split('\n');

            let futureDateFound = false; // Flag, um festzustellen, ob ein zukünftiges Datum gefunden wurde

            // Durchlaufe die Zeilen der Textdatei
            for (let i = 0; i < lines.length; i++) {
                const line = lines[i].trim();

                // Überspringe leere Zeilen
                if (line === '') {
                    continue;
                }

                // Trenne das Datum und die zugehörige Nachricht
                const [dateString, message] = line.split(',');

                // Konvertiere das Datum in ein Date-Objekt
                const targetDate = new Date(dateString);
                

                // Überprüfe, ob das Datum in der Zukunft liegt
                if (targetDate > new Date()) {
                    // Starte den Countdown für dieses Datum und die Nachricht anzeigen
                    startIndividualCountdown(targetDate, message);
                    futureDateFound = true;
                    break; // Nur den nächsten Countdown starten
                }
            }

            if (!futureDateFound) {
                // Kein zukünftiges Datum gefunden, zeige die Standardnachricht
                document.getElementById('countdown_twitch').textContent = 'Pick up your Free Rust Skins at Events';
            }
        })
        .catch(error => {
            console.error('Fehler beim Laden der Countdown-Daten:', error);
            // Bei einem Fehler die Standardnachricht anzeigen
            document.getElementById('countdown_twitch').textContent = 'Pick up your Free Rust Skins at Events';
        });
}

// Countdown starten, wenn die Seite geladen ist
window.addEventListener('load', startCountdown);

/**
 * Funktion, um einen individuellen Countdown zu starten
 */
function startIndividualCountdown(targetDate, message) {
    const countdownElement = document.getElementById('countdown_twitch');

    const countdownInterval = setInterval(function () {
        const currentDate = new Date();
        const timeDifference = targetDate - currentDate;

        // Überprüfen, ob das Ziel-Datum erreicht wurde
        if (timeDifference <= 0) {
            countdownElement.innerHTML = 'The Event Starts!';
            clearInterval(countdownInterval); // Countdown beenden
        } else {
            // Erstelle das Countdown-Textformat mit Nachricht über dem Datum
            const countdownText = `${message}<p>${targetDate.toDateString()}<hr>${formatCountdown(timeDifference)}`;
            countdownElement.innerHTML = countdownText;
        }
    }, 1000); // Alle 1 Sekunde aktualisieren
}

// Funktion zur Formatierung des Countdowns
function formatCountdown(timeDifference) {
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return `${days} days<br>${hours} hours<br>${minutes} minutes`;
}
