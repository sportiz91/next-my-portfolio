import { AppDivWrapper } from "./AppWrapperStyles";

import Layout from "../../layout/Layout";
import Navbar from "../../components/Navbar/Navbar";
import { HiddenNavbar } from "../Navbar/NavbarStyles";
import { BurgerDiv, BurgerSpan } from "../Navbar/NavbarStyles";
import { useState, useEffect } from "react";
import HiddenNavbarItems from "../Navbar/HiddenNavbarItems";
import useClick from "../../hooks/useClick";
import useDisabled from "../../hooks/useDisabled";
import Welcome from "../Welcome/Welcome";
import Projects from "../Projects/Projects";
import Technologies from "../Technologies/Technologies";
import About from "../About/About";

const AppWrapper = () => {
  const [mobileNavbar, setMobileNavbar] = useState(false);
  const [windowHeight, setWindowHeight] = useState(0);
  const [windowScroll, setWindowScroll] = useState(0);
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

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const windowScroll = window.scrollY;

    setWindowHeight(windowHeight);
    setWindowScroll(windowScroll);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => handleScroll());
    return window.removeEventListener("scroll", () => handleScroll());
  }, []);

  return (
    <AppDivWrapper>
      <HiddenNavbar state={mobileNavbar}>
        <HiddenNavbarItems state={mobileNavbar} />
      </HiddenNavbar>
      <BurgerDiv onClick={handleClick} state={mobileNavbar}>
        <BurgerSpan state={mobileNavbar} />
      </BurgerDiv>
      <Navbar />
      <Layout>
        <Welcome />
        <Projects windowHeight={windowHeight} windowScroll={windowScroll} />
        <Technologies windowHeight={windowHeight} windowScroll={windowScroll} />
        <About windowHeight={windowHeight} windowScroll={windowScroll} />
      </Layout>
    </AppDivWrapper>
  );
};

export default AppWrapper;
