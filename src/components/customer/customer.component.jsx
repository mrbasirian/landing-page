import React from "react";

import personN1 from "../../assets/personN1.png";
import personN2 from "../../assets/personN2.png";
import personN3 from "../../assets/personN3.png";
import star from "../../assets/star.svg";
import union from "../../assets/Union.svg";
import dot from "../../assets/dot.svg";
import arrowLeft from "../../assets/Arrow-left.svg";
import arrowRight from "../../assets/Arrow-right.svg";

import {
  CustomerSection,
  CustomerMainText,
  CustomerMainTextP2,
  CustomerSubText,
  CustomerSubTextP2,
  CustomerOpinionPart,
  CustomerOpinionN1,
  CustomerSpecification,
  PersonN1,
  PersonN2,
  PersonN3,
  CustomerDetails,
  CustomerName,
  CustomerCity,
  CustomerRate,
  CustomerRateNumber,
  StarLogo,
  Opinion,
  CustomerOpinionN2,
  CustomerSpecificationN2,
  OpinionN2,
  CustomerOpinionN3,
  CustomerRateN2,
  CustomerRateN3,
  CustomerSpecificationN3,
  OpinionN3,
  CustomerButtonPart,
  UdLogo,
  UnionLogo,
  Dotlogo,
  ButtonArrow,
  ButtonArrowLeft,
  LeftArrow,
  ButtonArrowRight,
  RightArrow,
} from "./customer.styles";

const Customer = () => {
  return (
    <CustomerSection>
      <CustomerMainText>Trusted by Thousands of </CustomerMainText>
      <CustomerMainTextP2>Happy Customer</CustomerMainTextP2>
      <CustomerSubText>
        These are the stories of our customers who have joined us with great
      </CustomerSubText>
      <CustomerSubTextP2>
        pleasure when using this crazy feature.
      </CustomerSubTextP2>
      <CustomerOpinionPart>
        <CustomerOpinionN1>
          <CustomerSpecification>
            <PersonN1 src={personN1} alt="person-number-1" />
            <CustomerDetails>
              <CustomerName>Viezh Robert</CustomerName>
              <CustomerCity>Warsaw, Poland</CustomerCity>
            </CustomerDetails>
            <CustomerRate>
              <CustomerRateNumber>4.5</CustomerRateNumber>
              <StarLogo src={star} alt="star-logo" />
            </CustomerRate>
          </CustomerSpecification>
          <Opinion>
            “Wow... I am very happy to use this VPN, it turned out to be more
            than my expectations and so far there have been no problems.
            LaslesVPN always the best”.
          </Opinion>
        </CustomerOpinionN1>
        <CustomerOpinionN2>
          <CustomerSpecificationN2>
            <PersonN2 src={personN2} alt="person-number-2" />
            <CustomerDetails>
              <CustomerName>Yessica Christy</CustomerName>
              <CustomerCity>Shanxi, China</CustomerCity>
            </CustomerDetails>
            <CustomerRateN2>
              <CustomerRateNumber>4.5</CustomerRateNumber>
              <StarLogo src={star} alt="star-logo" />
            </CustomerRateN2>
          </CustomerSpecificationN2>
          <OpinionN2>
            “I like it because I like to travel far and still can connect with
            high speed.”.
          </OpinionN2>
        </CustomerOpinionN2>
        <CustomerOpinionN3>
          <CustomerSpecificationN3>
            <PersonN3 src={personN3} alt="person-number-3" />
            <CustomerDetails>
              <CustomerName>Kim Young Jou</CustomerName>
              <CustomerCity>Seoul, South Korea</CustomerCity>
            </CustomerDetails>
            <CustomerRateN3>
              <CustomerRateNumber>4.5</CustomerRateNumber>
              <StarLogo src={star} alt="star-logo" />
            </CustomerRateN3>
          </CustomerSpecificationN3>
          <OpinionN3>
            “This is very unusual for my business that currently requires a
            virtual private network that has high security.”.
          </OpinionN3>
        </CustomerOpinionN3>
      </CustomerOpinionPart>
      <CustomerButtonPart>
        <UdLogo>
          <UnionLogo src={union} alt="union" />
          <Dotlogo src={dot} alt="dot" />
          <Dotlogo src={dot} alt="dot" />
          <Dotlogo src={dot} alt="dot" />
        </UdLogo>
        <ButtonArrow>
          <ButtonArrowLeft>
            <LeftArrow src={arrowLeft} alt="" />
          </ButtonArrowLeft>
          <ButtonArrowRight>
            <RightArrow src={arrowRight} alt="" />
          </ButtonArrowRight>
        </ButtonArrow>
      </CustomerButtonPart>
    </CustomerSection>
  );
};

export default Customer;
