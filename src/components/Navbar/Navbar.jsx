import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import NavbarMenu from './NavbarMenu/NavbarMenu';
import NavbarAuth from './NavbarAuth/NavbarAuth';
import NavbarUser from './NavbarUser/NavbarUser';

import { isUserLogin } from '../../redux/auth/auth-selectors';

import styles from './NavBar.module.css';

const Navbar = () => {
  const isLogin = useSelector(isUserLogin);

  const buildLinkClass = ({ isActive }) => {
    return clsx(styles.logoLink, isActive && styles.active);
  };

  return (
    <div className={styles.navbar}>
      <div className="container">
        <div className={styles.navbarRow}>
          <NavLink className={buildLinkClass} to="/my-movies">
            Logo
          </NavLink>
          <NavbarMenu />
          {!isLogin && <NavbarAuth />}
          {isLogin && <NavbarUser />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
