export const playerMapping = ['', 'O', 'X'];
function getPlayerNumber(symbol) {
  return playerMapping.findIndex((val) => symbol == val);
}

// Checks All Rows for Winner
function checkRows(newMatrix) {
  let isMatrixEmpty = false;
  let winnerPlayer = -1;

  for (let i = 0; i < 3; i++) {
    let rowStr = newMatrix[i].join('');
    console.log(i + ' ROW STR: ', rowStr, newMatrix[i]);
    if (rowStr === 'XXX') {
      winnerPlayer = getPlayerNumber('X');
    } else if (rowStr === 'OOO') {
      winnerPlayer = getPlayerNumber('O');
    } else if (rowStr.length < 3) {
      isMatrixEmpty = true;
    }
  }

  if (winnerPlayer == -1) {
    if (!isMatrixEmpty) return 0;
    else return -1;
  }

  return winnerPlayer;
}

// Checks All Columns for Winner
function checkCols(newMatrix) {
  let isMatrixEmpty = false;
  let winnerPlayer = -1;

  for (let i = 0; i < 3; i++) {
    let colStr = newMatrix.map((row) => row[i]).join('');
    console.log(i + ' COL STR: ', colStr, newMatrix[i]);
    if (colStr === 'XXX') {
      winnerPlayer = getPlayerNumber('X');
    } else if (colStr === 'OOO') {
      winnerPlayer = getPlayerNumber('O');
    } else if (colStr.length < 3) {
      isMatrixEmpty = true;
    }
  }

  if (winnerPlayer == -1) {
    if (!isMatrixEmpty) return 0;
    else return -1;
  }

  return winnerPlayer;
}

// Checks All Diagonals For Winner
function checkDiagonals(newMatrix) {
  let isMatrixEmpty = false;
  let winnerPlayer = -1;
  let mainDiagonalStr = ''; // [\]
  let antiDiagonalStr = ''; // [/]
  for (let i = 0; i < 3; i++) {
    mainDiagonalStr += newMatrix[i][i];
    antiDiagonalStr += newMatrix[i][2 - i];
  }

  if (mainDiagonalStr === 'XXX' || antiDiagonalStr === 'XXX') {
    winnerPlayer = getPlayerNumber('X');
  } else if (mainDiagonalStr === 'OOO' || antiDiagonalStr === 'OOO') {
    winnerPlayer = getPlayerNumber('O');
  } else if (mainDiagonalStr.length < 3 || antiDiagonalStr.length < 3) {
    isMatrixEmpty = true;
  }

  if (winnerPlayer == -1) {
    if (!isMatrixEmpty) return 0;
    else return -1;
  }

  return winnerPlayer;
}

// Combines All Checks and Decides A Winner
export function checkForWinner(newMatrix) {
  const rowsResult = checkRows(newMatrix);
  if (rowsResult > 0) {
    // The Game is Over
    return rowsResult;
  }
  const colsResult = checkCols(newMatrix);
  if (colsResult > 0) {
    // The Game is Over
    return colsResult;
  }
  const diagonalsResult = checkDiagonals(newMatrix);
  if (diagonalsResult > 0) {
    return diagonalsResult;
  }

  // If all rows, cols and diagonals are full
  if (rowsResult + colsResult + diagonalsResult === 0) {
    return 0;
  }

  return -1;
}
