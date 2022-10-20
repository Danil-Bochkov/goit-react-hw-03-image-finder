import React from 'react';

export default function Button({ onClick }) {
  return (
    <div className="ButtonField">
      <button type="button" onClick={onClick} className="Button">
        Load more
      </button>
    </div>
  );
}
