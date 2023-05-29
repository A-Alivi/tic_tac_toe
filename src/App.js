import React, { useState, useEffect } from 'react';
import Game from './Game';
import GameOverText from './GameOverText';
import { checkForWinner, playerMapping } from './utils';
import './style.css';

function generateTurn() {
  return Math.floor(((Math.random() * 10) % 2) + 1);
}

export default function App() {
  const [turn, setTurn] = useState(generateTurn()); // At the start randomly select a turn
  const [isOver, setIsOver] = useState(-1); // tracks if the game is over or not. -1 -> no, 0 -> draw, 1 -> player 1 won, 2 -> player 2 won
  // The matrix that represents tic tack toe game
  const [matrix, setMatrix] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ]);

  // Sets everything back to start
  function restart() {
    setIsOver(-1);
    setTurn(generateTurn());
    setMatrix([
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ]);
  }

  // Updates matrix and changes player's turn
  function updateMatrix({ row, col }) {
    if (isOver > -1) return; // If game is over do nothing, meaning freeze.

    // if the given position is empty
    if (!matrix[row][col]) {
      // Mark it with the player's symbol
      setMatrix((prevMatrix) => {
        prevMatrix[row][col] = playerMapping[turn];
        const winner = checkForWinner(prevMatrix);
        setIsOver(winner);
        return prevMatrix;
      });
    } else return; // else do nothing.

    // Change Turn
    const newTurn = turn == 1 ? 2 : 1;
    setTurn(newTurn);
  }

  return (
    <div className="container">
      <h1>Tick Tac Toe</h1>
      <div className="stats-bar">
        <p className={`${turn == 1 ? 'active-player' : ''}`}>
          Player 1: {playerMapping[1]}
        </p>
        <p className={`${turn == 2 ? 'active-player' : ''}`}>
          Player 2: {playerMapping[2]}
        </p>
      </div>
      <Game
        matrix={matrix}
        setMatrix={setMatrix}
        onBoxClick={updateMatrix}
        isOver={isOver}
      />
      <GameOverText isOver={isOver} />
      <button className="restart-btn" onClick={restart}>
        Restart
      </button>
    </div>
  );
}
