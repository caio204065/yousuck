fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const musicList = document.getElementById('music-list');
    const audioPlayer = document.getElementById('audio-player');
    const songTitle = document.getElementById('song-title');
    const artistName = document.getElementById('artist-name');
    const cover = document.getElementById('cover');

    // Gerar cartões de música
    data.forEach(song => {
      const songCard = document.createElement('div');
      songCard.className = 'song-card';
      songCard.innerHTML = `
        <img src="${song.cover}" alt="Cover">
        <h3>${song.title}</h3>
        <p>${song.artist}</p>
      `;
      songCard.addEventListener('click', () => {
        audioPlayer.src = song.audio;
        songTitle.textContent = song.title;
        artistName.textContent = song.artist;
        cover.src = song.cover;
        audioPlayer.play();
      });
      musicList.appendChild(songCard);
    });
  });
