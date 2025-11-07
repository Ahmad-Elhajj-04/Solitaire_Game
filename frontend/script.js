// DOM Elements
const heroSection = document.getElementById('hero');
const downloadSection = document.getElementById('download');
const leaderboardSection = document.getElementById('leaderboard');
const leaderboardBody = document.getElementById('leaderboard-body');
const btnBackHome = document.getElementById('btnBackHome');
const navLeaderboardLink = document.getElementById('navLeaderboardLink');
const navIntroLink = document.getElementById('navIntroLink');

// Show/Hide Sections
function showSection(section) {
  // Hide all sections
  if (heroSection) heroSection.style.display = 'none';
  if (downloadSection) downloadSection.style.display = 'none';
  if (leaderboardSection) leaderboardSection.classList.add('hidden');
  
  // Show requested section
  if (section === 'leaderboard') {
    leaderboardSection.classList.remove('hidden');
    loadLeaderboard();
  } else {
    if (heroSection) heroSection.style.display = 'block';
    if (downloadSection) downloadSection.style.display = 'block';
  }
}

// Load Leaderboard Data
function loadLeaderboard() {
  axios.get('../backend/api/api-get-score.php')
    .then(response => {
      const data = response.data;
      
      if (Array.isArray(data) && data.length > 0) {
        let html = '';
        data.forEach((player, index) => {
          // Format date
          const date = player.submit ? new Date(player.submit).toLocaleDateString() : 'N/A';
          
          html += `<tr>
            <td>${index + 1}</td>
            <td>${player.name}</td>
            <td>${player.score}</td>
            <td>${player.duration}</td>
            <td>${date}</td>
          </tr>`;
        });
        leaderboardBody.innerHTML = html;
      } else {
        leaderboardBody.innerHTML = '<tr><td colspan="5">No scores yet</td></tr>';
      }
    })
    .catch(error => {
      console.error('Error fetching leaderboard:', error);
      leaderboardBody.innerHTML = '<tr><td colspan="5">Error loading data</td></tr>';
    });
}

// Event Listeners
if (navLeaderboardLink) {
  navLeaderboardLink.addEventListener('click', (e) => {
    e.preventDefault();
    showSection('leaderboard');
  });
}

if (navIntroLink) {
  navIntroLink.addEventListener('click', (e) => {
    e.preventDefault();
    showSection('home');
  });
}

if (btnBackHome) {
  btnBackHome.addEventListener('click', () => {
    showSection('home');
  });
}

// Initial Load - Show home sections
showSection('home');
