import React from "react";

import Logouser from "../../assets/User.svg";
import Logolocation from "../../assets/Location.svg";
import Logoserver from "../../assets/Server.svg";

import {
  HeadingSubContainer,
  ItemsContainer,
  LogoUser,
  LogoLocation,
  LogoServer,
  DetailsLogoContainer,
  Details,
  LogoCount,
  LogoName,
} from "./heading-sub.styles";

const headingSub = () => {
  return (
    <HeadingSubContainer>
      <ItemsContainer>
        <Details>
          <LogoUser src={Logouser} alt="logo-User" />
          <DetailsLogoContainer>
            <LogoCount>90+</LogoCount>
            <LogoName>Users</LogoName>
          </DetailsLogoContainer>
        </Details>
      </ItemsContainer>
      <ItemsContainer>
        <Details>
          <LogoLocation src={Logolocation} alt="logo-Location" />
          <DetailsLogoContainer>
            <LogoCount>30+</LogoCount>
            <LogoName>Locations</LogoName>
          </DetailsLogoContainer>
        </Details>
      </ItemsContainer>
      <ItemsContainer>
        <Details>
          <LogoServer src={Logoserver} alt="logo-Server" />
          <DetailsLogoContainer>
            <LogoCount>50+</LogoCount>
            <LogoName>Servers</LogoName>
          </DetailsLogoContainer>
        </Details>
      </ItemsContainer>
    </HeadingSubContainer>
  );
};

export default headingSub;
