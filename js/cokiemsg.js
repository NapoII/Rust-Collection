// Funktion zum Überprüfen, ob der Cookie-Akzeptanz-Status bereits gesetzt ist
function isCookieAccepted() {
    return localStorage.getItem('cookieAccepted') === 'true';
  }
  
  // Funktion zum Anzeigen des Popups, wenn der Cookie-Akzeptanz-Status nicht gesetzt ist
  function showCookiePopup() {
    if (!isCookieAccepted()) {
      document.getElementById('cookie-popup').style.display = 'block';
    }
  }
  
  // Funktion zum Ausblenden des Popups und zum Setzen des Cookie-Akzeptanz-Status
  function acceptCookie() {
    document.getElementById('cookie-popup').style.display = 'none';
    localStorage.setItem('cookieAccepted', 'true');
  }
  
  // Event-Listener für den OK-Button
  document.getElementById('accept-cookie').addEventListener('click', acceptCookie);
  
  // Initialisierung: Zeige das Popup, wenn der Cookie-Akzeptanz-Status nicht gesetzt ist
  showCookiePopup();