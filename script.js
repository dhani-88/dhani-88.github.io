const linksData = [
  { name: "My GitHub", url: "https://github.com/dhani-88" },
  { name: "My Portfolio", url: "https://your-portfolio.com" }
];

function renderLinks() {
  const linksDiv = document.getElementById('links');
  linksDiv.innerHTML = '';
  linksData.forEach((link) => {
    linksDiv.innerHTML += `
      <a class="link-btn" href="${link.url}" target="_blank">${link.name}</a>
    `;
  });
}

function addLink() {
  const name = prompt("Enter button name:");
  const url = prompt("Enter link URL (including https://):");
  if (name && url) {
    linksData.push({ name, url });
    renderLinks();
  }
}

renderLinks();