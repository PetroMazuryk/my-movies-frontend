import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import TitleText from '../TitleText/TitleText';
import styles from './Modal.module.css';

const modalRoot = document.getElementById('modal-root');

const Modal = ({ close, title, content, actions }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Escape') {
        close();
      }
    };
    document.body.addEventListener('keydown', handleKeyDown);
    return () => document.body.removeEventListener('keydown', handleKeyDown);
  }, [close]);

  if (!modalRoot) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      close();
    }
  };

  return createPortal(
    <div onClick={handleOverlayClick} className={styles.overlay}>
      <div className={styles.modal}>
        <span onClick={close} className={styles.close}>
          ×
        </span>
        {title && <TitleText>{title}</TitleText>}
        {content && <div>{content}</div>}
        {actions && <div className={styles.actions}>{actions}</div>}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
