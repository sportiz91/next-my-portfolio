import {
  NavNumber,
  MiddleText,
  AnchorNavMenuOrShow,
} from "../../globalcomponents";

import { NavNumberDiv, NavNumberWrapperDiv } from "./NavbarStyles";

import { AiFillCaretRight } from "react-icons/ai";

import Link from "next/link";

const HiddenNavbarItems = ({ name, id, number, closeNav }) => {
  return (
    <Link href={id} passHref>
      <AnchorNavMenuOrShow mobile onClick={() => closeNav()}>
        <NavNumberWrapperDiv>
          <NavNumberDiv>
            <NavNumber mobile>{number}</NavNumber>
            <MiddleText nav mobile>
              {name}
            </MiddleText>
          </NavNumberDiv>
          <AiFillCaretRight className="icon mobile" />
        </NavNumberWrapperDiv>
      </AnchorNavMenuOrShow>
    </Link>
  );
};

export default HiddenNavbarItems;
