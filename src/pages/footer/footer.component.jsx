import React from "react";

import logo from "../../assets/Vector.svg";
import facebook from "../../assets/facebook.svg";
import twiter from "../../assets/twiter.svg";
import instagram from "../../assets/instagram.svg";

import {
  BoldTextPart,
  FacebookButton,
  FacebookLogo,
  FooterAppLogo,
  FooterButton,
  FooterButtonEarn,
  FooterButtonEngage,
  FooterLogo,
  FooterSection,
  FooterSectionButton,
  FooterSectionButtonP2,
  FooterSectionP1,
  FooterSectionP2,
  FooterSectionP3,
  FooterSectionP4,
  FooterTextPart,
  InstagramButton,
  InstagramLogo,
  Logo,
  LogoName,
  MainText,
  NameBoldPart,
  Text,
  Textpart,
  TwiterButton,
  TwiterLogo,
} from "./footer.styles";

class Footer extends React.Component {
  render() {
    return (
      <FooterSection>
        <FooterSectionP1>
          <FooterLogo>
            <Logo src={logo} alt="logo" />
            <LogoName>
              Lasles
              <NameBoldPart>VPN</NameBoldPart>
            </LogoName>
          </FooterLogo>
          <FooterTextPart>
            <Textpart>
              <BoldTextPart>LaslesVPN </BoldTextPart>
              is a private virtual network that has unique features and has high
              security.
            </Textpart>
          </FooterTextPart>
          <FooterAppLogo>
            <FacebookButton>
              <FacebookLogo src={facebook} alt="facebook-logo" />
            </FacebookButton>
            <TwiterButton>
              <TwiterLogo src={twiter} alt="twiter-logo" />
            </TwiterButton>
            <InstagramButton>
              <InstagramLogo src={instagram} alt="instagram-logo" />
            </InstagramButton>
          </FooterAppLogo>
          <Text>©2020LaslesVPN</Text>
        </FooterSectionP1>
        <FooterSectionButton>
          <FooterSectionP2>
            <MainText>Product</MainText>
            <FooterButton>Download </FooterButton>
            <FooterButton>Pricing</FooterButton>
            <FooterButton>Loacations</FooterButton>
            <FooterButton>Server</FooterButton>
            <FooterButton>Countries</FooterButton>
            <FooterButton>Blog</FooterButton>
          </FooterSectionP2>
          <FooterSectionP3>
            <MainText>Engage</MainText>
            <FooterButtonEngage>LaselesVPN ?</FooterButtonEngage>
            <FooterButtonEngage>FAQ</FooterButtonEngage>
            <FooterButtonEngage>Totorials</FooterButtonEngage>
            <FooterButtonEngage>About Us</FooterButtonEngage>
            <FooterButtonEngage>Privacy Policy</FooterButtonEngage>
            <FooterButtonEngage>Terms of Service</FooterButtonEngage>
          </FooterSectionP3>
        </FooterSectionButton>
        <FooterSectionButtonP2>
          <FooterSectionP4>
            <MainText>Earn Money</MainText>
            <FooterButtonEarn>Affiliate</FooterButtonEarn>
            <FooterButtonEarn>Become Partner</FooterButtonEarn>
          </FooterSectionP4>
        </FooterSectionButtonP2>
      </FooterSection>
    );
  }
}

export default Footer;
