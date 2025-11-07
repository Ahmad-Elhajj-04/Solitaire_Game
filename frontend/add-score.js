// Handle score submission
document.getElementById('scoreForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name = document.getElementById('playerName').value.trim();
  const resultMessage = document.getElementById('resultMessage');
  
  if (!name) {
    resultMessage.textContent = '❌ Please enter your name';
    resultMessage.style.color = '#ff6b6b';
    return;
  }

  // Clear previous message
  resultMessage.textContent = 'Submitting...';
  resultMessage.style.color = '#f4d03f';

  axios.post('../backend/api/api-add-score.php', new URLSearchParams({ name }))
    .then(response => {
      console.log('Response:', response.data); // Debug log
      const res = response.data;
      
      if (res.success) {
        resultMessage.textContent = `✅ Score added: ${res.score} pts, Duration: ${res.duration}s`;
        resultMessage.style.color = '#51cf66';
        document.getElementById('playerName').value = '';
      } else {
        resultMessage.textContent = `❌ ${res.error || 'Unknown error'}`;
        resultMessage.style.color = '#ff6b6b';
      }
    })
    .catch(error => {
      console.error('Error adding score:', error);
      if (error.response) {
        console.error('Error response:', error.response.data);
        resultMessage.textContent = `❌ Server error: ${error.response.data.error || 'Unknown error'}`;
      } else {
        resultMessage.textContent = '❌ Error connecting to server';
      }
      resultMessage.style.color = '#ff6b6b';
    });
});
