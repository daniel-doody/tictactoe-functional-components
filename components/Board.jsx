import React from 'react';
import Box from '../components/Box';
import '../styles/Board.css';

const Board = ({ movesMade, handleBoxClick }) => {
  return (
    <div className='board'>
      {movesMade.map((value, index) => {
        {
          /* Implement the box, with  */
        }
        return (
          <Box
            value={value}
            handleBoxClick={() => value === null && handleBoxClick(index)}
          />
        );
      })}
    </div>
  );
};

export default Board;
