import { NavDivHidden, MiddleText, DivWrapper } from "./NavbarStyles";

import { AiFillCaretRight } from "react-icons/ai";

import Link from "next/link";

const HiddenNavbarItems = ({ state }) => {
  return (
    <NavDivHidden>
      <DivWrapper state={state}>
        <Link href="#projects">
          <a>
            <MiddleText mobile>Projects</MiddleText>
            <AiFillCaretRight className="icon mobile" />
          </a>
        </Link>
      </DivWrapper>

      <DivWrapper state={state} middle>
        <Link href="#technologies">
          <a>
            <MiddleText mobile>Technologies</MiddleText>
            <AiFillCaretRight className="icon mobile" />
          </a>
        </Link>
      </DivWrapper>

      <DivWrapper state={state}>
        <Link href="#about">
          <a>
            <MiddleText mobile>About</MiddleText>
            <AiFillCaretRight className="icon mobile" />
          </a>
        </Link>
      </DivWrapper>
    </NavDivHidden>
  );
};

export default HiddenNavbarItems;
