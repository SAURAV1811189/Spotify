import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch('https://itunes.apple.com/search?term=pop&limit=20')
      .then(res => res.json())
      .then(data => setSongs(data.results))
      .catch(err => console.error(err));
  }, []);
  console.log('====================================');
  console.log(songs);
  console.log('====================================');

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Trending Songs</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {songs.map(song => (
          <div key={song.trackId}  className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700">
            <img src={song.artworkUrl100} alt={song.trackName} className="rounded mb-2" />
            <p className="font-semibold">{song.trackName}</p>
            <p className="text-sm text-gray-400">{song.artistName}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;