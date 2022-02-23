/*
  AppWrapper component is the father of all the structure.
  Inherits Styled Theming object, Global Styles and font (from modified _document.js).
  Also, we don't have any initial prop inherited in _app.js (pageProps is an empty object).
*/

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

  // click === 0 means the navbar haven't been opened this session yet.
  // Because mobileNavbar initial state === false, then mobileNavbar === true (get's opened).
  // increment by +1 signaling we are no longer in initial opening.
  // prohibit for 600 ms to click again.
  // click !== 0 means we have opened the nav before in this session.
  // if disabled === true, then we can't click the nav again after the 600 ms are completed.
  // if disabled time has passed, then, we set the mobileNavbar state to the opposite and then prohibit again
  // for 600ms.
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

  //This function construction only is defined on page load.
  //Function to close the navBar.
  const closeNav = useCallback(() => {
    setMobileNavbar(false);
  }, []);

  //handleScroll function construction only changes when initialLoad dependancy changes.
  //initialLoad only changes when we scroll down the first time, so we have only 2 function constructions for this function.
  //Chaning initialLoad only the first time we scroll
  //Changing setRoof to false if we scrolled:
  const handleScroll = useCallback(() => {
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
  }, [initialLoad]);

  const handleResize = () => {
    const windowWidth = window.innerWidth;
    windowWidth > 768 ? setMobileNavbar(false) : null;
    windowWidth > 768 ? setIsMobile(false) : setIsMobile(true);
  };

  //this useEffect get's executed when handleScroll function construction changes,
  //so, only two times get's executed.
  //This useEffect adds scroll and resize event listeners. Also, on the initial load of the page,
  //We ask if window inner width is greater that 768. If it is, then we are in desktop view, else, mobile view
  //(mobile view -> right navbar, desktop view -> top navbar)
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    const windowWidth = window.innerWidth;
    windowWidth > 768 ? setIsMobile(false) : setIsMobile(true);

    return () => {
      window.removeEventListener("resize", handleScroll);
      window.removeEventListener("scroll", handleResize);
    };
  }, [handleScroll]);

  return (
    <AppDivWrapper state={mobileNavbar}>
      <NavContainer
        scrollDirection={scrollDirection}
        roof={roof}
        state={mobileNavbar}
        initialLoad={initialLoad}
      >
        <Navbar state={mobileNavbar} />

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
