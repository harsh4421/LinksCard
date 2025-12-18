// CARD HOVER EFFECT
const cards = Array.from(document.querySelectorAll(".card"));
const cardsContainer = document.querySelector("#cards");

cardsContainer.addEventListener("mousemove", (e) => {
  for (const card of cards) {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  }
});

// LIVE GITHUB FOLLOWERS
fetch("https://api.github.com/users/harsh4421")
  .then(response => response.json())
  .then(data => {
    document.getElementById("github-followers").innerText =
      `Followers: ${data.followers}`;
  })
  .catch(() => {
    document.getElementById("github-followers").innerText =
      "Followers: N/A";
  });
