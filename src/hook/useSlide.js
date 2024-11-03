import { useState } from 'react';

export const useSlide = (images) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const restartSlide = () => {
    setCurrentIndex(0);
  };

  return {
    currentIndex,
    nextSlide,
    prevSlide,
    restartSlide,
  };
};
