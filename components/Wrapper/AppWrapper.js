import { useState, useEffect, useCallback } from "react";

import useScrollDirection from "../../hooks/useScrollDirection";
import useClick from "../../hooks/useClick";
import useDisabled from "../../hooks/useDisabled";

import { AppDivWrapper, BodyDivWrapper } from "./AppWrapperStyles";

import {
  HiddenNavbar,
  BurgerDiv,
  BurgerSpan,
  NavContainer,
} from "../Navbar/NavbarStyles";

import HiddenNavbarItems from "../Navbar/HiddenNavbarItems";
import HorizontalSocials from "../Socials/HorizontalSocials";
import HorizontalContact from "../Contact/HorizontalContact";
import Navbar from "../Navbar/Navbar";
import Socials from "../Socials/Socials";
import Contact from "../Contact/Contact";
import Layout from "../../layout/Layout";

import Welcome from "../Welcome/Welcome";
import Projects from "../Projects/Projects";
import Technologies from "../Technologies/Technologies";
import About from "../About/About";
import Footer from "../Footer/Footer";

import data from "../../utils/data";

const AppWrapper = () => {
  const [mobileNavbar, setMobileNavbar] = useState(false);
  const [isMobile, setIsMobile] = useState("");
  const [windowHeight, setWindowHeight] = useState(0);
  const [windowScroll, setWindowScroll] = useState(0);
  const [initialLoad, setInitialLoad] = useState(true);
  const [roof, setRoof] = useState(true);
  const scrollDirection = useScrollDirection();
  const [click, increment] = useClick();
  const [disabled, prohibit] = useDisabled(600);

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

  const closeNav = useCallback(() => {
    setMobileNavbar(false);
  }, []);

  const handleScroll = () => {
    if (!initialLoad) {
      return;
    } else {
      setInitialLoad(false);
    }

    const windowHeight = window.innerHeight;
    const windowScroll = window.scrollY;

    windowScroll > 0 ? setRoof(false) : setRoof(true);

    setWindowHeight(windowHeight);
    setWindowScroll(windowScroll);
  };

  const handleResize = () => {
    const windowWidth = window.innerWidth;
    windowWidth > 768 ? setMobileNavbar(false) : null;
    windowWidth > 768 ? setIsMobile(false) : setIsMobile(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    const windowWidth = window.innerWidth;
    windowWidth > 768 ? setIsMobile(false) : setIsMobile(true);

    return () => {
      window.removeEventListener("resize", handleScroll);
      window.removeEventListener("scroll", handleResize);
    };
  }, []);

  return (
    <AppDivWrapper state={mobileNavbar}>
      <NavContainer
        scrollDirection={scrollDirection}
        roof={roof}
        state={mobileNavbar}
        initialLoad={initialLoad}
      >
        <Navbar />

        <BurgerDiv onClick={handleClick} state={mobileNavbar}>
          <BurgerSpan state={mobileNavbar} />
        </BurgerDiv>

        <HiddenNavbar state={mobileNavbar}>
          {data.menu.map((item, index) => {
            return (
              <HiddenNavbarItems
                state={mobileNavbar}
                name={item.name}
                id={item.id}
                number={item.number}
                key={index}
                closeNav={closeNav}
              />
            );
          })}
          <HorizontalSocials />
          <HorizontalContact />
        </HiddenNavbar>
      </NavContainer>

      <BodyDivWrapper state={mobileNavbar}>
        <Socials />
        <Contact />

        <Layout>
          <Welcome />
          <Projects
            windowHeight={windowHeight}
            windowScroll={windowScroll}
            isMobile={isMobile}
          />
          <Technologies
            windowHeight={windowHeight}
            windowScroll={windowScroll}
          />
          <About windowHeight={windowHeight} windowScroll={windowScroll} />
          <Footer windowHeight={windowHeight} windowScroll={windowScroll} />
        </Layout>
      </BodyDivWrapper>
    </AppDivWrapper>
  );
};

export default AppWrapper;
