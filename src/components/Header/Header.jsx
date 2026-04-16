import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import Input from '../Form/Input';
import { RiMenu3Line } from 'react-icons/ri';

const Header = ({ setFilter }) => {
  return (
    <header className="nav-bar">
      <NavLink style={{ textDecoration: 'none' }} to="/">
        <h1>MOVIES</h1>
      </NavLink>
      <div className="nav-menu">
        <nav>
          <ul>
            <NavLink className="nav-link" to="/">
              <li>Home</li>
            </NavLink>
            <NavLink className="nav-link" to="/in-theaters">
              <li>In theaters</li>
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
      <button className="nav-toggle">
        MENU
        <RiMenu3Line />
      </button>
    </header>
  );
};

export default Header;
