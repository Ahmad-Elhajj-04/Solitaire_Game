document.getElementById('score-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  var nameInput = document.getElementById('player-name');
  var name = nameInput.value.trim();
  var messageBox = document.getElementById('message-box');
  
  if (!name) {
    messageBox.textContent = 'Please enter your name';
    messageBox.className = 'show error';
    return;
  }

  messageBox.textContent = 'Submitting...';
  messageBox.className = 'show loading';

  var formData = new FormData();
  formData.append('name', name);

  fetch('../backend/api/api-add-score.php', {
    method: 'POST',
    body: formData
  })
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    if (data.success) {
      messageBox.textContent = 'Score submitted successfully! Score: ' + data.score + ', Duration: ' + data.duration;
      messageBox.className = 'show success';
      nameInput.value = '';
      
      setTimeout(function() {
        window.location.href = 'index.html#leaderboard';
      }, 2000);
    } else {
      messageBox.textContent = 'Error: ' + (data.error || 'Unknown error');
      messageBox.className = 'show error';
    }
  })
  .catch(function(error) {
    messageBox.textContent = 'Error connecting to server';
    messageBox.className = 'show error';
  });
});
