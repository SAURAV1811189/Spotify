import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="p-4 bg-black flex justify-between items-center">
      <h1 className="text-xl font-bold text-green-500">Spotify 2.0</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/search">Search</Link>
        <Link to="/playlist">Playlist</Link>
      </div>
    </nav>
  );
};

export default Navbar;