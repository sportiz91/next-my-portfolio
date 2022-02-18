import { SectionMiniParagraph } from "../../globalcomponents";

import {
  ProjectInfoDescription,
  ProjectInfoTags,
  ProjectSocialsDiv,
  ProjectSocialsAnchor,
} from "./ProjectsStyles";

import { AiFillGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";

const ProjectDesktopCardInside = ({ item }) => {
  return (
    <>
      <ProjectInfoDescription className="info">
        {item.description}
      </ProjectInfoDescription>
      <ProjectInfoTags className="tags">
        {item.tags.map((tech, index) => {
          return (
            <SectionMiniParagraph key={index} tag>
              {tech}
            </SectionMiniParagraph>
          );
        })}
      </ProjectInfoTags>
      <ProjectSocialsDiv className="socials">
        <ProjectSocialsAnchor
          href={item.links[0]}
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub size={"2.5rem"} />
        </ProjectSocialsAnchor>

        <ProjectSocialsAnchor
          href={item.links[1]}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiExternalLink size={"2.5rem"} />
        </ProjectSocialsAnchor>
      </ProjectSocialsDiv>
    </>
  );
};

export default ProjectDesktopCardInside;
