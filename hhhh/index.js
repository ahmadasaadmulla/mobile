// Live Clock
function updateClock() {
  const now = new Date();
  document.getElementById("clock").textContent = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();

// Dark Mode Toggle
function toggleTheme() {
  document.body.classList.toggle("dark");
}

// Form Submit
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("سوپاس بۆ پەیوەندیکردن!");
});
