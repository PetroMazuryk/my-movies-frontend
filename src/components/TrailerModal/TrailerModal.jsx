import styles from './TrailerModal.module.css';

const TrailerModal = ({ isOpen, trailerUrl, errorMessage, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <button className={styles.close} onClick={onClose}>
          ×
        </button>
        {errorMessage ? (
          <p className={styles.error}>{errorMessage}</p>
        ) : (
          <iframe
            width="560"
            height="315"
            src={trailerUrl}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Trailer"
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default TrailerModal;
