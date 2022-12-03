import React from 'react';
import '../styles/Box.css';

const Box = ({ value, handleBoxClick }) => {
  const style = value === 'X' ? 'box x' : 'box o';

  return (
    <button className={style} onClick={handleBoxClick}>
      {value}
    </button>
  );
};

export default Box;
