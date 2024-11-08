// script.js

// Konfetti beim Laden der Seite auslösen
function startConfetti() {
    const duration = 5 * 1000; // Dauer des Effekts in Millisekunden
    const end = Date.now() + duration;
  
    (function frame() {
      // Konfetti-Parameter
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 }
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 }
      });
  
      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }
  
  // Konfetti bei Seitenaufruf starten
  window.onload = startConfetti;
