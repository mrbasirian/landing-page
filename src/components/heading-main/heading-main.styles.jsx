import styled from "styled-components";

export const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 75px;
  gap: 40px;
  margin-left: 150px;
  margin-right: 150px;
`;

export const HeadingTextBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeadingMainText = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 50px;
  line-height: 70px;
  color: #0b132a;

  text-align: left;
`;

export const MainBoldPart = styled.span`
  font-weight: 600;
`;

export const HeadingSubText = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 30px;
  color: #4f5665;
  margin-top: 20px;
  text-align: left;
`;

export const SubBoldPart = styled.span`
  font-weight: 600;
`;

export const ButtonIcon = styled.button`
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 25px;
  color: #ffffff;
  background: #f53838;
  border-radius: 10px;
  border: none;
  padding: 17.5px 77.5px;
  width: 250px;
  margin-top: 50px;
`;

export const HeadingImage = styled.div`
  width: 711.24px;
`;

export const ImageDetails = styled.img`
  width: 150%;
`;
