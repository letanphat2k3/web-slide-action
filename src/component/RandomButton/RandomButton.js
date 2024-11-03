import React from 'react';
import { Button } from '../Button/Button';

const RandomButton = ({ onClick }) => {
  return (
    <Button onClick={onClick} className="control-button">
      Random Image
    </Button>
  );
};

export default RandomButton;
