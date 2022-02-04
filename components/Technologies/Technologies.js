import { ProjectsSection } from "../Projects/ProjectsStyles";

import {
  SectionTitleAndLine,
  SectionTitle,
  SectionLine,
} from "../../globalcomponents";

const Technologies = () => {
  <ProjectsSection ref={projectsRef} showSection={showSection}>
    <SectionTitleAndLine>
      <SectionTitle projects notmain nomargin>
        Technologies
      </SectionTitle>
      <SectionLine />
    </SectionTitleAndLine>
  </ProjectsSection>;
};

export default Technologies;
