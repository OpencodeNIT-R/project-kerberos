import styled from 'styled-components';
import wallpaper from './wallpaper.png';

export const HeroWrapper = styled.div`
  background-image: url(${wallpaper});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; 
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  

  @media (max-width: 768px) {
    background-size: 100% auto; 
  }
`;

export const HeroContent = styled.div`
  text-align: center;
  color: #fff;
  padding: 2rem;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 88px;
  font-family:Roboto;
 
  img {
    max-width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    padding: 1rem;
    background-size: 100% auto;
  }
`;
