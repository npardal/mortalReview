import React from "react";
import styled from "styled-components";
import TopSectionBackground from "../../images/background2.gif";

const TopSectionContainer = styled.div`
  width: 100%;
  height: 970px;
  background: url(${TopSectionBackground});
  background-size: cover;
`;
const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(38, 70, 83, 0.3);
  flex-direction: columm;
`;

const TopSectionInnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: #ffffff;
  line-height: 1.7;

  font-family: "Press Start 2P", cursive;
`;

const Description = styled.h6`
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
  opacity: 0.5;
  display: flex;

  justify-content: center;
`;

const BeginBtn = styled.button`
  background-color: #ffd700;

  padding: 15px 30px 15px 30px;
  font-family: "Press Start 2P", cursive;
  font-size: 18px;
  &:hover {
    background-color: #ffffe0;
  }
  &:hover {
    background-color: #ffff;
  }
  &:focus {
    outline: none;
  }
`;
export function TopSection(props) {
  const { children } = props;

  return (
    <TopSectionContainer>
      <BackgroundFilter>
        {children}
        <TopSectionInnerContainer>
          <Title className="text-5xl font-black content-center ">
            Mortal Reviewer
            <>
              <br></br>
              <Description className="font-bold text-white ">
                Find your next superstar employee, with way less effort! <br />{" "}
              </Description>
              <BeginBtn className="content-center text-black">
                Begin
              </BeginBtn>
            </>
          </Title>
        </TopSectionInnerContainer>
      </BackgroundFilter>
    </TopSectionContainer>
  );
}
