import React from "react";

import {
  SubscribeSection,
  SubscribeTextPart,
  SubscribeMainText,
  SubscribeSubText,
  SubscribeButton,
  SubscribeButtonPart,
  SubscribeMainTextP2,
} from "./subscribe.styles";

const Subscribe = () => {
  return (
    <SubscribeSection>
      <SubscribeTextPart>
        <SubscribeMainText>Subscribe Now for</SubscribeMainText>
        <SubscribeMainTextP2>Get Special Features!</SubscribeMainTextP2>
        <SubscribeSubText>
          Let's subscribe with us and find the fun.
        </SubscribeSubText>
      </SubscribeTextPart>
      <SubscribeButtonPart>
        <SubscribeButton>Subscribe Now</SubscribeButton>
      </SubscribeButtonPart>
    </SubscribeSection>
  );
};

export default Subscribe;
