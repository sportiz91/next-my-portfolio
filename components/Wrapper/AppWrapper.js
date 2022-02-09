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
import Footer from "../Footer/Footer";

import useScrollDirection from "../../hooks/useScrollDirection";

const AppWrapper = () => {
  const [mobileNavbar, setMobileNavbar] = useState(false);
  // const [windowHeight, setWindowHeight] = useState(0);
  // const [windowScroll, setWindowScroll] = useState(0);
  const scrollDirection = useScrollDirection("");
  const [click, increment] = useClick();
  const [disabled, prohibit] = useDisabled(1650);

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

  // const handleScroll = () => {
  //   const windowHeight = window.innerHeight;
  //   const windowScroll = window.scrollY;

  //   // console.log(windowScroll);
  //   // console.log(lastScroll);

  //   // if (windowScroll <= lastScroll) {
  //   //   setVisible(true);
  //   // } else {
  //   //   setVisible(false);
  //   // }

  //   // setLastScroll(windowScroll);
  //   // console.log(lastScroll);

  //   setWindowHeight(windowHeight);
  //   setWindowScroll(windowScroll);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", () => handleScroll());
  //   return window.removeEventListener("scroll", () => handleScroll());
  // }, []);

  //Remember -> add the props to Layout if I opt for the above option.
  return (
    <AppDivWrapper>
      <HiddenNavbar state={mobileNavbar}>
        <HiddenNavbarItems state={mobileNavbar} />
      </HiddenNavbar>
      <BurgerDiv onClick={handleClick} state={mobileNavbar}>
        <BurgerSpan state={mobileNavbar} />
      </BurgerDiv>
      <Navbar scrollDirection={scrollDirection} />
      <Layout>
        <Welcome />
        <Projects />
        <Technologies />
        <About />
        <Footer />
      </Layout>
    </AppDivWrapper>
  );
};

export default AppWrapper;
