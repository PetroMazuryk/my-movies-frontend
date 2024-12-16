import { useDispatch } from 'react-redux';

import LoginForm from '../../components/LoginForm/LoginForm';

import { login } from '../../redux/auth/auth-operations';
import TitleText from '../../components/TitleText/TitleText';

const LoginPage = () => {
  const dispatch = useDispatch();

  const onLogin = (data) => {
    dispatch(login(data));
  };

  return (
    <div className="container">
      <TitleText>Login page</TitleText>
      <LoginForm onSubmit={onLogin} />
    </div>
  );
};

export default LoginPage;
