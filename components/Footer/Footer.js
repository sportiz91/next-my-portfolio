import { useState, useEffect, useRef } from "react";

import HorizontalSocials from "../Socials/HorizontalSocials";

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
          <HorizontalSocials />
        </FooterOrBannerDiv>
      </FooterSectionDiv>
    </PageSection>
  );
};

export default Footer;
