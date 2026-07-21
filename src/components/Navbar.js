import React, { useState } from "react";
import {
  HamburgerMenu,
  HamburgerSubMenu,
  HamburgerLink,
  Nav,
  NavLogo,
  NavLink,
  NavMenu,
} from "./Navbar/NavbarElements";

const Navbar = () => {
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);

  const onHamburgerMenuClick = () => {
    // console.log("onHamburgerMenuClick");

    setHamburgerMenuOpen((current) => !current);
  };

  return (
    <Nav>
      <NavLogo to="/" onClick={onHamburgerMenuClick}>
        Dalton Mangrum
      </NavLogo>
      <HamburgerMenu onClick={onHamburgerMenuClick} />
      {hamburgerMenuOpen === true && (
        // <ul>
        //   <li onClick={onHamburgerMenuClick}>
        //     <NavLink to="/" activeStyle>
        //       Home
        //     </NavLink>
        //   </li>
        // </ul>
        <HamburgerSubMenu>
          <HamburgerLink to="/" end onClick={onHamburgerMenuClick}>
            Home
          </HamburgerLink>
          <HamburgerLink to="/about" onClick={onHamburgerMenuClick}>
            About
          </HamburgerLink>
          <HamburgerLink
            to="/contact"
            onClick={onHamburgerMenuClick}
          >
            Contact
          </HamburgerLink>
          <HamburgerLink
            to="/portfolio"
            onClick={onHamburgerMenuClick}
          >
            Portfolio
          </HamburgerLink>
        </HamburgerSubMenu>
      )}
      <NavMenu>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/about">
          About
        </NavLink>
        <NavLink to="/contact">
          Contact
        </NavLink>
        <NavLink to="/portfolio">
          Portfolio
        </NavLink>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
