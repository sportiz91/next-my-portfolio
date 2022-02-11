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
  NavNumber,
  NavDivThree,
  AnchorNav,
  IconDiv,
} from "./NavbarStyles";

import { MiddleText, AnchorRightNav } from "../../globalcomponents";

import Link from "next/link";

const Navbar = ({ scrollDirection, roof }) => {
  return (
    <NavContainer scrollDirection={scrollDirection} roof={roof}>
      <NavDivOne>
        <Link href="/">
          <a
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
            }}
          >
            <DiCssdeck size="4rem" />
            <PortfolioText>Portfolio</PortfolioText>
          </a>
        </Link>
      </NavDivOne>

      <NavDivTwo>
        <Link href="#projects">
          <AnchorRightNav>
            <NavNumber>01.</NavNumber>
            <MiddleText nav>Projects</MiddleText>
            <AiFillCaretRight className="icon" />
          </AnchorRightNav>
        </Link>

        <Link href="#technologies">
          <AnchorRightNav>
            <NavNumber>02.</NavNumber>
            <MiddleText nav>Technologies</MiddleText>
            <AiFillCaretRight className="icon" />
          </AnchorRightNav>
        </Link>

        <Link href="#about">
          <AnchorRightNav>
            <NavNumber>03.</NavNumber>
            <MiddleText nav>About</MiddleText>
            <AiFillCaretRight className="icon" />
          </AnchorRightNav>
        </Link>
      </NavDivTwo>

      {/* <NavDivThree>
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
      </NavDivThree> */}
    </NavContainer>
  );
};

export default Navbar;
