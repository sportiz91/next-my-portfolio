import { useState } from "react";

import {
  SectionMiniParagraph,
  ProjectInfoOrTechName,
} from "../../globalcomponents";

import { SectionButton } from "../../globalcomponents/Buttons";

import {
  ProjectDiv,
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

import { AiFillGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ item }) => {
  const [showDescription, setShowDescription] = useState(false);

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
        <SectionButton
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
        ) : null}
      </ProjectInfoDiv>
    </ProjectDiv>
  );
};

export default ProjectCard;
