import styled from 'styled-components';

export const NavContainer = styled.nav`
  width: 100%;
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
  }
`;

export const NavChild = styled.nav`
    width: 100%; height: 135; , background: rgba(217, 217, 217, 0); display:flex; justify-content:space-between; align-items:center; z-index:9999;
    font-weight:500
    `;

export const List = styled.li`
  list-style: none;
  margin-left: 64px;
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

  @media only screen and (max-width: 820px) {
    // margin-right: -300px
  }
`;

export const Hamburger = styled.img`
  padding-left: 3vw;
  // width:100%;
  height: 50%;
  @media only screen and (min-width: 1024px) {
    display: none;
  }
`;

export const Buttondiv = styled.div`
  display: inline-flex;
  align-items: center;
`;
