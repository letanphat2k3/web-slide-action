import React from 'react';
import '../Button/Button.css';

const NextPrevButton = ({ onClick, label }) => {
    return (
      <button onClick={onClick} className="control-button">
        {label}
      </button>
    );
  };
  
  export default NextPrevButton;
