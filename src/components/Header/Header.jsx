import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
import InputSearch from '../Form/InputSearch';
import { RiMenu3Line } from 'react-icons/ri';

const Header = ({ setFilter }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const menuRef = React.useRef(null);
  const buttonRef = React.useRef(null);

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  React.useEffect(() => {
    const handleClickOutside = (e) => {
      const clickedMenu = menuRef.current?.contains(e.target);
      const clickedButton = buttonRef.current?.contains(e.target);

      if (!clickedMenu && !clickedButton) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  return (
    <header className={styles.navbar}>
      <NavLink style={{ textDecoration: 'none' }} to="/">
        <h1>MOVIES</h1>
      </NavLink>
      <div className={styles.navmenu}>
        <nav ref={menuRef}>
          <ul className={`${styles.menu} ${isOpen ? styles.active : ''}`}>
            <li>
              <NavLink className={styles.navlink} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={styles.navlink} to="/in-theaters">
                On Display
              </NavLink>
            </li>
            <li>
              <NavLink className={styles.navlink} to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className={styles.navinput}>
          <InputSearch setFilter={setFilter} />
        </div>
      </div>
      <button ref={buttonRef} className={styles.navtoggle} onClick={toggleMenu}>
        MENU
        <RiMenu3Line />
      </button>
    </header>
  );
};

export default Header;
