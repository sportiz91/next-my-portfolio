import { useEffect, useRef, useState } from "react";

import {
  PageSection,
  SectionTitle,
  SectionTitleAndLine,
  SectionLine,
  SectionMiniParagraph,
} from "../../globalcomponents";

import {
  ProjectDiv,
  ProjectsWrapper,
  ProjectImgDiv,
  ProjectInfoDiv,
  ProjectInfoName,
  ProjectInfoDescription,
  ProjectInfoTags,
  ProjectSocialsDiv,
  ProjectImgAnchor,
  ProjectImgOverlay,
  ProjectTitleDiv,
  ProjectSocialsAnchor,
} from "./ProjectsStyles";

import OtherProjects from "./OtherProjects";

import { AiFillGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";

import data from "../../utils/data";

const Projects = ({ windowHeight, windowScroll }) => {
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
    <PageSection ref={projectsRef} showSection={showSection} id="projects">
      <SectionTitleAndLine>
        <SectionTitle projects notmain nomargin>
          Projects
        </SectionTitle>
        <SectionLine />
      </SectionTitleAndLine>

      <ProjectsWrapper>
        {data.projects.map((item, index) => {
          return (
            <ProjectDiv key={index}>
              <ProjectImgDiv>
                <ProjectImgAnchor
                  href={item.links[1]}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <ProjectImgOverlay>
                    <img
                      src={item.img}
                      alt="project-picture"
                      className="project-img"
                    />
                  </ProjectImgOverlay>
                </ProjectImgAnchor>
              </ProjectImgDiv>
              <ProjectInfoDiv>
                <ProjectTitleDiv>
                  <SectionMiniParagraph project>
                    Featured Project
                  </SectionMiniParagraph>
                  <ProjectInfoName>{item.title}</ProjectInfoName>
                </ProjectTitleDiv>

                <ProjectInfoDescription className="info">
                  {item.description}
                </ProjectInfoDescription>
                <ProjectInfoTags>
                  {item.tags.map((tech, index) => {
                    return <SectionMiniParagraph>{tech}</SectionMiniParagraph>;
                  })}
                </ProjectInfoTags>
                <ProjectSocialsDiv>
                  <ProjectSocialsAnchor
                    href={item.links[0]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillGithub size={"3rem"} />
                  </ProjectSocialsAnchor>

                  <ProjectSocialsAnchor
                    href={item.links[1]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiExternalLink size={"3rem"} />
                  </ProjectSocialsAnchor>
                </ProjectSocialsDiv>
              </ProjectInfoDiv>
            </ProjectDiv>
          );
        })}
      </ProjectsWrapper>

      <OtherProjects />
    </PageSection>
  );
};

export default Projects;
