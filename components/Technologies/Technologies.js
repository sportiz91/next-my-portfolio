import { useState, useEffect, useRef } from "react";

import {
  PageSection,
  SectionTitleAndLine,
  SectionTitle,
  SectionLine,
  SectionParagraph,
  SectionParagraphColor,
  ProjectInfoOrTechName,
} from "../../globalcomponents";

import { SectionButton } from "../../globalcomponents/Buttons";

// import {
//   TechButton,
//   TechButtonsDiv,
//   TechDetailBrandDiv,
//   TechDetailDiv,
//   TechInfoDiv,
//   TechParagraph,
//   TechMiniParagraph,
// } from "./TechnologiesStyles";

import {
  TechInfoDiv,
  TechInfoIntroDiv,
  TechLogoAndNameWrapper,
  TechNameAndButtonDiv,
  TechInfoTechnologiesDiv,
  TechNameAndArrowWrapper,
} from "./TechnologiesStyles";

import { DiReact } from "react-icons/di";
import { FaDatabase } from "react-icons/fa";
import { GoTools } from "react-icons/go";

import data from "../../utils/data";
import { AiFillCaretRight } from "react-icons/ai";

const Technologies = ({ windowHeight, windowScroll }) => {
  const [showSection, setShowSection] = useState(false);
  const [front, setFront] = useState(false);
  const [back, setBack] = useState(false);
  const [devops, setDevops] = useState(false);
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
  }, [windowScroll, showSection, windowHeight]);

  return (
    <PageSection ref={projectsRef} showSection={showSection} id="technologies">
      <SectionTitleAndLine>
        <SectionTitle title nomargin links>
          Technologies
        </SectionTitle>
        <SectionLine />
      </SectionTitleAndLine>

      <SectionParagraph tech>
        These are the{" "}
        <SectionParagraphColor>technologies</SectionParagraphColor> I’ve been
        working with recently:
      </SectionParagraph>

      <TechInfoDiv>
        <TechInfoIntroDiv>
          <TechLogoAndNameWrapper>
            <DiReact size={"4rem"} className="icon" />
            <TechNameAndButtonDiv className="first">
              <ProjectInfoOrTechName>Front-End</ProjectInfoOrTechName>
              <SectionButton tech onClick={() => setFront(!front)}>
                {front ? "Hide" : "Show"}
              </SectionButton>
            </TechNameAndButtonDiv>
          </TechLogoAndNameWrapper>

          {front ? (
            <TechInfoTechnologiesDiv>
              {data.tech[0].front.map((item, index) => {
                return (
                  <TechNameAndArrowWrapper key={index}>
                    <AiFillCaretRight className="icon" />
                    <ProjectInfoOrTechName key={index} tech paragraph>
                      {item.name}
                    </ProjectInfoOrTechName>
                  </TechNameAndArrowWrapper>
                );
              })}
            </TechInfoTechnologiesDiv>
          ) : null}
        </TechInfoIntroDiv>

        <TechInfoIntroDiv>
          <TechLogoAndNameWrapper>
            <FaDatabase size={"3rem"} className="icon" />
            <TechNameAndButtonDiv>
              <ProjectInfoOrTechName>Back-End</ProjectInfoOrTechName>
              <SectionButton tech onClick={() => setBack(!back)}>
                {back ? "Hide" : "Show"}
              </SectionButton>
            </TechNameAndButtonDiv>
          </TechLogoAndNameWrapper>

          {back ? (
            <TechInfoTechnologiesDiv>
              {data.tech[1].back.map((item, index) => {
                return (
                  <TechNameAndArrowWrapper key={index}>
                    <AiFillCaretRight className="icon" />
                    <ProjectInfoOrTechName key={index} tech paragraph>
                      {item.name}
                    </ProjectInfoOrTechName>
                  </TechNameAndArrowWrapper>
                );
              })}
            </TechInfoTechnologiesDiv>
          ) : null}
        </TechInfoIntroDiv>

        <TechInfoIntroDiv>
          <TechLogoAndNameWrapper>
            <GoTools size={"3rem"} className="icon" />
            <TechNameAndButtonDiv>
              <ProjectInfoOrTechName>DevOps & Tools</ProjectInfoOrTechName>
              <SectionButton tech onClick={() => setDevops(!devops)}>
                {devops ? "Hide" : "Show"}
              </SectionButton>
            </TechNameAndButtonDiv>
          </TechLogoAndNameWrapper>

          {devops ? (
            <TechInfoTechnologiesDiv>
              {data.tech[2].devops.map((item, index) => {
                return (
                  <TechNameAndArrowWrapper key={index}>
                    <AiFillCaretRight className="icon" />
                    <ProjectInfoOrTechName key={index} tech paragraph>
                      {item.name}
                    </ProjectInfoOrTechName>
                  </TechNameAndArrowWrapper>
                );
              })}
            </TechInfoTechnologiesDiv>
          ) : null}
        </TechInfoIntroDiv>
      </TechInfoDiv>
    </PageSection>
  );
};

export default Technologies;
