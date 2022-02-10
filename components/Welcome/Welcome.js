import {
  WelcomeSection,
  DivWelcomeContent,
  WelcomeButtonsDiv,
  DivWelcomeSVG,
} from "./WelcomeStyles";

import {
  SectionTitle,
  SectionParagraph,
  SpanUnderline,
  SectionMiniParagraph,
} from "../../globalcomponents";

import { SectionButton } from "../../globalcomponents/Buttons";

import BackgroundAnimation from "./BackgroundAnimation";
import { useEffect, useState } from "react";

const Welcome = () => {
  const [showSection, setShowSection] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowSection(true);
    }, 100);
  }, []);

  return (
    <WelcomeSection showSection={showSection}>
      <DivWelcomeContent>
        <SectionMiniParagraph project margin>
          Hi, my name is
        </SectionMiniParagraph>
        <SectionTitle name>Santiago Ortiz.</SectionTitle>
        <SectionTitle welcome>Welcome to my Portfolio.</SectionTitle>
        <SectionParagraph>
          Full-Stack Developer, BA in Economics, Master in Finance. I'm
          self-taught and I love making things on the web, focusing mainly on
          JavaScript and the MERN Stack.
        </SectionParagraph>
        <WelcomeButtonsDiv>
          <SectionButton href="#projects">See Projects</SectionButton>
          <SectionButton href="#about">About me</SectionButton>
        </WelcomeButtonsDiv>
      </DivWelcomeContent>
      <DivWelcomeSVG>{/* <BackgroundAnimation /> */}</DivWelcomeSVG>
    </WelcomeSection>
  );
};

export default Welcome;
