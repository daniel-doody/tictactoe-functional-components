import React, { useDebugValue, useState } from 'react';
import Board from '../components/Board';
import '../styles/App.css';

function App() {
  const [movesMade, setMovesMade] = useState(Array(9).fill(null));
  const [turnPlayer1, setTurnPlayer1] = useState(true);

  const handleBoxClick = (boxClickedIndex) => {
    // Step 1: Update the Moves Made:
    setMovesMade(
      // Set the logic
      movesMade.map((value, index) => {
        if (index === boxClickedIndex) {
          return turnPlayer1 ? 'X' : 'O';
        } else {
          return value;
        }
      })
    );
    setTurnPlayer1(!turnPlayer1);
  };
  //

  return (
    <div className='App'>
      <Board movesMade={movesMade} handleBoxClick={handleBoxClick} />
    </div>
  );
}

export default App;
