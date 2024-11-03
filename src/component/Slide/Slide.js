import React, { useState } from 'react';
import './Slide.css';
import RandomButton from '../RandomButton/RandomButton';
import WidthToggleButton from '../WidthToggleButton/WidthToggleButton';
import NextPrevButton from '../NextPrevButton/NextPrevButton';
import Thumbnail from '../Thumbnail/Thumbnail';

const Slide = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [width, setWidth] = useState(300);

  const totalImages = 15; 

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % totalImages);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + totalImages) % totalImages);

  const randomImage = () => setCurrentImage(Math.floor(Math.random() * totalImages));
  
  const goToStart = () => setCurrentImage(0);
  const goToEnd = () => setCurrentImage(totalImages - 1);

  const toggleWidth = () => setWidth((prev) => (prev === 300 ? 400 : 300));

  const getImageUrl = (index) => `https://picsum.photos/${width}/200?image=${index}`;

  const renderThumbnails = () => {
    let thumbnails = [];
    for (let i = 0; i < totalImages; i++) {
      thumbnails.push(
        <Thumbnail 
          key={i} 
          imageUrl={getImageUrl(i)} 
          altText={`Thumbnail ${i}`} 
          onClick={() => setCurrentImage(i)} 
          isActive={i === currentImage} 
        />
      );
    }
    return thumbnails;
  };

  return (
    <div className="slide-container">
      <img src={getImageUrl(currentImage)} alt="Current slide" />

      {/* Thêm phần hiển thị số trang */}
      <div className="page-indicator">
        Slide {currentImage + 1} of {totalImages}
      </div>

      <div className="thumbnails-container">
        {renderThumbnails()}
      </div>

      <div className="controls">
        <NextPrevButton onClick={prevImage} label="Previous" />
        <NextPrevButton onClick={nextImage} label="Next" />
        <NextPrevButton onClick={goToStart} label="Back to Start" />
        <NextPrevButton onClick={goToEnd} label="Go to End" />
        
        <RandomButton onClick={randomImage} />
        <WidthToggleButton onClick={toggleWidth} />
      </div>
    </div>
  );
};

export default Slide;
