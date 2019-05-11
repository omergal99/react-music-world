import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <nav className="nav-bar flex wrap space-between">
    <div className="logo">
      <NavLink exact to="/" title="Logo">Logo</NavLink>
    </div>
    <div className="links flex wrap">
      <NavLink to="/MusicPlayer" title="Player">Player</NavLink>
      <NavLink to="/musicRooms" title="Channels">Channels</NavLink>
      <NavLink to="/login" title="Login">Login</NavLink>
    </div>
  </nav>
)

export default NavBar;