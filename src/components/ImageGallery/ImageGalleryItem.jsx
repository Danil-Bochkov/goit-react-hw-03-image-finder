import React from 'react';

const ImageGalleryItem = ({ imgSrc, imgTags, onImgToggle }) => {
  return (
    <li className="ImageGalleryItem">
      <img
        className="ImageGalleryItem-image"
        src={imgSrc}
        alt={imgTags}
        onClick={onImgToggle}
      />
    </li>
  );
};

export default ImageGalleryItem;
