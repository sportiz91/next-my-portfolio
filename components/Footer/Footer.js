import { useState, useEffect, useRef } from "react";

import {
  PageSection,
  MiddleText,
  SectionMiniParagraph,
} from "../../globalcomponents";

import {
  FooterMobileOrMailDiv,
  FooterOrBannerDiv,
  FooterSectionDiv,
} from "./FooterStyles";

import { NavDivThree, AnchorNav, IconDiv } from "../Navbar/NavbarStyles";

import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";

const Footer = ({ windowHeight, windowScroll }) => {
  const [showSection, setShowSection] = useState(false);
  const projectsRef = useRef();

  useEffect(() => {
    const projectsInitialPosition =
      projectsRef.current.getBoundingClientRect().top + windowScroll;

    const currentPosition = windowHeight + windowScroll;

    if (currentPosition >= projectsInitialPosition) {
      if (showSection) {
        return;
      } else {
        setShowSection(true);
      }
    }
  }, [windowScroll]);

  return (
    <PageSection ref={projectsRef} showSection={showSection} footer>
      <FooterSectionDiv>
        <FooterOrBannerDiv>
          <FooterMobileOrMailDiv mobile>
            <SectionMiniParagraph nomargin>CALL</SectionMiniParagraph>
            <MiddleText footer>+54 9 11 5335 7383</MiddleText>
          </FooterMobileOrMailDiv>
          <FooterMobileOrMailDiv>
            <SectionMiniParagraph nomargin>EMAIL</SectionMiniParagraph>
            <MiddleText footer adj>
              sportiz9109@gmail.com
            </MiddleText>
          </FooterMobileOrMailDiv>
        </FooterOrBannerDiv>

        <FooterOrBannerDiv banner>
          <SectionMiniParagraph nomargin>
            Building things for the web.
          </SectionMiniParagraph>
          <NavDivThree>
            <AnchorNav href="https://google.com">
              <IconDiv>
                <AiFillGithub size="3rem" />
              </IconDiv>
            </AnchorNav>

            <AnchorNav href="https://google.com">
              <IconDiv>
                <AiFillLinkedin size="3rem" />
              </IconDiv>
            </AnchorNav>

            <AnchorNav href="https://google.com">
              <IconDiv>
                <AiFillInstagram size="3rem" />
              </IconDiv>
            </AnchorNav>
          </NavDivThree>
        </FooterOrBannerDiv>
      </FooterSectionDiv>
    </PageSection>
  );
};

export default Footer;
