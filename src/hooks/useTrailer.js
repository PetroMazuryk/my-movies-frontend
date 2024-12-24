import { useState } from 'react';
import { findAndPlayTrailer } from '../api/trailer';

export const useTrailer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTrailerUrl, setCurrentTrailerUrl] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const playTrailer = async (query) => {
    try {
      const trailerUrl = await findAndPlayTrailer(query);
      setCurrentTrailerUrl(trailerUrl);
      setErrorMessage('');
      setIsModalOpen(true);
    } catch (error) {
      setErrorMessage(error.message || 'An unexpected error occurred.');
      setCurrentTrailerUrl('');
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentTrailerUrl('');
    setErrorMessage('');
  };

  return {
    isModalOpen,
    currentTrailerUrl,
    errorMessage,
    playTrailer,
    closeModal,
  };
};
