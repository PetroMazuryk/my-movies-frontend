import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import { register } from '../../redux/auth/auth-operations';
import TitleText from '../../components/TitleText/TitleText';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const onRegister = (data) => {
  //   dispatch(register(data));
  // };
  const onRegister = (data) => {
    dispatch(register(data))
      .unwrap()
      .then((res) => {
        if (!res.user.verify) {
          navigate('/verify-info');
        } else {
          navigate('/my-movies');
        }
      })
      .catch((err) => {
        console.error('Register error:', err);
      });
  };

  return (
    <div>
      <TitleText>Register page</TitleText>
      <RegisterForm onSubmit={onRegister} />
    </div>
  );
};

export default RegisterPage;
