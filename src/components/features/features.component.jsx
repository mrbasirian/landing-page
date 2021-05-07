import React from "react";

import Check from "../../assets/check.svg";
import featuresImage from "../../assets/featuresimage.png";

import {
  CheckIcon,
  FeaturesBox,
  FeaturesImage,
  FeaturesImageBox,
  FeaturesMainText,
  FeaturesSubText,
  FeaturesTextBox,
  ItemsName,
  ItemsTextBox,
} from "./features.styles";

const Features = () => {
  return (
    <FeaturesBox>
      <FeaturesImageBox>
        <FeaturesImage src={featuresImage} alt="features-image" />
      </FeaturesImageBox>
      <FeaturesTextBox>
        <FeaturesMainText>
          We Provide Many Features You Can Use
        </FeaturesMainText>
        <FeaturesSubText>
          You can explore the features that we provide with fun and have their
          own functions each feature.
        </FeaturesSubText>
        <ItemsTextBox>
          <CheckIcon src={Check} alt="check-logo" />
          <ItemsName>Powerfull online protection.</ItemsName>
        </ItemsTextBox>
        <ItemsTextBox>
          <CheckIcon src={Check} alt="check-logo" />
          <ItemsName>Internet without borders.</ItemsName>
        </ItemsTextBox>
        <ItemsTextBox>
          <CheckIcon src={Check} alt="check-logo" />
          <ItemsName>Supercharged VPN</ItemsName>
        </ItemsTextBox>
        <ItemsTextBox>
          <CheckIcon src={Check} alt="check-logo" />
          <ItemsName>No specific time limits.</ItemsName>
        </ItemsTextBox>
      </FeaturesTextBox>
    </FeaturesBox>
  );
};
export default Features;
