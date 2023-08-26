import React from 'react';
import sth from './img.png';
import {HeroWrapper, HeroContent} from './styles';

const Hero = () => {
    return (<HeroWrapper>
        <HeroContent>
            <img src={sth}
                alt="Small Image"/>
        </HeroContent>
    </HeroWrapper>);
};


export default Hero;


