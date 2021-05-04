import React from "react";
import logo from "../../assets/Vector.svg";

import {
  HeaderContainer,
  LogoContainer,
  Logo,
  LogoName,
  OptionContainer,
  ItemsContainer,
  ActionContainer,
  SignInContainer,
  SignUpContainer,
} from "./header.styles";

class Header extends React.Component {
  render() {
    return (
      <HeaderContainer>
        <LogoContainer>
          <Logo src={logo} alt="logo" />
          <LogoName>LaslesVPN</LogoName>
        </LogoContainer>
        <OptionContainer>
          <ItemsContainer>Features</ItemsContainer>
          <ItemsContainer>About</ItemsContainer>
          <ItemsContainer>Pricing</ItemsContainer>
          <ItemsContainer>Testimonials</ItemsContainer>
          <ItemsContainer>Help</ItemsContainer>
        </OptionContainer>
        <ActionContainer>
          <SignInContainer>Sign In</SignInContainer>
          <SignUpContainer>Sign Up</SignUpContainer>
        </ActionContainer>
      </HeaderContainer>
    );
  }
}
export default Header;
