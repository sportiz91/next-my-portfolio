/*
  Anchor of right navbar in mobile view
*/

import {
  DivSocialsHorizontal,
  AnchorSocials,
  DivSocialsIcon,
} from "../../globalcomponents";

import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";

const HorizontalSocials = () => {
  return (
    <DivSocialsHorizontal>
      <AnchorSocials
        href="https://github.com/sportiz91"
        target="_blank"
        rel="noopener noreferrer"
      >
        <DivSocialsIcon>
          <AiFillGithub className="icon" />
        </DivSocialsIcon>
      </AnchorSocials>

      <AnchorSocials
        href="https://www.linkedin.com/in/santiagoportiz/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <DivSocialsIcon>
          <AiFillLinkedin className="icon" />
        </DivSocialsIcon>
      </AnchorSocials>

      <AnchorSocials
        href="https://twitter.com/sportiz91"
        target="_blank"
        rel="noopener noreferrer"
      >
        <DivSocialsIcon>
          <AiFillTwitterSquare className="icon" />
        </DivSocialsIcon>
      </AnchorSocials>
    </DivSocialsHorizontal>
  );
};

export default HorizontalSocials;
