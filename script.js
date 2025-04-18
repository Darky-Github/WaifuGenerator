const form = document.getElementById('waifuForm');
const waifuCard = document.getElementById('waifuCard');
const waifuName = document.getElementById('waifuName');
const canvas = document.getElementById('waifuCanvas');
const ctx = canvas.getContext('2d');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value || "Unnamed Waifu";
  const hair = document.getElementById('hair').value;
  const eyes = document.getElementById('eyes').value;
  const mood = document.getElementById('mood').value;
  const clothes = document.getElementById('clothes').value;
  const place = document.getElementById('place').value;

  waifuName.textContent = name;

  // Draw on canvas (for now, just text)
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#fff";
  ctx.font = "16px monospace";
  ctx.fillText(`Name: ${name}`, 10, 30);
  ctx.fillText(`Hair: ${hair}`, 10, 60);
  ctx.fillText(`Eyes: ${eyes}`, 10, 90);
  ctx.fillText(`Mood: ${mood}`, 10, 120);
  ctx.fillText(`Clothes: ${clothes}`, 10, 150);
  ctx.fillText(`Place: ${place}`, 10, 180);

  waifuCard.classList.remove("hidden");
});

function downloadImage(type) {
  const link = document.createElement('a');
  link.download = `waifu_${Date.now()}.${type}`;
  link.href = canvas.toDataURL(`image/${type}`);
  link.click();
}

function redirectToNSFW() {
  if (confirm("This section is NSFW. Are you 18+?")) {
    window.location.href = "nsfw.html";
  } else {
    alert("Access denied.");
  }
}

function useAPIFallback() {
  alert("API fallback not set up yet.");
}
