/*
  The code below will generate the navigation bar
  Contains Logo + menu + profile button + helper button
*/

// Module:
import { Link } from 'react-router-dom';
// Styles:
import styles from '../../styles/NavBar.module.css';
// Assets:
import logo from '../../assets/applyAI/logo_name.png';
import profile_icon from '../../assets/header/profile_icon.png';
import help_icon from '../../assets/header/help_icon.png';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      
      <div className={styles.navbar_left}>
        <div className={styles.navbar_logo}>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        <ul className={styles.list_box}>
            <li><Link to="/">Home</Link></li>
            {/* <li><Link to="/autoFill">About</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li> */}
            <li><Link to="/profile">Profile</Link></li>
        </ul>
      </div>

      <div className={styles.navbar_icons}>
      {/* {console.log(profile_icon)} */}
          <img src={profile_icon} alt="Profile" />
          <img src={help_icon} alt="Help" />
      </div>

    </nav>
  );
};

export default NavBar;