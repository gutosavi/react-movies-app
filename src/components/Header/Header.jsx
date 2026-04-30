import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import InputSearch from '../Form/InputSearch';
import { RiMenu3Line } from 'react-icons/ri';

const Header = ({ setFilter }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const menuRef = React.useRef(null);
  const buttonRef = React.useRef(null);

  console.log('Eu sou o primeiro:', isOpen);

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
    console.log(isOpen);
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
    <header className="nav-bar">
      <NavLink style={{ textDecoration: 'none' }} to="/">
        <h1>MOVIES</h1>
      </NavLink>
      <div className="nav-menu">
        <nav ref={menuRef}>
          <ul className={isOpen ? 'active' : ''}>
            <NavLink className="nav-link" to="/">
              <li>Home</li>
            </NavLink>
            <NavLink className="nav-link" to="/in-theaters">
              <li>On Display</li>
            </NavLink>
            <NavLink className="nav-link" to="/contact">
              <li>Contact</li>
            </NavLink>
          </ul>
        </nav>
        <div className="nav-input">
          <InputSearch setFilter={setFilter} />
        </div>
      </div>
      <button ref={buttonRef} className="nav-toggle" onClick={toggleMenu}>
        MENU
        <RiMenu3Line />
      </button>
    </header>
  );
};

export default Header;
