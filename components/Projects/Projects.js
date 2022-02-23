/*
  Projects section component.
*/

import { useEffect, useRef, useState } from "react";

import {
  PageSection,
  SectionTitleAndLine,
  SectionTitle,
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
    //Calculates initial position of the section assuming you are on the roof.
    const projectsInitialPosition =
      projectsRef.current.getBoundingClientRect().top + windowScroll;

    //Calculates current position
    const currentPosition = windowHeight + windowScroll;

    //When current position surpases initial position, then show the section.
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
