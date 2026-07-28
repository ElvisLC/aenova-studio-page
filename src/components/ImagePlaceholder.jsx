import React from 'react';

export default function ImagePlaceholder({ label, ratio = '4/3', shape = 'rect', style = {} }) {
  return (
    <div
      className={`img-placeholder ${shape === 'circle' ? 'circle' : ''}`}
      style={{ aspectRatio: shape === 'circle' ? '1/1' : ratio, ...style }}
    >
      {label}
    </div>
  );
}
