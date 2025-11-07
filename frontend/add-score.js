// Simple form submission
document.getElementById('score-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name = document.getElementById('player-name').value.trim();
  const messageBox = document.getElementById('message-box');
  
  // Check if name is empty
  if (!name) {
    messageBox.textContent = 'Please enter your name';
    messageBox.className = 'show error';
    return;
  }

  // Show loading
  messageBox.textContent = 'Submitting...';
  messageBox.className = 'show loading';

  // Prepare data
  const formData = new FormData();
  formData.append('name', name);

  // Send to server
  axios.post('../backend/api/api-add-score.php', formData)
    .then(function(response) {
      const data = response.data;
      
      if (data.success) {
        messageBox.textContent = 'Score added successfully!';
        messageBox.className = 'show success';
        document.getElementById('player-name').value = '';
        
        // Go to leaderboard after 2 seconds
        setTimeout(function() {
          window.location.href = 'index.html#leaderboard';
        }, 2000);
      } else {
        messageBox.textContent = 'Error: ' + (data.error || 'Unknown error');
        messageBox.className = 'show error';
      }
    })
    .catch(function(error) {
      console.error('Error:', error);
      messageBox.textContent = 'Error connecting to server';
      messageBox.className = 'show error';
    });
});
