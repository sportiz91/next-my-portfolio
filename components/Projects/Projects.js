import { useEffect, useRef, useState } from "react";

import {
  PageSection,
  SectionTitle,
  SectionTitleAndLine,
  SectionLine,
  SectionMiniParagraph,
  SectionDivSeparator,
  ProjectInfoOrTechName,
  SectionSeparator,
} from "../../globalcomponents";

import { SectionButton } from "../../globalcomponents/Buttons";

import {
  ProjectDiv,
  ProjectsWrapper,
  ProjectImgDiv,
  ProjectInfoDiv,
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

import ProjectCard from "./ProjectCard";

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
        <SectionTitle title nomargin links>
          Projects
        </SectionTitle>

        <SectionLine />
      </SectionTitleAndLine>

      <ProjectsWrapper>
        {data.projects.map((item, index) => {
          return <ProjectCard key={index} item={item} />;
        })}
      </ProjectsWrapper>

      <SectionDivSeparator>
        <SectionSeparator />
      </SectionDivSeparator>

      <OtherProjects />
    </PageSection>
  );
};

export default Projects;
