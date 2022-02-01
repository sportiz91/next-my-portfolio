import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";

import { DiCssdeck } from "react-icons/di";

import {
  NavContainer,
  NavDivOne,
  PortfolioText,
  NavDivThree,
  AnchorNav,
  IconDiv,
} from "./NavbarStyles";

import NavbarItems from "./NavbarItems";

import Link from "next/link";

const Navbar = () => {
  return (
    <NavContainer>
      <NavDivOne>
        <Link href="/">
          <a style={{ display: "flex", alignItems: "center", color: "white" }}>
            <DiCssdeck size="4rem" />
            <PortfolioText>Portfolio</PortfolioText>
          </a>
        </Link>
      </NavDivOne>

      <NavbarItems />

      <NavDivThree>
        <AnchorNav href="https://google.com">
          <IconDiv>
            <AiFillGithub size="3rem" />
          </IconDiv>
        </AnchorNav>

        <AnchorNav href="https://google.com">
          <IconDiv>
            <AiFillLinkedin size="3rem" />
          </IconDiv>
        </AnchorNav>

        <AnchorNav href="https://google.com">
          <IconDiv>
            <AiFillInstagram size="3rem" />
          </IconDiv>
        </AnchorNav>
      </NavDivThree>
    </NavContainer>
  );
};

export default Navbar;
