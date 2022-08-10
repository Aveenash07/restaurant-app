import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Dish of the Month</h1>
      <p>Salmon fish with the special sauce.</p>
      <FeatureButton>Try it before you miss it</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;
