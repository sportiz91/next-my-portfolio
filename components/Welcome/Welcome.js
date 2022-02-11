import {
  WelcomeSection,
  DivWelcomeContent,
  WelcomeButtonsDiv,
  DivWelcomeSVG,
} from "./WelcomeStyles";

import {
  SectionTitle,
  SectionParagraph,
  SectionMiniParagraph,
  SectionParagraphColor,
  PageSection,
} from "../../globalcomponents";

import { SectionButton } from "../../globalcomponents/Buttons";

import { useEffect, useState } from "react";

const Welcome = () => {
  const [showSection, setShowSection] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowSection(true);
    }, 100);
  }, []);

  return (
    <PageSection showSection={showSection}>
      <DivWelcomeContent>
        <SectionMiniParagraph project margin>
          Hi, my name is
        </SectionMiniParagraph>
        <SectionTitle name>Santiago Ortiz.</SectionTitle>
        <SectionTitle welcome>Welcome to my Portfolio Website.</SectionTitle>
        <SectionParagraph>
          Full-Stack Developer, BA in Economics, Master in Finance. I'm
          self-taught and I love making things on the web, focusing mainly on{" "}
          <SectionParagraphColor>JavaScript</SectionParagraphColor> and the{" "}
          <SectionParagraphColor>MERN Stack.</SectionParagraphColor>
        </SectionParagraph>
        <WelcomeButtonsDiv>
          <SectionButton href="#projects">See Projects</SectionButton>
          <SectionButton href="#about">About me</SectionButton>
        </WelcomeButtonsDiv>
      </DivWelcomeContent>
      <DivWelcomeSVG>{/* <BackgroundAnimation /> */}</DivWelcomeSVG>
    </PageSection>
  );
};

export default Welcome;
