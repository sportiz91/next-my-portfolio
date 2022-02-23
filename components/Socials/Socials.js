/*
  Left socials components in desktop view.
*/

import {
  DivSocialsContainer,
  AnchorSocials,
  DivSocialsIcon,
  LineSocials,
} from "../../globalcomponents";

import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";

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
        href="https://www.instagram.com/santimarkets/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <DivSocialsIcon>
          <FiInstagram size={"2rem"} />
        </DivSocialsIcon>
      </AnchorSocials>

      <LineSocials />
    </DivSocialsContainer>
  );
};

export default Socials;
