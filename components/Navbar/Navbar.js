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
  NavDiv,
  MiddleText,
  AnchorNav,
  IconDiv,
} from "./NavbarStyles";

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
      <NavDiv center>
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
      </NavDiv>
      <NavDiv icons>
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
      </NavDiv>
    </NavContainer>
  );
};

export default Navbar;
