import { useState, useEffect, useRef } from "react";

import {
  PageSection,
  MiddleText,
  SectionMiniParagraph,
  AnchorSocials,
  DivSocialsIcon,
} from "../../globalcomponents";

import {
  FooterMobileOrMailDiv,
  FooterOrBannerDiv,
  FooterSectionDiv,
} from "./FooterStyles";

import { NavDivThree } from "../Navbar/NavbarStyles";

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
          <FooterMobileOrMailDiv>
            <SectionMiniParagraph nomargin>EMAIL</SectionMiniParagraph>
            <a href="mailto:sportiz9109@gmail.com">
              <MiddleText footer adj>
                sportiz9109@gmail.com
              </MiddleText>
            </a>
          </FooterMobileOrMailDiv>
        </FooterOrBannerDiv>

        <FooterOrBannerDiv banner>
          <SectionMiniParagraph nomargin>
            Building things for the web.
          </SectionMiniParagraph>
          <NavDivThree>
            <AnchorSocials
              href="https://github.com/sportiz91"
              target="_blank"
              rel="noopener noreferrer"
            >
              <DivSocialsIcon>
                <AiFillGithub size="2.9rem" />
              </DivSocialsIcon>
            </AnchorSocials>

            <AnchorSocials
              href="https://www.linkedin.com/in/santiago-pablo-ortiz-12151266/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <DivSocialsIcon>
                <AiFillLinkedin size="2.9rem" />
              </DivSocialsIcon>
            </AnchorSocials>

            <AnchorSocials
              href="https://www.instagram.com/santimarkets/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <DivSocialsIcon>
                <AiFillInstagram size="2.9rem" />
              </DivSocialsIcon>
            </AnchorSocials>
          </NavDivThree>
        </FooterOrBannerDiv>
      </FooterSectionDiv>
    </PageSection>
  );
};

export default Footer;
