import React from 'react';

export default function ImgErrorMessage({ message }) {
  return (
    <div role="alert">
      <p className="Alert">{message}</p>
    </div>
  );
}
