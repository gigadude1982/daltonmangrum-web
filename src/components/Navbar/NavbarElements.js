import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  position: sticky;
  top: 0;
  height: var(--nav-height, 70px);
  background: rgba(28, 58, 28, 0.9);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(140, 160, 120, 0.12);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: max(1.5rem, calc((100vw - 1100px) / 2));
  padding-right: max(1.5rem, calc((100vw - 1100px) / 2));
  z-index: 100;
`;

export const NavLogo = styled(Link)`
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 0;
  text-decoration: none;
  cursor: pointer;
  color: #c49a5c;
  transition: color 0.2s ease;

  &:hover {
    color: #d4aa6c;
  }
`;

export const NavLink = styled(Link)`
  color: #b8935a;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.2s ease, background 0.2s ease;
  &.active {
    color: #d4aa6c;
    background: rgba(196, 154, 92, 0.12);
  }
  &:hover {
    color: #d4aa6c;
    background: rgba(196, 154, 92, 0.12);
  }
`;

export const HamburgerMenu = styled(FaBars)`
  display: none;
  color: #b8935a;
  cursor: pointer;
  font-size: 1.2rem;
  transition: color 0.2s ease;
  &:hover {
    color: #d4aa6c;
  }
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const HamburgerSubMenu = styled.div`
  display: none;
  position: absolute;
  top: var(--nav-height, 70px);
  left: 0;
  right: 0;
  background: rgba(28, 58, 28, 0.97);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(140, 160, 120, 0.12);
  padding: 0.75rem 1.25rem 1rem;
  flex-direction: column;
  gap: 0.25rem;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

export const HamburgerLink = styled(Link)`
  color: #b8935a;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.7rem 1rem;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.2s ease, background 0.2s ease;
  &.active {
    color: #d4aa6c;
    background: rgba(196, 154, 92, 0.12);
  }
  &:hover {
    color: #d4aa6c;
    background: rgba(196, 154, 92, 0.12);
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
