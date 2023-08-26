import React from 'react';
import styled from 'styled-components';
import sth from './img.png';
import wallpaper from './wallpaper.png';
import { HeroWrapper,HeroContent } from './styles';

const Hero = () => {
    return (
        <HeroWrapper>
            <HeroContent>
                <img src={sth}
                    alt="Small Image"/>
            </HeroContent>
        </HeroWrapper>
    );
};

export default Hero;

