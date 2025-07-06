import React from 'react';

const Player = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black p-4 flex justify-between items-center z-50">
      <div>Now Playing: Song Name</div>
      <div className="space-x-4">
        <button>⏮</button>
        <button>▶️</button>
        <button>⏭</button>
      </div>
    </div>
  );
};

export default Player;