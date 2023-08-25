import React from 'react';
import styled from 'styled-components';
import img from './img.png';
import wallpaper from './wallpaper.png';

const Hero = () => {
    return (
        <HeroWrapper>
            <HeroContent>
                <img src={img}
                    alt="Small Image"/>
            </HeroContent>
        </HeroWrapper>
    );
};

export default Hero;

const HeroWrapper = styled.div `
  background-image: url(${wallpaper});
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroContent = styled.div `
  text-align: center;
  color: #fff;
  padding: 2rem;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 768px) {
    padding: 1rem;

    h1 {
      font-size: 2rem;
      margin-bottom: 0.5rem;
    }
  }
`;
