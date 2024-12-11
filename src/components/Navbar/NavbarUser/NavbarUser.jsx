import { useSelector, useDispatch } from 'react-redux';

import { getUser } from '../../../redux/auth/auth-selectors';

import { logout } from '../../../redux/auth/auth-operations';

import styles from './NavbarUser.module.css';
import EditMovie from '../../EditMovie/EditMovie';

const NavbarUser = () => {
  const { name } = useSelector(getUser);

  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <EditMovie />
      <p className={styles.userTitle}> {name}</p>
      <button className={styles.link} onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

export default NavbarUser;
