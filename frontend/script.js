// Fetch leaderboard data
function loadLeaderboard() {
  axios.get('../backend/api/get-score.php')
    .then(response => {
      const data = response.data;
      const tableBody = document.getElementById('leaderboardData');
      tableBody.innerHTML = "";

      data.forEach(player => {
        const row = `<tr>
          <td>${player.name}</td>
          <td>${player.score}</td>
          <td>${player.duration}</td>
        </tr>`;
        tableBody.innerHTML += row;
      });
    })
    .catch(error => console.error('Error fetching leaderboard:', error));
}

// Handle score submission
document.getElementById('scoreForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('playerName').value;

  axios.post('../backend/api/api-add-score.php', new URLSearchParams({ name }))
    .then(response => {
      const res = response.data;
      const msg = document.getElementById('resultMessage');
      if (res.success) {
        msg.textContent = `✅ Score added: ${res.score} pts, Duration: ${res.duration}s`;
        loadLeaderboard();
      } else {
        msg.textContent = `❌ ${res.error}`;
      }
    })
    .catch(error => console.error('Error adding score:', error));
});

// Initial load
loadLeaderboard();
