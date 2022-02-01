import TestingComp from "../components/Testing/TestingComp";
import Layout from "../layout/Layout";
import Navbar from "../components/Navbar/Navbar";
import { HiddenNavbar } from "../components/Navbar/NavbarStyles";
import { BurgerDiv, BurgerSpan } from "../components/Navbar/NavbarStyles";
import { useState } from "react";
import HiddenNavbarItems from "../components/Navbar/HiddenNavbarItems";
import useClick from "../hooks/useClick";
import useDisabled from "../hooks/useDisabled";
import Welcome from "../components/Welcome/Welcome";
import Projects from "../components/Projects/Projects";

export default function Home() {
  const [mobileNavbar, setMobileNavbar] = useState(false);
  const [click, increment] = useClick();
  const [disabled, prohibit] = useDisabled();

  const handleClick = () => {
    if (click === 0) {
      setMobileNavbar(!mobileNavbar);
      increment();
      prohibit();
    } else {
      if (disabled) {
        return;
      } else {
        setMobileNavbar(!mobileNavbar);
        prohibit();
      }
    }
  };

  return (
    <>
      <HiddenNavbar state={mobileNavbar}>
        <HiddenNavbarItems state={mobileNavbar} />
      </HiddenNavbar>
      <BurgerDiv onClick={handleClick} state={mobileNavbar}>
        <BurgerSpan state={mobileNavbar} />
      </BurgerDiv>
      <Navbar />
      <Layout>
        <Welcome />
        <Projects />
      </Layout>
    </>
  );
}
