/*
  OtherProjects sub-section component.
*/

import {
  SectionTitle,
  AnchorNavMenuOrShow,
  MiddleText,
  ProjectInfoOrTechName,
  SectionMiniParagraph,
} from "../../globalcomponents";

import {
  OtherProjectsDiv,
  ProjectDiv,
  ProjectLinksDiv,
  ProjectLinksSourceDiv,
} from "./OtherProjectsStyles";

import { ProjectInfoDescription, ProjectInfoTags } from "./ProjectsStyles";

import {
  AiFillCaretRight,
  AiFillGithub,
  AiOutlineFolder,
} from "react-icons/ai";

import { FiExternalLink } from "react-icons/fi";

import data from "../../utils/data";

const OtherProjects = () => {
  return (
    <>
      <SectionTitle links>Other Projects</SectionTitle>
      <a
        href="https://github.com/sportiz91"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AnchorNavMenuOrShow show>
          <MiddleText view>View the archive</MiddleText>
          <AiFillCaretRight className="icon view" />
        </AnchorNavMenuOrShow>
      </a>

      <OtherProjectsDiv>
        {data.other.map((item, index) => {
          return (
            <ProjectDiv key={index}>
              <ProjectLinksDiv>
                <AiOutlineFolder className="icon folder" />
                <ProjectLinksSourceDiv>
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillGithub className="icon" />
                  </a>
                  <a
                    href={item.source}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiExternalLink className="icon" />
                  </a>
                </ProjectLinksSourceDiv>
              </ProjectLinksDiv>
              <ProjectInfoOrTechName other blue>
                {item.title}
              </ProjectInfoOrTechName>
              <ProjectInfoDescription nobackground nopadding other>
                {item.description}
              </ProjectInfoDescription>
              <ProjectInfoTags other>
                {item.tags.map((tech, index) => {
                  return (
                    <SectionMiniParagraph key={index} other>
                      {tech}
                    </SectionMiniParagraph>
                  );
                })}
              </ProjectInfoTags>
            </ProjectDiv>
          );
        })}
      </OtherProjectsDiv>
    </>
  );
};

export default OtherProjects;
