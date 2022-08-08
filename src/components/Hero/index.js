import React, { useState } from 'react';
import Navbar from '../Navbar';
//import Sidebar from '../Sidebar';
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn
} from './HeroElements';

const Hero = () => {
  

  return (
    <HeroContainer>
      <Navbar/>
      <HeroContent>
        <HeroItems>
          <HeroH1>Enjoy Delicious food </HeroH1>
          <HeroP>ANYTIME ANYWHERE AT YOUR DOOR</HeroP>
          <HeroBtn>Place Order</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
