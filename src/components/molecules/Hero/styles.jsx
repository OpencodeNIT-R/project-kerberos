import styled from 'styled-components';
import wallpaper from './wallpaper.png';

export const HeroWrapper = styled.div`
  background-image: url(${wallpaper});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; /* Prevent background image from repeating */
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    background-size: 100% auto; /* Adjust to fit the entire width without cutting off */
  }
`;

export const HeroContent = styled.div`
  text-align: center;
  color: #fff;
  padding: 2rem;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    padding: 1rem;
    background-size: 100% auto;
    

    h1 {
      font-size: 2rem;
      margin-bottom: 0.5rem;
    }
  }
`;
