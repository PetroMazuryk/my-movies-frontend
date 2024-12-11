import { useState } from 'react';
import Modal from '../Modal/Modal';

const EditMovie = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <button onClick={openModal}>Edit Movie</button>

      {isModalOpen && (
        <Modal
          close={closeModal}
          title="Edit Movie"
          content={
            <form>
              <input type="text" placeholder="Movie Title" />
              <input type="text" placeholder="Director" />
            </form>
          }
          actions={
            <>
              <button onClick={closeModal}>Cancel</button>
              <button onClick={() => alert('Movie updated!')}>Save</button>
            </>
          }
        />
      )}
    </div>
  );
};

export default EditMovie;
