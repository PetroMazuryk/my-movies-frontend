import { useDispatch } from 'react-redux';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import { register } from '../../redux/auth/auth-operations';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const onRegister = (data) => {
    dispatch(register(data));
  };

  return (
    <div>
      <h1 className="page-title">Register page</h1>
      <RegisterForm onSubmit={onRegister} />
    </div>
  );
};

export default RegisterPage;
