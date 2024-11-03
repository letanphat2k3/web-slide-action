import React from 'react';
import './Button.css';

export const Button = ({ onClick, children, className = 'btn' }) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};
