import React from 'react';

export default function ImageGalleryItem({ img, onToggle }) {
  return img.map(({ id, webformatURL, largeImageURL, tags }) => {
    return (
      <li key={id} className="ImageGalleryItem">
        <img
          className="ImageGalleryItem-image"
          src={webformatURL}
          alt={tags}
          onClick={() => onToggle(largeImageURL)}
        />
      </li>
    );
  });
}
