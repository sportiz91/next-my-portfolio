import {
  SectionMiniParagraph,
  ProjectInfoOrTechName,
} from "../../globalcomponents";

import {
  ProjectDiv,
  ProjectImgDiv,
  ProjectInfoDiv,
  ProjectImgAnchor,
  ProjectImgOverlay,
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

        {/* <SectionButton
          featured
          onClick={() => setShowDescription(!showDescription)}
          desc={showDescription}
        >
          {showDescription ? "Hide" : "Show"} Description
        </SectionButton>

        {showDescription ? (
          <>
            <ProjectInfoDescription className="info">
              {item.description}
            </ProjectInfoDescription>
            <ProjectInfoTags className="tags">
              {item.tags.map((tech, index) => {
                return <SectionMiniParagraph tag>{tech}</SectionMiniParagraph>;
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
        ) : null} */}
      </ProjectInfoDiv>
    </ProjectDiv>
  );
};

export default ProjectCard;
