import { WelcomeSection, WelcomeButtonsDiv } from "./WelcomeStyles";

import {
  SectionTitle,
  SectionMiniParagraph,
  SectionParagraph,
  SectionParagraphColor,
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
    <WelcomeSection showSection={showSection}>
      <SectionMiniParagraph blue>Hi, my name is</SectionMiniParagraph>
      <SectionTitle welcome primary>
        Santiago Ortiz.
      </SectionTitle>
      <SectionTitle sub>Welcome to my Portfolio Website.</SectionTitle>
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
    </WelcomeSection>
  );
};

export default Welcome;
