import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { current } from '../../redux/auth/auth-operations';

// import hero from '../../images/bg.jpg';
import styles from './AuthLayout.module.css';

const AuthLayout = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <div
      style={{
        // backgroundImage: `url(${hero})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      className={styles.wrapperLayout}
    >
      {children}
    </div>
  );
};

export default AuthLayout;
