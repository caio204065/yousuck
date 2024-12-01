fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const musicGrid = document.querySelector('.music-grid');
    const audioPlayer = document.getElementById('audio-player');
    const songTitle = document.getElementById('song-title');
    const artistName = document.getElementById('artist-name');
    const cover = document.getElementById('cover');

    // Gerar cartões de música
    data.forEach(song => {
      const card = document.createElement('div');
      card.className = 'music-card';
      card.innerHTML = `
        <img src="${song.cover}" alt="Capa">
        <h3>${song.title}</h3>
        <p>${song.artist}</p>
      `;
      card.addEventListener('click', () => {
        audioPlayer.src = song.audio;
        songTitle.textContent = song.title;
        artistName.textContent = song.artist;
        cover.src = song.cover;
        audioPlayer.play();
      });
      musicGrid.appendChild(card);
    });
  });
