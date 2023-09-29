// Function to check whether the cookie acceptance status is already set
function isCookieAccepted() {
    return localStorage.getItem('cookieAccepted') === 'true';
  }
  
  // Function to display the pop-up if the cookie acceptance status is not set
  function showCookiePopup() {
    if (!isCookieAccepted()) {
      document.getElementById('cookie-popup').style.display = 'block';
    }
  }
  
  // Function to hide the pop-up and set the cookie acceptance status
  function acceptCookie() {
    document.getElementById('cookie-popup').style.display = 'none';
    localStorage.setItem('cookieAccepted', 'true');
  }
  
  // Event-Listener für den OK-Button
  document.getElementById('accept-cookie').addEventListener('click', acceptCookie);
  
  // Initialisation: show the pop-up if the cookie acceptance status is not set
  showCookiePopup();