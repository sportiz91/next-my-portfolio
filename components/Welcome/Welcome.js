import {
  WelcomeSection,
  DivWelcomeContent,
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
        <SectionMiniParagraph>Hi, my name is</SectionMiniParagraph>
        <SectionTitle name>Santiago Ortiz.</SectionTitle>
        <SectionTitle sub>
          Welcome to my <SpanUnderline>Portfolio.</SpanUnderline>
        </SectionTitle>
        <SectionParagraph>
          Full-Stack Developer, BA in Economics, Master in Finance. I'm
          self-taught and I love making things on the web, focusing mainly on
          JavaScript and MERN Stack.
        </SectionParagraph>
        <SectionButton>Learn More</SectionButton>
      </DivWelcomeContent>
      <DivWelcomeSVG>
        <BackgroundAnimation />
      </DivWelcomeSVG>
    </WelcomeSection>
  );
};

export default Welcome;
