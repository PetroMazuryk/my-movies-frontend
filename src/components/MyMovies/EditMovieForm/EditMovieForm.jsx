import MaskedInput from 'react-text-mask';
import useForm from '../../../hooks/useForm';
import styles from '../MyMoviesForm/MyMoviesForm.module.css';

const EditMoviesForm = ({ onSubmit, initialState, onCancel }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const { title, director, favorite, genre, releaseDate } = state;

  const yearMask = [/\d/, /\d/, /\d/, /\d/];

  const handleCancel = (e) => {
    e.preventDefault();
    if (onCancel) {
      onCancel();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={styles.form}
      encType="multipart/form-data"
    >
      <div className={styles.formGroup}>
        <label>Movie title</label>
        <input
          value={title || ''}
          name="title"
          onChange={handleChange}
          className={styles.textField}
          placeholder="Movie title"
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label>Movie director</label>
        <input
          value={director || ''}
          name="director"
          onChange={handleChange}
          className={styles.textField}
          placeholder="Movie director"
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label>Favorite</label>
        <input
          checked={!!favorite}
          name="favorite"
          onChange={handleChange}
          className={styles.checkbox}
          type="checkbox"
        />
      </div>
      <div className={styles.formGroup}>
        <label>Movie genre</label>
        <select
          name="genre"
          value={genre || 'fantastic'}
          onChange={handleChange}
          className={styles.textField}
        >
          <option value="fantastic">Fantastic</option>
          <option value="love story">Love story</option>
        </select>
      </div>
      <div className={styles.formGroup}>
        <label>Movie release date</label>
        <MaskedInput
          mask={yearMask}
          value={releaseDate || ''}
          name="releaseDate"
          onChange={handleChange}
          className={styles.textField}
          placeholder="YYYY"
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label>Poster</label>
        <input name="poster" type="file" onChange={handleChange} />
      </div>
      <button className={styles.btn} onClick={handleCancel}>
        Cancel
      </button>
      <button className={styles.btn} type="submit">
        Edit Movie
      </button>
    </form>
  );
};

export default EditMoviesForm;
