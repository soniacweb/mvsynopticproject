import React from "react";
import { TextContainer, Text, OrangeSpan } from "./ReusableTheme.styled";
import HeroImage from "./LazyHero/HeroImage";
import QuiltedImageList from "./reusableComponents/ReusableImageList";

const Home = () => {
  return (
    <div>
      <HeroImage
        maxWidth="100%"
        height="auto"
        p={0}
        m={0}
        src={"https://i.imgur.com/XB5cpyl.jpg"}
        heading={"Just relax and..."}
      />

      <TextContainer maxWidth="lg">
        <Text>
          Order your <OrangeSpan>favourate meals</OrangeSpan> at your table
          through our app!
        </Text>
      </TextContainer>

      <QuiltedImageList />
    </div>
  );
};

export default Home;
