import { SectionTitle, SectionSeparator } from "../../globalcomponents";

import { ProjectsSection, ProjectsGrid, ProjectDiv } from "./ProjectsStyles";

const Projects = () => {
  return (
    <ProjectsSection>
      <SectionTitle projects>Projects</SectionTitle>
      <ProjectsGrid></ProjectsGrid>
      <SectionSeparator />
    </ProjectsSection>
  );
};

export default Projects;
