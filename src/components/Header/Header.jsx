import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import Input from '../Form/Input';

const Header = ({ setFilter }) => {
  return (
    <header className="nav-bar">
      <h1>Movies App</h1>
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
    </header>
  );
};

export default Header;
