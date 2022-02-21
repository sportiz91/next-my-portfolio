import { useEffect, useRef, useState } from "react";

import {
  PageSection,
  SectionTitle,
  SectionTitleAndLine,
  SectionLine,
  SectionDivSeparator,
  SectionSeparator,
} from "../../globalcomponents";

import { ProjectsWrapper } from "./ProjectsStyles";

import OtherProjects from "./OtherProjects";

import data from "../../utils/data";

import ProjectCard from "./ProjectCard";

const Projects = ({ windowHeight, windowScroll, isMobile }) => {
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
  }, [windowScroll, showSection, windowHeight]);

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
          return <ProjectCard key={index} item={item} isMobile={isMobile} />;
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
