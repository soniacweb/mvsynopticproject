import React from "react";
import LazyHero from "react-lazy-hero";
import { Heading } from "../ReusableTheme.styled";

const HeroImage = ({ src, heading }) => {
  return (
    <div>
      <LazyHero imageSrc={src} opacity={0} minHeight={"95vh"}>
        <Heading>{heading}</Heading>
      </LazyHero>
    </div>
  );
};
export default HeroImage;
