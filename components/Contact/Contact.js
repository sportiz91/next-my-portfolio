/*
  Right mail component in desktop view.
*/

import { DivSocialsContainer, LineSocials } from "../../globalcomponents";

import { ContactText } from "./ContactStyles";

const Contact = () => {
  return (
    <DivSocialsContainer contact>
      <a href="mailto:sportiz9109@gmail.com">
        <ContactText>sportiz9109@gmail.com</ContactText>
      </a>

      <LineSocials />
    </DivSocialsContainer>
  );
};

export default Contact;
