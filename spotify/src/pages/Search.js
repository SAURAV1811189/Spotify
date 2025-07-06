import React, { useState } from 'react';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(query)}&limit=20`)
      .then(res => res.json())
      .then(data => setResults(data.results))
      .catch(err => console.error(err));
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-2">Search Music</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Search songs, albums..."
          className="w-full p-2 bg-gray-800 rounded"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch} className="bg-green-500 px-4 py-2 rounded">Search</button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {results.map(song => (
          <div key={song.trackId} className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700">
            <img src={song.artworkUrl100} alt={song.trackName} className="rounded mb-2" />
            <p className="font-semibold">{song.trackName}</p>
            <p className="text-sm text-gray-400">{song.artistName}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;