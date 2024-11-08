// script.js

// Countdown bis zum Party-Datum
const countdownDate = new Date("2024-12-31T19:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  if (distance >= 0) {
    document.getElementById("days").innerText = Math.floor(distance / (1000 * 60 * 60 * 24));
    document.getElementById("hours").innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById("minutes").innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById("seconds").innerText = Math.floor((distance % (1000 * 60)) / 1000);
  } else {
    document.getElementById("countdown").innerHTML = "<h2>Die Party hat begonnen!</h2>";
  }
}

setInterval(updateCountdown, 1000);

// Gästebuchfunktion zum Hinzufügen von Nachrichten
function addMessage() {
  const message = document.getElementById("message").value;
  if (message.trim()) {
    const messageElement = document.createElement("p");
    messageElement.innerText = message;
    document.getElementById("messages").appendChild(messageElement);
    document.getElementById("message").value = "";
  }
}
