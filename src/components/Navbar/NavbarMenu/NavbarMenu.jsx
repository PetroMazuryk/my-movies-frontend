import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import { isUserLogin } from '../../../redux/auth/auth-selectors';

import items from './navbarMenuItems.json';

import styles from './NavbarMenu.module.css';

const NavbarMenu = () => {
  const isLogin = useSelector(isUserLogin);
  const menuItems = !isLogin ? items.filter((item) => !item.private) : items;

  const buildLinkClass = ({ isActive }) => {
    return clsx(styles.link, isActive && styles.active);
  };

  const elements = menuItems.map(({ id, link, text }) => {
    return (
      <li key={id}>
        <NavLink to={link} className={buildLinkClass}>
          {text}
        </NavLink>
      </li>
    );
  });

  return <ul className={styles.menu}>{elements}</ul>;
};

export default NavbarMenu;
