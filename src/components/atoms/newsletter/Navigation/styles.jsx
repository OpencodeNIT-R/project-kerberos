import { styled } from 'styled-components';

export const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const PageNavigation = styled.div`
  display: flex;
  gap: 10px;

  span {
    border-radius: 50%;
    width: 20px;
    height: 20px;
    background-color: grey;

    &:hover,
    &:focus,
    &:active {
      cursor: pointer;
      background-color: #222;
    }
  }

  span.active {
    background-color: #000;
  }
`;

export const NavButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: ${props => props.theme.colors.secondary};

  &:disabled {
    cursor: not-allowed;
    color: grey;
  }
`;
