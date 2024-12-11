import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import styles from './Modal.module.css';

const modalRoot = document.getElementById('modal-root');

const Modal = ({ close, title, content, actions }) => {
  const handleClose = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === 'Escape') {
      close();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => handleClose(e);
    document.body.addEventListener('keydown', handleKeyDown);

    return () => document.body.removeEventListener('keydown', handleKeyDown);
  }, []);

  return createPortal(
    <div onClick={handleClose} className={styles.overlay}>
      <div className={styles.modal}>
        <span onClick={close} className={styles.close}>
          X
        </span>
        {title && <h2>{title}</h2>}
        {content && <div>{content}</div>}
        {actions && <div className={styles.actions}>{actions}</div>}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
