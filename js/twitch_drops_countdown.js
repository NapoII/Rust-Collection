// Funktion, um den Countdown anzuzeigen
function startCountdown() {
    // Ziel-Datum und Zeit festlegen
    const targetDate = new Date('2023-09-15T01:00:00+02:00'); // 15. September 2023 um 01:00 MESZ

    // Alle 1 Sekunde den Countdown aktualisieren
    const countdownInterval = setInterval(function () {
        const currentDate = new Date();
        const timeDifference = targetDate - currentDate;

        // Überprüfen, ob das Ziel-Datum erreicht wurde
        if (timeDifference <= 0) {
            document.getElementById('countdown_twitch').textContent = 'Event has started!';
            clearInterval(countdownInterval); // Countdown beenden
        } else {
            // Countdown aktualisieren
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            const countdownText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
            document.getElementById('countdown_twitch').textContent = countdownText;
        }
    }, 1000); // Alle 1 Sekunde aktualisieren
}

// Countdown starten, wenn die Seite geladen ist
window.addEventListener('load', startCountdown);