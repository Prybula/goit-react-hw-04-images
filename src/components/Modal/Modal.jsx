import { useEffect } from 'react';
import style from './Modal.module.css';

export const Modal = ({ onClose, largeImageURL }) => {
  useEffect(() => {
    const handleKeyDown = element => {
      if (element.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return (
    <div className={style.overlay} onClick={handleBackdropClick}>
      <div className={style.modal}>
        <img src={largeImageURL} alt="" />
      </div>
    </div>
  );
};
