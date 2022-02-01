import { NavDivHidden, MiddleText } from "./NavbarStyles";

import { AiFillCaretRight } from "react-icons/ai";

import Link from "next/link";

const HiddenNavbarItems = () => {
  return (
    <NavDivHidden>
      <Link href="#projects">
        <a>
          <MiddleText mobile>Projects</MiddleText>
          <AiFillCaretRight className="icon mobile" />
        </a>
      </Link>

      <Link href="#technologies">
        <a>
          <MiddleText mobile>Technologies</MiddleText>
          <AiFillCaretRight className="icon mobile" />
        </a>
      </Link>

      <Link href="#about">
        <a>
          <MiddleText mobile>About</MiddleText>
          <AiFillCaretRight className="icon mobile" />
        </a>
      </Link>
    </NavDivHidden>
  );
};

export default HiddenNavbarItems;
