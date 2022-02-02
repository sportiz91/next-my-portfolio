import { useEffect, useRef, useState } from "react";
import { SectionTitle, SectionSeparator } from "../../globalcomponents";

import { ProjectsSection, ProjectsGrid, ProjectDiv } from "./ProjectsStyles";

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
    <ProjectsSection ref={projectsRef} showSection={showSection}>
      <SectionTitle projects notmain>
        Projects
      </SectionTitle>
      <SectionTitle projects notmain>
        Projects
      </SectionTitle>
      <SectionTitle projects notmain>
        Projects
      </SectionTitle>
      <SectionTitle projects notmain>
        Projects
      </SectionTitle>
      <ProjectsGrid></ProjectsGrid>
      <SectionSeparator />
    </ProjectsSection>
  );
};

export default Projects;
