import React from 'react';
import generateMenuPDF from '../utils/generateMenuPDF';
import styles from './MenuDownload.module.css';

const MenuDownload = () => {
  const handleDownload = () => {
    generateMenuPDF();
  };

  return (
    <div className={styles.container}>
      <button 
        className={styles.downloadButton}
        onClick={handleDownload}
      >
        Download Menu PDF
      </button>
    </div>
  );
};

export default MenuDownload; 