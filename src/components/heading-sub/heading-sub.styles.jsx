import styled from "styled-components";

export const HeadingSubContainer = styled.div`
  display: flex;
  width: 800px;
  padding: 40px 112px;
  background: #ffffff;
  border-radius: 10px;
  margin-top: 120px;
  margin-left: 120px;
  gap: 150px;
`;

export const ItemsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-right: 2px solid #eeeff2;
  &:nth-child(3) {
    border: none;
  }
  margin-left: 110px;
`;
export const Details = styled.div`
  display: flex;
  position: relative;
  right: 120px;
  padding: 30px 0;
`;

export const LogoUser = styled.img`
  background: #ffecec;
  border-radius: 70px;
  padding: 19.1px 19.1px 17.9px 19.1px;
`;

export const LogoLocation = styled.img`
  background: #ffecec;
  border-radius: 70px;
  padding: 17.5px 20.5px;
`;

export const LogoServer = styled.img`
  background: #ffecec;
  border-radius: 70px;
  padding: 18.5px 17.5px;
`;

export const DetailsLogoContainer = styled.div`
  margin-left: 36px;
  text-align: left;
`;

export const LogoCount = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 30px;
  color: #0b132a;
`;

export const LogoName = styled.span`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  color: #4f5665;
`;
