import React, { useState } from 'react';
import './style.css';

function Game({ matrix, setMatrix, onBoxClick, isOver }) {
  return (
    <div className={`matrix ${isOver > -1 ? 'dim' : ''}`}>
      {matrix.map((row, rowInd) => {
        return (
          <div className="row">
            {row.map((value, colInd) => {
              return (
                <div
                  className="box"
                  onClick={() => onBoxClick({ row: rowInd, col: colInd })}
                >
                  <span>{value}</span>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Game;
