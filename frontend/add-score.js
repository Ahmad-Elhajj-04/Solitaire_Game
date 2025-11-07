document.getElementById('scoreForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('playerName').value;

  axios.post('../backend/api/api-add-score.php', new URLSearchParams({ name }))
    .then(response => {
      const res = response.data;
      const msg = document.getElementById('resultMessage');
      if (res.success) {
        msg.textContent = `✅ Score added: ${res.score} pts, Duration: ${res.duration}s`;
      } else {
        msg.textContent = `❌ ${res.error}`;
      }
    })
    .catch(error => console.error('Error adding score:', error));
});
