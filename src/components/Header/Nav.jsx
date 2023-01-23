import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";
import styled from "styled-components";

export const MenuIcon = styled.div`
  color:${props => props.theme.title};
  font-size:${props => props.theme.fontsm};
`;

export const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1023px) {
    position: absolute;
    top: ${props => props.theme.fontlg};
    left: ${({ showMobileMenu }) => (showMobileMenu ? "0" : "-100%")};
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color:${props => props.theme.title};
    transition: 0.8s all ease;
  }
`;

export const MenuItem = styled.li`
  width: 100%;
  height: 70px;
  cursor: pointer;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: flex-end;
  background-color:${props => props.theme.textSecondary};
  transition: 0.3s all ease;
  hr {
    text-align: center;
    border-bottom: 0.3rem solid ${props => props.theme.body};
    transition: 0.3s all ease;
  }
  &:hover {
    background-color: rgba(17, 103, 177, 0.3);
    transition: 0.3s all ease;
    hr {
      width: 100%;
      transition: 0.3s all ease;
      box-shadow: 1px -10px 20px rgba(42, 157, 244, 0.9);
    }
  }
 
  @media screen and (min-width : 1024px) {
    display: flex;
    width: 100%;
    height: 50px;
    margin: 2%;
    border-radius:${props => props.theme.fontxs};
  }
`;

export const MenuItemLink = styled.a`
  padding: 1rem 3rem;
  color:${props => props.theme.textPrimary};
  font-size:${props => props.theme.fontxs};
  font-weight: 300;
  text-align: center;
  width: 100%;
`;

export const MobileMenuIcon = styled.div`
  display: none;
  @media screen and (max-width: 1023px) {
    display: flex;
    svg {
      animation: ${({ showMobileMenu }) =>
    showMobileMenu ? "rotationMoveInitial" : "rotationMoveReverse"};
      animation-duration: 0.3s;
    }
    @keyframes rotationMoveInitial {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(90deg);
      }
    }
    @keyframes rotationMoveReverse {
      0% {
        transform: rotate(90deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }
  }
`;

const Nav = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleShowMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  return (
    <>
      <MenuIcon>
        <MobileMenuIcon onClick={() => handleShowMobileMenu()}>
          {showMobileMenu ? <FaTimes /> : <FaBars />}
        </MobileMenuIcon>

        <Menu showMobileMenu={showMobileMenu}>
          <MenuItem onClick={() => handleShowMobileMenu()}>
            <MenuItemLink><Link to="/">HOME</Link></MenuItemLink>
            <hr />
          </MenuItem>
          <MenuItem onClick={() => handleShowMobileMenu()}>
            <MenuItemLink> <Link to="products">PRODUCTS</Link></MenuItemLink>
            <hr />
          </MenuItem>
          <MenuItem onClick={() => handleShowMobileMenu()}>
            <MenuItemLink><Link to="contact">CONTACT</Link></MenuItemLink>
            <hr />
          </MenuItem>
          <MenuItem onClick={handleShowMobileMenu} >
            <MenuItemLink><Link to="cart">CART</Link></MenuItemLink>
            <hr />
          </MenuItem>
        </Menu>
      </MenuIcon>

    </>
  );
};

export default Nav;