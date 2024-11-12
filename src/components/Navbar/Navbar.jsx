import { Link } from 'react-router-dom';

import styles from './Navbar.module.css';

const Navbar = () => {
  const isLogin = true;

  return (
    <div className={styles.navbar}>
      <div className="container">
        <div className={styles.navbarRow}>
          <Link to="/">Logo</Link>
          <div>NavbarMenu</div>

          {!isLogin && <div>NavbarAuth</div>}
          {isLogin && <div>NavbarUser</div>}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
