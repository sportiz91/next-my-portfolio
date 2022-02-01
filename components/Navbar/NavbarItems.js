import { NavDivTwo } from "./NavbarStyles";
import { MiddleText } from "./NavbarStyles";

import Link from "next/link";

import { AiFillCaretRight } from "react-icons/ai";

const NavbarItems = () => {
  return (
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
  );
};

export default NavbarItems;
