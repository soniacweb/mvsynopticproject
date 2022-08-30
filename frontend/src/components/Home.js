import React from "react";
import { TextContainer, OrangeSpan } from "./ReusableTheme.styled";
import HeroImage from "./LazyHero/HeroImage";
import QuiltedImageList from "./reusableComponents/ReusableImageList";

const Home = () => {
  return (
    <div>
      <HeroImage
        src={"https://i.imgur.com/XB5cpyl.jpg"}
        heading={"Just relax and..."}
      />

      {/* <TextContainer>
        Order your <OrangeSpan>favourate meals</OrangeSpan> at your table
        through our app!
      </TextContainer> */}

      {/* <QuiltedImageList /> */}
    </div>
  );
};

export default Home;
