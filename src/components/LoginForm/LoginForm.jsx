import TextField from '../../components/TextField/TextField';
import Button from '../../components/Button/Button';

import useForm from '../../hooks/useForm';

import initialState from './initialState';
import fields from './fields';

import styles from './LoginForm.module.css';

const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const { email, password } = state;

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <TextField value={email} onChange={handleChange} {...fields.email} />
      <TextField
        value={password}
        onChange={handleChange}
        {...fields.password}
      />
      <Button>Login</Button>
    </form>
  );
};

export default LoginForm;
