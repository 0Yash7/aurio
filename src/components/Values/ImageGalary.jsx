import React, { useState } from "react";
import styles from "./ImageGallery.module.css";

const ImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className={styles.galleryContainer}>
      <div className={styles.gallery}>
        {images.map((image, index) => (
          <div
            key={index}
            className={styles.imageItem}
            onClick={() => openLightbox(image)}
          >
            <img src={image.url} alt={image.caption} loading="lazy" />
            <div className={styles.imageOverlay}>
              <span className={styles.caption}>{image.caption}</span>
              <span className={styles.viewIcon}>+</span>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <span className={styles.closeLightbox}>&times;</span>
          <img
            src={selectedImage.url}
            alt={selectedImage.caption}
            className={styles.lightboxImage}
            onClick={(e) => e.stopPropagation()}
          />
          <p className={styles.lightboxCaption}>{selectedImage.caption}</p>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
