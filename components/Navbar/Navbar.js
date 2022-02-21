import { AiFillCaretRight } from "react-icons/ai";

import { DiCssdeck } from "react-icons/di";

import {
  NavDivOne,
  AnchorLogo,
  PortfolioText,
  NavDivTwo,
  NavNumber,
} from "./NavbarStyles";

import { MiddleText, AnchorNavMenuOrShow } from "../../globalcomponents";

import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <NavDivOne>
        <Link href="/" passHref>
          <AnchorLogo>
            <DiCssdeck size="4rem" />
            <PortfolioText>Portfolio</PortfolioText>
          </AnchorLogo>
        </Link>
      </NavDivOne>

      <NavDivTwo>
        <Link href="#projects" passHref>
          <AnchorNavMenuOrShow>
            <NavNumber>01.</NavNumber>
            <MiddleText nav>Projects</MiddleText>
            <AiFillCaretRight className="icon" />
          </AnchorNavMenuOrShow>
        </Link>

        <Link href="#technologies" passHref>
          <AnchorNavMenuOrShow>
            <NavNumber>02.</NavNumber>
            <MiddleText nav>Technologies</MiddleText>
            <AiFillCaretRight className="icon" />
          </AnchorNavMenuOrShow>
        </Link>

        <Link href="#about" passHref>
          <AnchorNavMenuOrShow>
            <NavNumber>03.</NavNumber>
            <MiddleText nav>About</MiddleText>
            <AiFillCaretRight className="icon" />
          </AnchorNavMenuOrShow>
        </Link>
      </NavDivTwo>
    </>
  );
};

export default Navbar;

{
  /* <NavDivThree>
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
      </NavDivThree> */
}
