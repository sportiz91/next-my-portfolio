/*
  Individual featured project component
*/

import {
  SectionMiniParagraph,
  ProjectInfoOrTechName,
} from "../../globalcomponents";

import {
  ProjectDiv,
  ProjectImgDiv,
  ProjectImgAnchor,
  ProjectImgOverlay,
  ProjectInfoDiv,
  ProjectTitleDiv,
} from "./ProjectsStyles";

import ProjectDesktopCardInside from "./ProjectDesktopCardInside";
import ProjectMobileCardInside from "./ProjectMobileCardInside";

const ProjectCard = ({ item, isMobile }) => {
  return (
    <ProjectDiv>
      <ProjectImgDiv>
        <ProjectImgAnchor
          href={item.links[1]}
          rel="noopener noreferrer"
          target="_blank"
        >
          <ProjectImgOverlay>
            <img src={item.img} alt="project-picture" className="project-img" />
          </ProjectImgOverlay>
        </ProjectImgAnchor>
      </ProjectImgDiv>
      <ProjectInfoDiv>
        <ProjectTitleDiv className="project-title-div">
          <SectionMiniParagraph project blue>
            Featured Project
          </SectionMiniParagraph>
          <ProjectInfoOrTechName>{item.title}</ProjectInfoOrTechName>
        </ProjectTitleDiv>

        {isMobile ? (
          <ProjectMobileCardInside item={item} />
        ) : (
          <ProjectDesktopCardInside item={item} />
        )}
      </ProjectInfoDiv>
    </ProjectDiv>
  );
};

export default ProjectCard;
