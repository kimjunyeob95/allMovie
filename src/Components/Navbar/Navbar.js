import React, { useState, useEffect } from 'react';
import { FaTimes, FaBars, FaMailBulk, FaHome, FaFilm } from 'react-icons/fa';
import { Button } from '../../@Styles/common';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemBtn,
  NavBtnLink,
} from './NavbarElements';
import { IconContext } from 'react-icons/lib';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => {
    setClick(!click);
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);
  return (
    <React.Fragment>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavIcon />
            AllMovies
          </NavLogo>
          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>
          <NavMenu onClick={handleClick} click={click}>
            <NavItem>
              <NavLinks to="/">
                <FaHome />
                Home
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/movies">
                <FaFilm />
                Movies
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/contact">
                <FaMailBulk />
                Contact
              </NavLinks>
            </NavItem>
            <NavItemBtn>
              {button ? (
                <NavBtnLink to="/sign-up">
                  <Button primary>SIGN UP</Button>
                </NavBtnLink>
              ) : (
                <NavBtnLink to="/sign-up">
                  <Button fontBig primary>
                    SIGN UP
                  </Button>
                </NavBtnLink>
              )}
            </NavItemBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </React.Fragment>
  );
};

export default Navbar;
