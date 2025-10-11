const username = "viernoi86"; // ← Remplace par ton pseudo GitHub

fetch(`https://api.github.com/users/${username}/repos?sort=updated`)
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("projects");
    data.forEach(repo => {
      const card = document.createElement("div");
      card.classList.add("repo-card");
      card.innerHTML = `
        <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
        <p>${repo.description || "Aucune description"}</p>
        <p>⭐ ${repo.stargazers_count} | 🍴 ${repo.forks_count}</p>
      `;
      container.appendChild(card);
    });
  })
  .catch(err => {
    console.error(err);
    document.getElementById("projects").innerHTML =
      "<p>Impossible de charger les projets GitHub 😢</p>";
  });
