import React, { Component } from "react";

class ImageGalleryItem extends Component {
  render() {
    const { webformatURL, tags, largeImageURL, onImageClick } = this.props;
    return (
      <li
        className="ImageGalleryItem"
        onClick={() => onImageClick(largeImageURL)}
      >
        <img className="ImageGalleryItem-image" src={webformatURL} alt={tags} />
      </li>
    );
  }
}

export default ImageGalleryItem;
