import { useDispatch } from 'react-redux';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import { register } from '../../redux/auth/auth-operations';
import TitleText from '../../components/TitleText/TitleText';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const onRegister = (data) => {
    dispatch(register(data));
  };

  return (
    <div>
      <TitleText>Register page</TitleText>
      <RegisterForm onSubmit={onRegister} />
    </div>
  );
};

export default RegisterPage;
