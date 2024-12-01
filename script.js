fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const chartsList = document.getElementById('charts-list');
    const audioPlayer = document.getElementById('audio-player');
    const songTitle = document.getElementById('song-title');
    const artistName = document.getElementById('artist-name');
    const cover = document.getElementById('cover');
    const favoritesList = document.getElementById('favorites-list');

    data.forEach((song, index) => {
      const listItem = document.createElement('li');
      listItem.textContent = `${song.title} - ${song.artist}`;
      listItem.addEventListener('click', () => {
        audioPlayer.src = song.audio;
        songTitle.textContent = song.title;
        artistName.textContent = song.artist;
        cover.src = song.cover;
        audioPlayer.play();
      });

      const favoriteButton = document.createElement('button');
      favoriteButton.textContent = '❤️';
      favoriteButton.addEventListener('click', () => {
        const favoriteItem = document.createElement('li');
        favoriteItem.textContent = `${song.title} - ${song.artist}`;
        favoritesList.appendChild(favoriteItem);
      });

      listItem.appendChild(favoriteButton);
      chartsList.appendChild(listItem);
    });
  });
