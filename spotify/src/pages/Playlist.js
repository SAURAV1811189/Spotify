// File: src/pages/Playlist.jsx
import React, { useEffect, useState } from 'react';

const Playlist = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch('https://saavn.dev/api/search/songs?query=chill')
      .then(res => res.json())
      .then(data => setSongs(data.data.results))
      .catch(err => console.error('API error:', err));
  }, []);
console.log('====================================');
console.log(songs);
console.log('====================================');
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-white mb-6">🎧 Chill Vibes Playlist</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {songs.map((song) => (
          <div
            key={song.id}
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-lg p-4 hover:shadow-xl transition-all"
          >
            <img
              src={song.image?.[2]?.url}
              alt={song.name}
              className="rounded-lg w-full h-48 object-cover mb-4"
            />

            <h3 className="text-lg font-semibold text-white truncate">{song.name}</h3>
            <p className="text-sm text-gray-400 truncate">{song.primaryArtists}</p>

            <div className="mt-4">
              <audio
                controls
                className="w-full rounded bg-gray-700"
                preload="none"
              >
                <source src={song.downloadUrl?.[4]?.url} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Playlist;