import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

import styles from './NavbarAuth.module.css';

const NavbarAuth = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(styles.link, isActive && styles.active);
  };
  return (
    <div>
      <NavLink className={buildLinkClass} to="/register">
        Register
      </NavLink>

      <NavLink className={buildLinkClass} to="/login">
        Login
      </NavLink>
    </div>
  );
};

export default NavbarAuth;
