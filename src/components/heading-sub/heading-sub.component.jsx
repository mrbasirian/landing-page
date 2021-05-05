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
  LogoCount,
  LogoName,
} from "./heading-sub.styles";

const headingSub = () => {
  return (
    <HeadingSubContainer>
      <ItemsContainer>
        <LogoUser src={Logouser} alt="logo-User" />
        <DetailsLogoContainer>
          <LogoCount>90+</LogoCount>
          <LogoName>Users</LogoName>
        </DetailsLogoContainer>
      </ItemsContainer>
      <ItemsContainer>
        <LogoLocation src={Logolocation} alt="logo-Location" />
        <DetailsLogoContainer>
          <LogoCount>30+</LogoCount>
          <LogoName>Locations</LogoName>
        </DetailsLogoContainer>
      </ItemsContainer>
      <ItemsContainer>
        <LogoServer src={Logoserver} alt="logo-Server" />
        <DetailsLogoContainer>
          <LogoCount>50+</LogoCount>
          <LogoName>Servers</LogoName>
        </DetailsLogoContainer>
      </ItemsContainer>
    </HeadingSubContainer>
  );
};

export default headingSub;
