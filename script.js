function startConfetti() {
    // Anzahl und Dauer des Konfetti-Effekts
    const duration = 3 * 1000; // Dauer von 3 Sekunden
    const animationEnd = Date.now() + duration;
  
    const randomInRange = (min, max) => Math.random() * (max - min) + min;
  
    // Konfetti-Animation
    const confettiInterval = setInterval(() => {
      confetti({
        particleCount: 7,
        startVelocity: 30,
        spread: 360,
        origin: {
          x: randomInRange(0.1, 0.9), // zufälliger Startpunkt entlang der X-Achse
          y: randomInRange(0.2, 0.6)  // zufälliger Startpunkt entlang der Y-Achse
        },
        colors: ['#00bcd4', '#4facfe', '#00f2fe', '#b3e5fc', '#81d4fa'] // Blautöne für das Farbthema
      });
  
      // Stoppt das Konfetti nach Ablauf der Dauer
      if (Date.now() > animationEnd) clearInterval(confettiInterval);
    }, 250);
  }
  
  // Startet Konfetti beim Laden der Seite
  window.onload = startConfetti;