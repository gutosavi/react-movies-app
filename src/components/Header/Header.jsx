import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import Input from '../Form/Input';
import { RiMenu3Line } from 'react-icons/ri';

const Header = ({ setFilter }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const menuRef = React.useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  React.useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    };
  }, [menuRef]);

  return (
    <header className="nav-bar">
      <NavLink style={{ textDecoration: 'none' }} to="/">
        <h1>MOVIES</h1>
      </NavLink>
      <div className="nav-menu" ref={menuRef}>
        <nav>
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
          <Input setFilter={setFilter} />
        </div>
      </div>
      <button className="nav-toggle" onClick={toggleMenu}>
        MENU
        <RiMenu3Line />
      </button>
    </header>
  );
};

export default Header;
