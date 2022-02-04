import { useState, useEffect, useRef } from "react";

import {
  PageSection,
  SectionTitleAndLine,
  SectionTitle,
  SectionLine,
  SectionMiniParagraph,
} from "../../globalcomponents";

import {
  TechButton,
  TechButtonsDiv,
  TechDetailDiv,
  TechInfoDiv,
} from "./TechnologiesStyles";

const Technologies = ({ windowHeight, windowScroll }) => {
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
    <PageSection ref={projectsRef} showSection={showSection}>
      <SectionTitleAndLine>
        <SectionTitle projects notmain nomargin>
          Technologies
        </SectionTitle>
        <SectionLine />
      </SectionTitleAndLine>

      <TechInfoDiv>
        <TechButtonsDiv>
          <TechButton>
            <SectionMiniParagraph other>Front-End</SectionMiniParagraph>
          </TechButton>
          <TechButton>
            <SectionMiniParagraph other>Back-End</SectionMiniParagraph>
          </TechButton>
        </TechButtonsDiv>

        <TechDetailDiv></TechDetailDiv>
      </TechInfoDiv>
    </PageSection>
  );
};

export default Technologies;
