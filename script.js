// Moving NO button
function moveButton() {
  const btn = document.getElementById("noBtn");
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);
  btn.style.left = `${x}px`;
  btn.style.top = `${y}px`;
}

// Heart click popup
function heartClicked() {
  alert("thankyou! my heart was racing for a moment there! <3");
  window.location.href = "love.html";
}
