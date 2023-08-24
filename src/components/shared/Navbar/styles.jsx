import styled from 'styled-components';
// import Link from 'next/link';
export const NavContainer = styled.nav`
  width: 100%;
  position: fixed;
  height: 100px;
  background: rgba(255, 255, 255, 0.2);
  z-index: 100;
  box-shadow:
    1px 12px 16px 0px rgba(0, 0, 0, 0.25) inset,
    11px -10px 25px 10px rgba(255, 255, 255, 0.3) inset;
  backdrop-filter: blur(25px);
  align-items: center;
  display: flex;
  position: relative;
  padding: 0 6vw 0 7vw;
  font-family: Roboto, sans-serif;
  font-weight: 500;

  @media only screen and (max-width: 520px) {
    box-shadow:
      0px 11px 12px 0px rgba(0, 0, 0, 0.15) inset,
      11px -10px 25px 10px rgba(255, 255, 255, 0.3) inset;

    padding-right: 5vh;
  }
`;
export const Logo = styled.img`
  @media only screen and (max-width: 913px) {
    width: 65px;
    height: auto;
  }
`;
export const NavChild = styled.nav`
    width: 100%; height: 135; , background: rgba(217, 217, 217, 0); display:flex; justify-content:space-between; align-items:center; z-index:9999;
    font-weight:500
    `;

export const List = styled.li`
  list-style: none;
  margin-left: 64px;
  cursor: pointer;
`;

export const Image = styled.img`
  width:;
  height: 40%;
`;

export const Content = styled.nav`
  display: flex;

  justify-content: space-between;
  // margin-left: 2rem
  @media only screen and (max-width: 913px) {
    display: none;
    position: absolute;
    background-size: cover;
    height: 16px;
    width: 16px;
  }
`;

export const Services = styled.nav`
  display: flex;
  align-items: center;
  justify-content: end;
`;

export const Contact = styled.button`
  background-color: #66ff00;
  border: none;
  padding: 1vh;
  width: 106px;
  height: 38px;
  cursor: pointer;
  &:hover {
    background-color: #245f02;
    transition: background-color 0.5s ease;
  }
`;

export const Buttondiv = styled.div`
  display: inline-flex;
  align-items: center;
`;
export const StyledHamburger = styled.button`
  height: 2em;
  width: 2em;
  background: inherit;
  display: block;
  padding: 0.5em;
  border: 1px solid black;
  position: relative;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  &::before,
  &::after {
    content: '';
    background: black;
    height: 2px;
    width: 100%;
    position: absolute;
    display: block;
    left: 0;
    transition: all 0.7s;
    left: 3vh;
  }
  &:active,
  &:focus {
    outline-color: #fff;
  }
  &::before {
    top: ${({ toggleMenu }) => (toggleMenu ? '12px' : '8px')};
    transform: ${({ toggleMenu }) => (toggleMenu ? 'rotate(40deg)' : null)};
  }
  &::after {
    width: ${({ toggleMenu }) => (toggleMenu ? '100%' : '80%')};
    bottom: ${({ toggleMenu }) => (toggleMenu ? '12px' : '8px')};
    transform: ${({ toggleMenu }) => (toggleMenu ? 'rotate(-40deg)' : null)};
  }
  @media all and (min-width: 913px) {
    display: none;
  }
`;
export const Navopen = styled.div`
  z-index: 100;
  height: 100vh;
  width: 100vw;
  padding-right: 7vh;
  background-color: #2a2a2a;
  margin-top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  y-overflow: hidden;
  vertically-align: center;
  transition: all;
  transition-duration: 1s;
  transition-property: ease-in;
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1) @media all and (min-width: 913px) {
    display: none;
  }
`;
