import React from "react";

import Headingimage from "../../assets/heading-image.png";

import {
  HeadingContainer,
  HeadingTextBox,
  HeadingMainText,
  HeadingSubText,
  ButtonIcon,
  HeadingImage,
} from "./heading-main.styles";

const HeadingMain = () => {
  return (
    <HeadingContainer>
      <HeadingTextBox>
        <HeadingMainText>
          Want anything to be easy with LaslesVPN.
        </HeadingMainText>
        <HeadingSubText>
          Provide a network for all your needs with ease and fun using LaslesVPN
          discover interesting features from us.
        </HeadingSubText>
        <ButtonIcon>Get Started</ButtonIcon>
      </HeadingTextBox>
      <HeadingImage src={Headingimage} alt="heading-image" />
    </HeadingContainer>
  );
};

export default HeadingMain;
