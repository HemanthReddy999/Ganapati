const yearsGrid = document.getElementById("yearsGrid");
const devoteesSection = document.getElementById("devoteesSection");
const selectedYear = document.getElementById("selectedYear");
const peopleList = document.getElementById("peopleList");
const countBadge = document.getElementById("countBadge");
const backButton = document.getElementById("backButton");

function renderYears() {
  yearsGrid.innerHTML = "";

  const years = Object.keys(peopleByYear).sort((a, b) => Number(a) - Number(b));

  years.forEach((year, index) => {
    const names = Array.isArray(peopleByYear[year]) ? peopleByYear[year] : [];

    const card = document.createElement("button");
    card.type = "button";
    card.className = "year-card";
    card.style.animationDelay = `${index * 45}ms`;

    card.innerHTML = `
      <span class="year">${escapeHtml(year)}</span>
      <span class="count">${names.length} ${names.length === 1 ? "devotee" : "devotees"}</span>
    `;

    card.addEventListener("click", () => showYear(year));
    yearsGrid.appendChild(card);
  });
}

function showYear(year) {
  const names = Array.isArray(peopleByYear[year]) ? peopleByYear[year] : [];

  selectedYear.textContent = year;
  countBadge.textContent = names.length;
  peopleList.innerHTML = "";

  names.forEach((person, index) => {
    const li = document.createElement("li");
    li.textContent = person;
    li.style.animationDelay = `${index * 45}ms`;
    peopleList.appendChild(li);
  });

  yearsGrid.parentElement.classList.add("hidden");
  devoteesSection.classList.remove("hidden");

  window.scrollTo({ top: devoteesSection.offsetTop - 20, behavior: "smooth" });
}

backButton.addEventListener("click", () => {
  devoteesSection.classList.add("hidden");
  yearsGrid.parentElement.classList.remove("hidden");
  window.scrollTo({ top: document.getElementById("years").offsetTop - 10, behavior: "smooth" });
});

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

/* Floating devotional light particles */
const particles = document.getElementById("particles");

for (let i = 0; i < 28; i++) {
  const dot = document.createElement("span");
  dot.className = "particle";
  dot.style.left = `${Math.random() * 100}%`;
  dot.style.animationDuration = `${8 + Math.random() * 13}s`;
  dot.style.animationDelay = `${Math.random() * 10}s`;
  dot.style.width = `${3 + Math.random() * 4}px`;
  dot.style.height = dot.style.width;
  particles.appendChild(dot);
}

renderYears();
