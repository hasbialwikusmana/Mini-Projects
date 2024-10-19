document.getElementById("search-form").addEventListener("submit", function (event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const profileDetails = document.getElementById("profile-details");
  const profileResult = document.getElementById("profile-result");

  fetch(`https://api.github.com/users/${username}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Pengguna tidak ditemukan");
      }
      return response.json();
    })
    .then((profile) => {
      profileResult.style.display = "block";
      profileDetails.innerHTML = `
        <img src="${profile.avatar_url}" alt="Foto Profil">
        <h3>${profile.name || "Tidak ada nama"}</h3>
        <p><strong>Username:</strong> ${profile.login}</p>
        <p><strong>Bio:</strong> ${profile.bio || "Tidak ada bio"}</p>
        <p><strong>Lokasi:</strong> ${profile.location || "Tidak ada lokasi"}</p>
        <p><strong>Repositori Publik:</strong> ${profile.public_repos}</p>
        <p><strong>Followers:</strong> ${profile.followers}</p>
        <a href="${profile.html_url}" target="_blank">Lihat Profil di GitHub</a>
      `;
    })
    .catch((error) => {
      profileResult.style.display = "block";
      profileDetails.innerHTML = `<p>${error.message}</p>`;
    });
});
