import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Modal from '../../Modal/Modal';
import EditMoviesForm from '../EditMovieForm/EditMovieForm';
import { updateMovie } from '../../../redux/movies/movies-operations'; // Операція для оновлення фільму

const EditMovie = ({ movie, className }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleUpdateMovie = (formData) => {
    dispatch(updateMovie({ id: movie._id, data: formData }));
    closeModal();
  };

  return (
    <div>
      <button className={className} onClick={openModal}>
        Edit
      </button>

      {isModalOpen && (
        <Modal
          close={closeModal}
          title="Edit Movie"
          content={
            <EditMoviesForm
              initialState={{
                title: movie.title,
                director: movie.director,
                favorite: movie.favorite,
                genre: movie.genre,
                releaseDate: movie.releaseDate,
                poster: null,
              }}
              onSubmit={handleUpdateMovie}
              onCancel={closeModal}
            />
          }
        />
      )}
    </div>
  );
};

export default EditMovie;
