import React from "react";

import Hugeglobal from "../../assets/Hugeglobal.png";
import netflix from "../../assets/netflix.png";
import amazon from "../../assets/amazon.png";
import reddit from "../../assets/reddit.png";
import discord from "../../assets/discord.png";
import spotify from "../../assets/spotify.png";

import {
  GlobalSection,
  GlobalMainText,
  GlobalMainTextP2,
  GlobalSubText,
  GlobalSubTextP2,
  ImageBox,
  ImageWorld,
  LogoBox,
  LogoNetflix,
  LogoReddit,
  LogoAmazon,
  LogoDiscord,
  LogoSpotify,
  LogoBoxItem,
} from "./global.styles";

const Global = () => {
  return (
    <GlobalSection>
      <GlobalMainText>Huge Global Network </GlobalMainText>
      <GlobalMainTextP2>of Fast VPN</GlobalMainTextP2>
      <GlobalSubText>
        See LaslesVPN everywhere to make it easier for you when you move
      </GlobalSubText>
      <GlobalSubTextP2>locations.</GlobalSubTextP2>
      <ImageBox>
        <ImageWorld src={Hugeglobal} alt="image-world" />
      </ImageBox>
      <LogoBox>
        <LogoBoxItem>
          <LogoNetflix src={netflix} alt="Netflix" />
          <LogoReddit src={reddit} alt="Reddit" />
          <LogoAmazon src={amazon} alt="Amazon" />
          <LogoDiscord src={discord} alt="Discord" />
          <LogoSpotify src={spotify} alt="Spotify" />
        </LogoBoxItem>
      </LogoBox>
    </GlobalSection>
  );
};

export default Global;
