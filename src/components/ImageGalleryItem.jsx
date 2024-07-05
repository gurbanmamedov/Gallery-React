import React from "react";

const ImageGalleryItem = ({
  webformatURL,
  tags,
  largeImageURL,
  onImageClick,
}) => {
  return (
    <li
      className="ImageGalleryItem"
      onClick={() => onImageClick(largeImageURL)}
    >
      <img className="ImageGalleryItem-image" src={webformatURL} alt={tags} />
    </li>
  );
};

export default ImageGalleryItem;
