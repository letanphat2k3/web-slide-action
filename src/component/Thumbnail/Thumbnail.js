import React from 'react';
import './Thumbnail.css';

const Thumbnail = ({ imageUrl, altText, onClick, isActive }) => {
    return (
      <img 
        src={imageUrl} 
        alt={altText} 
        onClick={onClick} 
        className={`thumbnail ${isActive ? 'active' : ''}`} // Thêm class active nếu isActive là true
      />
    );
  };
  
  export default Thumbnail;