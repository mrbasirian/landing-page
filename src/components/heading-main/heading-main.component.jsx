import React from "react";

import Headingimage from "../../assets/heading-image.png";

import {
  HeadingContainer,
  HeadingTextBox,
  HeadingMainText,
  MainBoldPart,
  HeadingSubText,
  SubBoldPart,
  ButtonIcon,
  HeadingImage,
  ImageDetails,
} from "./heading-main.styles";

const HeadingMain = () => {
  return (
    <HeadingContainer>
      <HeadingTextBox>
        <HeadingMainText>
          Want anything to be easy with
          <MainBoldPart> LaslesVPN.</MainBoldPart>
        </HeadingMainText>
        <HeadingSubText>
          Provide a network for all your needs with ease and fun using{" "}
          <SubBoldPart> LaslesVPN </SubBoldPart>
          discover interesting features from us.
        </HeadingSubText>
        <ButtonIcon>Get Started</ButtonIcon>
      </HeadingTextBox>
      <HeadingImage>
        <ImageDetails src={Headingimage} alt="heading-image" />
      </HeadingImage>
    </HeadingContainer>
  );
};

export default HeadingMain;
