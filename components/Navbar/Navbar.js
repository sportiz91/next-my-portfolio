import { AiFillCaretRight } from "react-icons/ai";

import { DiCssdeck } from "react-icons/di";

import {
  NavDivOne,
  AnchorLogo,
  PortfolioText,
  NavDivTwo,
} from "./NavbarStyles";

import {
  AnchorNavMenuOrShow,
  MiddleText,
  NavNumber,
} from "../../globalcomponents";

import Link from "next/link";
import data from "../../utils/data";

/*
  When <Link> from next have a React component (can be styled component too) as child,
  Then we have to passHref too (to avoid warnings and future deployment problems).
*/
const Navbar = ({ state }) => {
  return (
    <>
      <NavDivOne state={state}>
        <Link href="/" passHref>
          <AnchorLogo>
            <DiCssdeck size="4rem" />
            <PortfolioText>Portfolio</PortfolioText>
          </AnchorLogo>
        </Link>
      </NavDivOne>

      <NavDivTwo>
        {data.menu.map((item, index) => {
          return (
            <Link key={index} href={item.id} passHref>
              <AnchorNavMenuOrShow>
                <NavNumber>{item.number}</NavNumber>
                <MiddleText>{item.name}</MiddleText>
                <AiFillCaretRight className="icon" />
              </AnchorNavMenuOrShow>
            </Link>
          );
        })}
      </NavDivTwo>
    </>
  );
};

export default Navbar;
