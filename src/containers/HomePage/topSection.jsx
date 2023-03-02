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
  margin: 0;
  font-size: 3.5em;
  color: #ffffff;
  line-height: 1.7;
  font-weight: 900;
  font-family: "Press Start 2P", cursive;
`;

const Description = styled.h6`
  font-family: "Noto Sans", sans-serif;
  font-size: 20px;
  font-weight: 400;
  opacity: 0.5;
  display: flex;
  align-items: center;
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
  color: black;
  &:focus {
    outline: none;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;
export function TopSection(props) {
  const { children } = props;

  return (
    <TopSectionContainer>
      <BackgroundFilter>
        {children}
        <TopSectionInnerContainer>
          <Title>
            Mortal Reviewer
            <>
              <br></br>
              <Description>
                Find your next superstar employee, with way less effort! <br />{" "}
                Use Mortal reviewer to and get started today
              </Description>
              <BeginBtn>Begin</BeginBtn>
            </>
          </Title>
        </TopSectionInnerContainer>
      </BackgroundFilter>
    </TopSectionContainer>
  );
}
