import styled from 'styled-components';

export const NavContainer = styled.nav`
  width: 100%;
  height: 100px;
  background: rgba(255, 255, 255, 0.2);
  z-index: 100;
  box-shadow:
    1px 12px 16px 0px rgba(0, 0, 0, 0.27) inset,
    11px -10px 25px 10px rgba(255, 255, 255, 0.3) inset;
  backdrop-filter: blur(25px);
  align-items: center;
  display: flex;
  position: relative;
  padding: 0 6vw 0 7vw;
  font-family: Roboto, sans-serif;
`;

export const NavChild = styled.nav`
    width: 100%; height: 135; , background: rgba(217, 217, 217, 0); display:flex; justify-content:space-between; align-items:center; z-index:9999`;

export const List = styled.li`
  list-style: none;
  margin-left: 64px;
`;

export const Image = styled.img`
  width: auto;
`;

export const Content = styled.nav`
  display: flex;

  justify-content: space-between;
  // margin-left: 2rem
`;

export const Contact = styled.button`
  background-color: #66ff00;
  border: none;
  padding: 2vh;
`;
