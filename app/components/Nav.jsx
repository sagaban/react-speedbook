import React from 'react';
import NavLink from './NavLink';

const Nav = () => (
  <nav className="nav">
    <NavLink to="/" brand>ReactSpeed</NavLink>
    <NavLink to="/book">Book</NavLink>
    <NavLink to="/charts">Charts</NavLink>
    <NavLink to="/embeds">Embeds</NavLink>
    <NavLink to="/forms">Forms</NavLink>
    <NavLink to="/custom">Custom</NavLink>
    <NavLink to="/workflow">Workflow</NavLink>
    <NavLink to="/buttons">Buttons</NavLink>
    <NavLink to="/ajax">Ajax</NavLink>
    <NavLink to="/infographics">Infographics</NavLink>
    <NavLink
      href="https://github.com/manavsehgal/react-speed-book"
    >
        Code
    </NavLink>
    <NavLink
      href="https://manavsehgal.github.io/react-speed-demos/"
    >
        Demos
    </NavLink>
    <NavLink href="https://reactspeed.com">
      Website
    </NavLink>
  </nav>
);

export default Nav;
