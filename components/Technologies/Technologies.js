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
  TechDetailBrandDiv,
  TechDetailDiv,
  TechInfoDiv,
  TechParagraph,
} from "./TechnologiesStyles";

import data from "../../utils/data";

const Technologies = ({ windowHeight, windowScroll }) => {
  const [showSection, setShowSection] = useState(false);
  const [front, setFront] = useState("front");
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
          <TechButton onClick={() => setFront("front")} state={front}>
            <TechParagraph>Front-End</TechParagraph>
          </TechButton>
          <TechButton onClick={() => setFront("back")} state={front}>
            <TechParagraph>Back-End</TechParagraph>
          </TechButton>
          <TechButton onClick={() => setFront("devops")} state={front}>
            <TechParagraph>DevOps & Tools</TechParagraph>
          </TechButton>
        </TechButtonsDiv>

        <TechDetailDiv>
          {front === "front"
            ? data.tech[0].front.map((item, index) => {
                return (
                  <TechDetailBrandDiv>
                    <img src={item.img} alt="logo-img" className="size" />
                    <SectionMiniParagraph other hidden className="show">
                      {item.name}
                    </SectionMiniParagraph>
                  </TechDetailBrandDiv>
                );
              })
            : front === "back"
            ? ""
            : ""}
        </TechDetailDiv>
      </TechInfoDiv>
    </PageSection>
  );
};

export default Technologies;
