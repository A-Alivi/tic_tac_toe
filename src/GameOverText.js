import React, { useState, useEffect } from 'react';
import './style.css';

function GameOverText({ isOver }) {
  const [overMessage, setOverMessage] = useState('');

  useEffect(() => {
    if (isOver === -1) setOverMessage('');
    else if (isOver === 0) setOverMessage('Game Draw!');
    else if (isOver === 1) setOverMessage('Player 1 Won!');
    else if (isOver === 2) setOverMessage('Player 2 Won!');
  }, [isOver]);

  return (
    <div className={`over-screen ${isOver > -1 ? 'full-opacity' : ''}`}>
      <p>{overMessage}</p>
    </div>
  );
}

export default GameOverText;
