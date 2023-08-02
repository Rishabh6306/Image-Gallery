import React from 'react';
import './ImageCard.css';

const ImageCard = (props) => {
  return (
    <div className="image-card">
      <img src={props.imageUrl} alt="Pixabay" />
    </div>
  );
};

export default ImageCard;