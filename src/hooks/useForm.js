import { useState, useCallback } from 'react';

const useForm = ({ initialState, onSubmit }) => {
  const [state, setState] = useState({ ...initialState });

  const handleChange = useCallback(
    ({ target }) => {
      setState((prevState) => {
        const { name, value, checked, type, files } = target;
        const newValue =
          type === 'checkbox' ? checked : type === 'file' ? files[0] : value;

        return { ...prevState, [name]: newValue };
      });
    },
    [setState]
  );

  const reset = useCallback(
    () => setState({ ...initialState }),
    [initialState]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...state });
    reset();
  };

  return { state, setState, handleChange, handleSubmit, reset };
};

export default useForm;
