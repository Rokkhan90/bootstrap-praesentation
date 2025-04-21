// =====================
// Navigation: Aktiver Link hervorheben
// =====================

// Diese Funktion wird ausgeführt, sobald der gesamte HTML-Inhalt geladen ist
document.addEventListener("DOMContentLoaded", () => {
    const currentPath = window.location.pathname.split("/").pop(); // Holt den Dateinamen aus der URL
    const navLinks = document.querySelectorAll(".nav-link"); // Alle Navigationslinks werden ausgewählt
  
    // Überprüft jeden Link in der Navigation
    // und fügt die Klasse "active" hinzu, wenn der Link mit dem aktuellen Pfad übereinstimmt
    navLinks.forEach(link => {
      if (link.getAttribute("href") === currentPath) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });
  
  
  // =====================
  // Beispiel 1: Button-Vorschau
  // =====================
  
  // Diese Funktion wird ausgeführt, sobald der HTML-Inhalt geladen ist
  document.addEventListener("DOMContentLoaded", () => {
    const previewBtn = document.getElementById("preview-btn"); // Der Button, der als Vorschau angezeigt wird
    const textInput = document.getElementById("btn-text"); // Eingabefeld für den Button-Text
    const colorSelect = document.getElementById("btn-color"); // Dropdown-Menü für die Button-Farbe
    const updateBtn = document.getElementById("update-btn"); // Button zum Anwenden der Änderungen
    const htmlOutput = document.getElementById("html-output"); // Textfeld zur Anzeige des HTML-Codes
  
    // Überprüft, ob alle Elemente vorhanden sind, bevor etwas gemacht wird
    if (previewBtn && textInput && colorSelect && updateBtn && htmlOutput) {
      // Diese Funktion aktualisiert den Vorschau-Button und den HTML-Code darunter
      function updateButton() {
        const newText = textInput.value || "Vorschau Button"; // Standardtext, falls kein Text eingegeben wurde
        const newColor = colorSelect.value; // Holt die ausgewählte Farbe aus dem Dropdown
  
        previewBtn.className = `btn btn-${newColor}`; // Setzt die neue Bootstrap-Klasse (z. B. btn-primary)
        previewBtn.textContent = newText; // Aktualisiert den Text im Button
  
        // Zeigt den aktuellen HTML-Code des Buttons im Textfeld an
        htmlOutput.value = `<button class="btn btn-${newColor}">${newText}</button>`;
      }
  
      updateBtn.addEventListener("click", updateButton); // Klick auf „Aktualisieren“ löst die Funktion aus
      updateButton(); // Ruft die Funktion direkt beim Laden der Seite auf
    }
  });
  
  
  // =====================
  // Beispiel 2: Alert-Vorschau
  // =====================
  
  // Diese Funktion wird ebenfalls beim Laden der Seite ausgeführt
  document.addEventListener("DOMContentLoaded", () => {
    const alertPreview = document.getElementById("preview-alert"); // Vorschau-Feld für den Alert
    const alertTextInput = document.getElementById("alert-text"); // Eingabefeld für den Text im Alert
    const alertColorSelect = document.getElementById("alert-color"); // Dropdown für die Alert-Farbe
    const alertUpdateBtn = document.getElementById("update-alert-btn"); // Button zum Aktualisieren des Alerts
    const alertHtmlOutput = document.getElementById("alert-html-output"); // Textarea zur Anzeige des generierten Codes
  
    // Nur ausführen, wenn alle benötigten Elemente vorhanden sind
    if (alertPreview && alertTextInput && alertColorSelect && alertUpdateBtn && alertHtmlOutput) {
      // Diese Funktion aktualisiert den Alert und zeigt den HTML-Code dazu an
      function updateAlert() {
        const text = alertTextInput.value || "Dies ist ein Hinweis!"; // Standardtext für den Alert
        const color = alertColorSelect.value; // Ausgewählte Farbe wird übernommen
  
        alertPreview.className = `alert alert-${color}`; // Setzt die entsprechende Bootstrap-Klasse
        alertPreview.textContent = text; // Setzt den Text im Alert
  
        // Zeigt den passenden HTML-Code in der Textarea an
        alertHtmlOutput.value = `<div class="alert alert-${color}" role="alert">${text}</div>`;
      }
  
      alertUpdateBtn.addEventListener("click", updateAlert); // Klick auf „Aktualisieren“ führt die Funktion aus
      updateAlert(); // Führt die Funktion direkt beim Laden aus
    }
  });
  