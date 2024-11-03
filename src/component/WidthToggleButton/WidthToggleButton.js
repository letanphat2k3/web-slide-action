import React from 'react';
import { Button } from '../Button/Button';

const WidthToggleButton = ({ onClick }) => {
  return (
    <Button onClick={onClick} className="control-button">
      Toggle Width
    </Button>
  );
};

export default WidthToggleButton;
