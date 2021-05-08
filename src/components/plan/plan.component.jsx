import React from "react";

import planImage from "../../assets/planeimage.png";
import checkModelTwo from "../../assets/check-model-two.svg";

import {
  PlanSection,
  PlanMainText,
  PlanSubText,
  PlanSubTextN2,
  PlanImage,
  PlanModels,
  PlanBox,
  PlanBoxN2,
  NamePlan,
  ItemsBox,
  ItemsBoxN2,
  ItemsBoxN3,
  Items,
  CheckModelTwo,
  ItemsName,
  FreePlanPrice,
  FreePlanPriceDetail,
  SelectButton,
  SelectButtonN2,
} from "./plan.styles";

class Plan extends React.Component {
  render() {
    return (
      <PlanSection>
        <PlanMainText>Choose Your Plan</PlanMainText>
        <PlanSubText>
          Let's choose the package that is best for you and explore it happily
          and
        </PlanSubText>
        <PlanSubTextN2> cheerfully.</PlanSubTextN2>
        <PlanModels>
          <PlanBox>
            <PlanImage src={planImage} alt="plan-image" />
            <NamePlan>Free Plan</NamePlan>
            <ItemsBox>
              <Items>
                <CheckModelTwo src={checkModelTwo} alt="check-model-two" />
                <ItemsName>Unlimited Bandwitch</ItemsName>
              </Items>
              <Items>
                <CheckModelTwo src={checkModelTwo} alt="check-model-two" />
                <ItemsName>Encrypted Connection</ItemsName>
              </Items>
              <Items>
                <CheckModelTwo src={checkModelTwo} alt="check-model-two" />
                <ItemsName>No Traffic Logs</ItemsName>
              </Items>
              <Items>
                <CheckModelTwo src={checkModelTwo} alt="check-model-two" />
                <ItemsName>Works on All Devices</ItemsName>
              </Items>
            </ItemsBox>
            <FreePlanPrice className="FreePlanPrice">Free</FreePlanPrice>
            <SelectButton>Select</SelectButton>
          </PlanBox>
          <PlanBox>
            <PlanImage src={planImage} alt="plan-image" />
            <NamePlan>Standard Plan</NamePlan>
            <ItemsBoxN2>
              <Items>
                <CheckModelTwo src={checkModelTwo} alt="check-model-two" />
                <ItemsName>Unlimited Bandwitch</ItemsName>
              </Items>
              <Items>
                <CheckModelTwo src={checkModelTwo} alt="check-model-two" />
                <ItemsName>Encrypted Connection</ItemsName>
              </Items>
              <Items>
                <CheckModelTwo src={checkModelTwo} alt="check-model-two" />
                <ItemsName>Yes Traffic Logs</ItemsName>
              </Items>
              <Items>
                <CheckModelTwo src={checkModelTwo} alt="check-model-two" />
                <ItemsName>Works on All Devices</ItemsName>
              </Items>
              <Items>
                <CheckModelTwo src={checkModelTwo} alt="check-model-two" />
                <ItemsName>Connect Anyware</ItemsName>
              </Items>
            </ItemsBoxN2>
            <FreePlanPrice>
              $9<FreePlanPriceDetail> / mo</FreePlanPriceDetail>
            </FreePlanPrice>
            <SelectButton>Select</SelectButton>
          </PlanBox>
          <PlanBoxN2>
            <PlanImage src={planImage} alt="plan-image" />
            <NamePlan>Premium Plan</NamePlan>
            <ItemsBoxN3>
              <Items>
                <CheckModelTwo src={checkModelTwo} alt="check-model-two" />
                <ItemsName>Unlimited Bandwitch</ItemsName>
              </Items>
              <Items>
                <CheckModelTwo src={checkModelTwo} alt="check-model-two" />
                <ItemsName>Encrypted Connection</ItemsName>
              </Items>
              <Items>
                <CheckModelTwo src={checkModelTwo} alt="check-model-two" />
                <ItemsName>Yes Traffic Logs</ItemsName>
              </Items>
              <Items>
                <CheckModelTwo src={checkModelTwo} alt="check-model-two" />
                <ItemsName>Works on All Devices</ItemsName>
              </Items>
              <Items>
                <CheckModelTwo src={checkModelTwo} alt="check-model-two" />
                <ItemsName>Connect Anyware</ItemsName>
              </Items>
              <Items>
                <CheckModelTwo src={checkModelTwo} alt="check-model-two" />
                <ItemsName>Get New Features</ItemsName>
              </Items>
            </ItemsBoxN3>
            <FreePlanPrice>
              $12<FreePlanPriceDetail> / mo</FreePlanPriceDetail>
            </FreePlanPrice>
            <SelectButtonN2>Select</SelectButtonN2>
          </PlanBoxN2>
        </PlanModels>
      </PlanSection>
    );
  }
}

export default Plan;
