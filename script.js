// Create sparkles randomly
const sparkleBox = document.getElementById("sparkles");

for (let i = 0; i < 45; i++) {
  let s = document.createElement("span");

  s.style.left = Math.random() * 100 + "%";
  s.style.animationDuration = (Math.random() * 4 + 3) + "s";
  s.style.animationDelay = (Math.random() * 3) + "s";
  s.style.opacity = Math.random();
  s.style.transform = `scale(${Math.random() + 0.4})`;

  sparkleBox.appendChild(s);
}

// Button click event
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  document.getElementById("para").style.display = "block";
  document.getElementById("heart").style.display = "block";
});
