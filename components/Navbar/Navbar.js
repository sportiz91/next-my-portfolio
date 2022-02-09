import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillCaretRight,
} from "react-icons/ai";

import { DiCssdeck } from "react-icons/di";

import {
  NavContainer,
  NavDivOne,
  PortfolioText,
  NavDivTwo,
  NavDivThree,
  AnchorNav,
  IconDiv,
} from "./NavbarStyles";

import { MiddleText } from "../../globalcomponents";

import Link from "next/link";

const Navbar = ({ scrollDirection }) => {
  return (
    <NavContainer scrollDirection={scrollDirection}>
      <NavDivOne>
        <Link href="/">
          <a style={{ display: "flex", alignItems: "center", color: "white" }}>
            <DiCssdeck size="4rem" />
            <PortfolioText>Portfolio</PortfolioText>
          </a>
        </Link>
      </NavDivOne>

      <NavDivTwo>
        <Link href="#projects">
          <a>
            <MiddleText first>Projects</MiddleText>
            <AiFillCaretRight className="icon" />
          </a>
        </Link>

        <Link href="#technologies">
          <a>
            <MiddleText>Technologies</MiddleText>
            <AiFillCaretRight className="icon" />
          </a>
        </Link>

        <Link href="#about">
          <a>
            <MiddleText>About</MiddleText>
            <AiFillCaretRight className="icon" />
          </a>
        </Link>
      </NavDivTwo>

      <NavDivThree>
        <AnchorNav
          href="https://github.com/sportiz91"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconDiv>
            <AiFillGithub size="3rem" />
          </IconDiv>
        </AnchorNav>

        <AnchorNav
          href="https://www.linkedin.com/in/santiago-pablo-ortiz-12151266/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconDiv>
            <AiFillLinkedin size="3rem" />
          </IconDiv>
        </AnchorNav>

        <AnchorNav
          href="https://www.instagram.com/santimarkets/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconDiv>
            <AiFillInstagram size="3rem" />
          </IconDiv>
        </AnchorNav>
      </NavDivThree>
    </NavContainer>
  );
};

export default Navbar;
