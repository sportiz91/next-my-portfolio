/*
  Left socials components in desktop view.
*/

import {
  DivSocialsContainer,
  AnchorSocials,
  DivSocialsIcon,
  LineSocials,
} from "../../globalcomponents";

import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

const Socials = () => {
  return (
    <DivSocialsContainer socials>
      <AnchorSocials
        href="https://github.com/sportiz91"
        target="_blank"
        rel="noopener noreferrer"
      >
        <DivSocialsIcon>
          <FiGithub size={"2rem"} />
        </DivSocialsIcon>
      </AnchorSocials>

      <AnchorSocials
        href="https://www.linkedin.com/in/santiago-pablo-ortiz-12151266/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <DivSocialsIcon>
          <FiLinkedin size={"2rem"} />
        </DivSocialsIcon>
      </AnchorSocials>

      <AnchorSocials
        href="https://twitter.com/sportiz91"
        target="_blank"
        rel="noopener noreferrer"
      >
        <DivSocialsIcon>
          <FiTwitter size={"2rem"} />
        </DivSocialsIcon>
      </AnchorSocials>

      <LineSocials />
    </DivSocialsContainer>
  );
};

export default Socials;
