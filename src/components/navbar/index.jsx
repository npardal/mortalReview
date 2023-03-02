import React from "react";
import styled from "styled-components";
import { BrandLogo } from "../brandLogo";
import { Button } from "../button";

const NavBarContainer = styled.div`
  width: 100%;
  height: 85px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AnchorLink = styled.a`
  font-size: 12px;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  outline: none;
  transition: all 200ms ease-in-out;
  &:hover {
    filter: contrast(0.6);
  }
  padding-right: 40px;
  font-family: "Press Start 2P", cursive;
  padding-top: 10px;
`;

const LinkContainers = styled.div`
  display: flex;
`;

export function Navbar(props) {
  return (
    <NavBarContainer>
      <BrandLogo />
      <LinkContainers>
        <AnchorLink>User Portal</AnchorLink>
        <AnchorLink>Interviewer Portal</AnchorLink>

        <Button>Register</Button>
      </LinkContainers>
    </NavBarContainer>
  );
}
